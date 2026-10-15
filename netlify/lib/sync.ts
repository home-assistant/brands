import {
  authorization,
  IMAGES,
  imageUrl,
  isBlocked,
  isDomain,
  isRef,
  isRepository,
  MAX_IMAGE_SIZE,
  RAW_TIMEOUT,
  type IconIndex,
  type IndexEntry,
} from "./marketplace-icons.ts";

export const FEED_URL = "https://data-v2.hacs.xyz/integration/data.json";
export const BRANDS_DOMAINS_URL = "https://brands.home-assistant.io/domains.json";
const FEED_TIMEOUT = 10000;
// Tags can be moved and brand folders added without a new release
const RECHECK_AFTER = 7 * 24 * 60 * 60 * 1000;
// A feed this much smaller than what we know is broken, not a mass exodus
const MIN_FEED_RATIO = 0.5;

interface FeedEntry {
  domain?: unknown;
  full_name?: unknown;
  last_version?: unknown;
  last_commit?: unknown;
}

export interface Claim {
  domain: string;
  repository: string;
  ref: string;
}

// GitHub is not answering at all, so there is no point in asking it more
export class NoAnswerError extends Error {}

// Something is off with this one repository, the others are fine
export class RepositoryError extends Error {}

export class FeedShrankError extends Error {}

const fetchJson = async <T>(url: string, fetcher: typeof fetch): Promise<T> => {
  const response = await fetcher(url, { signal: AbortSignal.timeout(FEED_TIMEOUT) });
  if (!response.ok) {
    throw new Error(`Fetching ${url} failed: ${response.status}`);
  }

  return (await response.json()) as T;
};

export const fetchClaims = async (fetcher: typeof fetch = fetch): Promise<Claim[]> => {
  const [feed, brandsDomains] = await Promise.all([
    fetchJson<Record<string, FeedEntry>>(FEED_URL, fetcher),
    fetchJson<Record<string, string[]>>(BRANDS_DOMAINS_URL, fetcher),
  ]);

  // Only these end up on the paths we serve, core_brands live under /brands/
  const inBrands = new Set(
    ["core", "custom", "thread"].flatMap((category) => brandsDomains[category] ?? []),
  );

  const claims: Claim[] = [];
  for (const entry of Object.values(feed)) {
    const { domain, full_name: repository } = entry;
    const ref = entry.last_version || entry.last_commit;
    if (
      typeof domain !== "string" ||
      typeof repository !== "string" ||
      typeof ref !== "string"
    ) {
      continue;
    }

    if (!isDomain(domain) || !isRepository(repository) || !isRef(ref)) {
      continue;
    }

    if (inBrands.has(domain) || isBlocked(domain)) {
      continue;
    }

    claims.push({ domain, repository, ref });
  }

  return claims;
};

// One repository per domain. The one we already know keeps it, so a newcomer
// claiming the same domain cannot take an icon away. Without history, nobody
// gets it.
const resolveClaims = (claims: Claim[], previous: IconIndex | undefined): Claim[] => {
  const byDomain = Map.groupBy(claims, (claim) => claim.domain);

  return [...byDomain.values()].flatMap((domainClaims) => {
    if (domainClaims.length === 1) {
      return domainClaims;
    }

    const known = previous?.domains[domainClaims[0].domain];
    const established = domainClaims.find(
      (claim) => claim.repository === known?.repository,
    );
    return established ? [established] : [];
  });
};

const imageExists = async (
  url: string,
  fetcher: typeof fetch,
  headers: Record<string, string>,
): Promise<boolean> => {
  let response: Response;
  try {
    response = await fetcher(url, {
      method: "HEAD",
      headers,
      redirect: "manual",
      signal: AbortSignal.timeout(RAW_TIMEOUT),
    });
  } catch (error) {
    throw new NoAnswerError(`${url}: ${error}`);
  }

  // Too big to be served, so the fallback chain gets to pick another one
  if (response.ok) {
    return !(Number(response.headers.get("content-length")) > MAX_IMAGE_SIZE);
  }

  // Raw does not redirect to images, so this is not the file we asked for
  if (response.status === 404 || (response.status >= 300 && response.status < 400)) {
    return false;
  }

  if (response.status === 429 || response.status >= 500) {
    throw new NoAnswerError(`${url}: ${response.status}`);
  }

  // Like a 451 for a blocked repository. Recording it as "no icon" could hide
  // a real one, so it stays pending and the run moves on.
  throw new RepositoryError(`${url}: ${response.status}`);
};

export const probe = async (
  claim: Claim,
  { fetcher = fetch, token }: { fetcher?: typeof fetch; token?: string } = {},
): Promise<IndexEntry> => {
  const headers = authorization(token);

  // Any variant can be served on its own, like Home Assistant does for an
  // installed integration, so none of them is required
  const results = await Promise.allSettled(
    IMAGES.map((image) => imageExists(imageUrl(claim, claim.domain, image), fetcher, headers)),
  );

  // GitHub not answering outweighs one repository acting up, whatever came
  // back first
  const errors = results.flatMap((result) =>
    result.status === "rejected" ? [result.reason as unknown] : [],
  );
  const failure =
    errors.find((error) => error instanceof NoAnswerError) ?? errors[0];
  if (failure) {
    throw failure;
  }

  return {
    repository: claim.repository,
    ref: claim.ref,
    images: IMAGES.filter(
      (_, index) => (results[index] as PromiseFulfilledResult<boolean>).value,
    ),
    checked: Date.now(),
  };
};

export interface SyncOptions {
  fetcher?: typeof fetch;
  token?: string;
  concurrency?: number;
  // No probe starts that could still be running at this time, what is left
  // gets picked up by the next run
  deadline?: number;
  limit?: number;
}

export interface SyncResult {
  index: IconIndex;
  probed: number;
  pending: number;
  skipped: number;
  // Stopped early because GitHub stopped answering
  interrupted: boolean;
}

export const sync = async (
  previous: IconIndex | undefined,
  claims: Claim[],
  {
    fetcher = fetch,
    token,
    concurrency = 8,
    deadline = Infinity,
    limit = Infinity,
  }: SyncOptions = {},
): Promise<SyncResult> => {
  const candidates = resolveClaims(claims, previous);

  const known = new Set([
    ...Object.keys(previous?.domains ?? {}),
    ...(previous?.pending ?? []),
  ]).size;
  if (candidates.length < known * MIN_FEED_RATIO) {
    throw new FeedShrankError(
      `Feed has ${candidates.length} integrations, the index ${known}`,
    );
  }

  const domains: Record<string, IndexEntry> = {};
  const pending = new Set<string>();
  const changed: typeof candidates = [];
  const expired: typeof candidates = [];
  const now = Date.now();

  // Domains no longer in the feed drop out here
  for (const candidate of candidates) {
    const entry = previous?.domains[candidate.domain];
    const sameRepository = entry?.repository === candidate.repository;

    // Keep serving what the old ref had until the new one has been probed
    if (entry && sameRepository) {
      domains[candidate.domain] = entry;
    }

    if (!entry || !sameRepository || entry.ref !== candidate.ref) {
      changed.push(candidate);
      pending.add(candidate.domain);
    } else if (now - entry.checked >= RECHECK_AFTER) {
      // Until the recheck succeeds, a missing image is unknown, not absent
      expired.push(candidate);
      pending.add(candidate.domain);
    }
  }

  expired.sort((a, b) => domains[a.domain].checked - domains[b.domain].checked);
  const queue = [...changed, ...expired].slice(0, limit);
  let probed = 0;
  let skipped = 0;
  let interrupted = false;

  const worker = async () => {
    while (!interrupted && Date.now() + RAW_TIMEOUT < deadline) {
      const candidate = queue.shift();
      if (!candidate) {
        return;
      }

      try {
        domains[candidate.domain] = await probe(candidate, { fetcher, token });
        pending.delete(candidate.domain);
        probed += 1;
      } catch (error) {
        if (error instanceof RepositoryError) {
          console.warn(`Marketplace icons: skipping ${candidate.domain}, ${error.message}`);
          skipped += 1;
          continue;
        }

        if (!(error instanceof NoAnswerError)) {
          throw error;
        }

        console.warn(`Marketplace icons: stopping early, ${error.message}`);
        interrupted = true;
      }
    }
  };

  await Promise.all(Array.from({ length: concurrency }, worker));

  return {
    index: {
      updated: new Date().toISOString(),
      domains,
      pending: [...pending].sort(),
    },
    probed,
    pending: pending.size,
    skipped,
    interrupted,
  };
};
