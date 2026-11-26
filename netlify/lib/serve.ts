import {
  authorization,
  imageUrl,
  isBlocked,
  isDomain,
  isImage,
  MAX_IMAGE_SIZE,
  RAW_TIMEOUT,
  resolveImage,
  type IconIndex,
  type Image,
} from "./marketplace-icons.ts";

const MAX_DIMENSION = 4096;
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const INDEX_TTL = 5 * 60 * 1000;
const INDEX_RETRY = 30 * 1000;
// The sync runs every hour, after this long something is wrong with it
const INDEX_STALE_AFTER = 24 * 60 * 60 * 1000;
// The path of netlify/functions/marketplace-icons.mts. Only the Marketplace
// asks for it, an installed integration serves its own brand folder.
const PATH_RE = /^\/marketplace\/([^/]+)\/([^/]+)$/;

// Home Assistant keeps an icon for 30 days, so a week on the CDN costs nobody
// a fresher icon, and the function runs far less
const ICON_CACHE = "public, max-age=86400, s-maxage=604800, stale-while-revalidate=604800";
// Shorter, so an icon that just got indexed shows up the same day
const ABSENT_CACHE = "public, max-age=3600, s-maxage=21600";

// Home Assistant remembers a 404 for 30 days, so a 404 is only sent when we
// know there is no icon. Anything else is a 503, which it does not remember.
type Outcome =
  | { kind: "icon"; data: Uint8Array<ArrayBuffer> }
  | { kind: "absent" }
  | { kind: "unavailable"; reason: string };

const ABSENT: Outcome = { kind: "absent" };
const unavailable = (reason: string): Outcome => ({ kind: "unavailable", reason });

export interface ServeDependencies {
  getIndex: () => Promise<IconIndex | undefined>;
  fetcher?: typeof fetch;
  token?: string;
  now?: () => number;
}

// Shared by all requests an instance handles. A failed refresh keeps the
// last good index instead of turning every icon into a 503.
export class IndexCache {
  private index: IconIndex | undefined;
  private fetched = 0;
  private failed = -Infinity;
  private refreshing: Promise<void> | undefined;
  private readonly read: () => Promise<IconIndex | undefined>;
  private readonly now: () => number;

  constructor(read: () => Promise<IconIndex | undefined>, now: () => number = Date.now) {
    this.read = read;
    this.now = now;
  }

  async get(): Promise<IconIndex | undefined> {
    const now = this.now();
    const fresh = this.index && now - this.fetched < INDEX_TTL;
    const backingOff = now - this.failed < INDEX_RETRY;
    if (!fresh && !backingOff) {
      this.refreshing ??= this.refresh().finally(() => {
        this.refreshing = undefined;
      });
      await this.refreshing;
    }

    return this.index;
  }

  private async refresh() {
    try {
      this.index = await this.read();
      this.fetched = this.now();
    } catch (error) {
      console.error("Marketplace icons: reading the index failed:", error);
      this.failed = this.now();
    }
  }
}

const responseHeaders = (cacheControl: string) => ({
  // The headers in netlify.toml do not apply to function responses
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": cacheControl,
  "Netlify-CDN-Cache-Control": cacheControl.replace("public,", "public, durable,"),
  // Nothing here depends on the query string. Without this, any query string
  // would get its own cache entry and a trip to GitHub.
  "Netlify-Vary": "query=_",
});

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let crc = n;
  for (let bit = 0; bit < 8; bit++) {
    crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  }
  return crc >>> 0;
});

const crc32 = (data: Uint8Array) => {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
};

// Bit depths the PNG specification allows for each color type
const BIT_DEPTHS: Record<number, number[]> = {
  0: [1, 2, 4, 8, 16],
  2: [8, 16],
  3: [1, 2, 4, 8],
  4: [8, 16],
  6: [8, 16],
};
const PALETTE = 3;

const isValidHeader = (view: DataView, offset: number) => {
  const width = view.getUint32(offset);
  const height = view.getUint32(offset + 4);
  const bitDepth = view.getUint8(offset + 8);
  const colorType = view.getUint8(offset + 9);
  const compression = view.getUint8(offset + 10);
  const filter = view.getUint8(offset + 11);
  const interlace = view.getUint8(offset + 12);

  return (
    width > 0 &&
    height > 0 &&
    width <= MAX_DIMENSION &&
    height <= MAX_DIMENSION &&
    (BIT_DEPTHS[colorType]?.includes(bitDepth) ?? false) &&
    compression === 0 &&
    filter === 0 &&
    (interlace === 0 || interlace === 1)
  );
};

// Walks every chunk, so only a complete, plain PNG gets served from this
// domain. No decoding, that is for the browser.
export const isPng = (data: Uint8Array): boolean => {
  if (!PNG_SIGNATURE.every((byte, index) => data[index] === byte)) {
    return false;
  }

  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const decoder = new TextDecoder();
  let offset = PNG_SIGNATURE.length;
  let first = true;
  let hasData = false;
  let needsPalette = false;

  while (offset + 12 <= data.length) {
    const length = view.getUint32(offset);
    const end = offset + 12 + length;
    if (end > data.length) {
      return false;
    }

    const type = decoder.decode(data.subarray(offset + 4, offset + 8));
    const crc = view.getUint32(offset + 8 + length);
    if (crc32(data.subarray(offset + 4, offset + 8 + length)) !== crc) {
      return false;
    }

    if (first) {
      if (type !== "IHDR" || length !== 13) {
        return false;
      }

      if (!isValidHeader(view, offset + 8)) {
        return false;
      }

      needsPalette = view.getUint8(offset + 17) === PALETTE;
      first = false;
    } else if (type === "IHDR" || type === "acTL") {
      // A second header, or an animation
      return false;
    }

    if (type === "PLTE") {
      needsPalette = false;
    }

    if (type === "IDAT") {
      if (needsPalette) {
        return false;
      }

      hasData = true;
    }

    if (type === "IEND") {
      return hasData && length === 0 && end === data.length;
    }

    offset = end;
  }

  return false;
};

// Stops reading as soon as the limit is passed, a missing or wrong
// Content-Length header does not get to decide that
const readBounded = async (
  response: Response,
): Promise<Uint8Array<ArrayBuffer> | undefined> => {
  if (!response.body) {
    return undefined;
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;

  for (;;) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    size += value.length;
    if (size > MAX_IMAGE_SIZE) {
      await reader.cancel();
      return undefined;
    }

    chunks.push(value);
  }

  const data = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    data.set(chunk, offset);
    offset += chunk.length;
  }

  return data;
};

const parsePath = (url: URL) => {
  const [, domain, image] = url.pathname.match(PATH_RE) ?? [];
  if (!domain || !isDomain(domain) || !isImage(image) || isBlocked(domain)) {
    return undefined;
  }

  return { domain, image };
};

const fetchIcon = async (
  domain: string,
  image: Image,
  { getIndex, fetcher = fetch, token, now = Date.now }: ServeDependencies,
): Promise<Outcome> => {
  const index = await getIndex();
  if (!index) {
    return unavailable("no index");
  }

  const entry = index.domains[domain];
  // While the new ref of an integration waits for its probe, whatever the
  // old ref had is still fine to show
  const resolved = entry && resolveImage(entry, image);
  if (!resolved) {
    if (index.pending.includes(domain)) {
      return unavailable("pending");
    }

    // A sync that stopped working does not get to decide what is missing
    if (now() - Date.parse(index.updated) > INDEX_STALE_AFTER) {
      return unavailable(`index from ${index.updated}`);
    }

    return ABSENT;
  }

  const url = imageUrl(entry, domain, resolved);
  const response = await fetcher(url, {
    headers: authorization(token),
    redirect: "manual",
    signal: AbortSignal.timeout(RAW_TIMEOUT),
  });

  // The index says it is there, so this is GitHub having a moment
  if (response.status !== 200) {
    await response.body?.cancel();
    return unavailable(`${url}: ${response.status}`);
  }

  const data = await readBounded(response);
  if (!data || !isPng(data)) {
    return ABSENT;
  }

  return { kind: "icon", data };
};

export const serve = async (
  request: Request,
  dependencies: ServeDependencies,
): Promise<Response> => {
  const target = parsePath(new URL(request.url));
  if (!target) {
    return new Response("Not found", { status: 404, headers: responseHeaders(ABSENT_CACHE) });
  }

  const { domain, image } = target;
  let outcome: Outcome;
  try {
    outcome = await fetchIcon(domain, image, dependencies);
  } catch (error) {
    // A broken icon of one integration should never break the others
    outcome = unavailable(String(error));
  }

  if (outcome.kind === "icon") {
    return new Response(outcome.data, {
      headers: {
        "Content-Type": "image/png",
        "X-Content-Type-Options": "nosniff",
        ...responseHeaders(ICON_CACHE),
      },
    });
  }

  if (outcome.kind === "unavailable" && outcome.reason !== "pending") {
    console.warn(`Marketplace icons: ${domain}/${image} unavailable, ${outcome.reason}`);
  }

  return outcome.kind === "absent"
    ? new Response("Not found", { status: 404, headers: responseHeaders(ABSENT_CACHE) })
    : new Response("Unavailable", {
        status: 503,
        headers: { ...responseHeaders("no-store"), "Retry-After": "300" },
      });
};
