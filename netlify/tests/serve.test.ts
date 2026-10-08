import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { IconIndex } from "../lib/marketplace-icons.ts";
import { IndexCache, isPng, serve } from "../lib/serve.ts";
import {
  chunk,
  entry,
  fakeFetch,
  iconIndex,
  idat,
  ihdr,
  png,
  PNG_SIGNATURE,
} from "./helpers.ts";

const ICON = png();
const DAY = 24 * 60 * 60 * 1000;

const request = (path: string) => new Request(`https://brands.example${path}`);

const raw = (body: ConstructorParameters<typeof Response>[0] = ICON, status = 200) =>
  fakeFetch(() => new Response(body, { status }));

const call = async (
  path: string,
  index: IconIndex | undefined,
  fetcher: typeof fetch = raw(),
) => {
  const response = await serve(request(path), { getIndex: async () => index, fetcher });
  return {
    status: response.status,
    body: Buffer.from(await response.arrayBuffer()),
    cacheControl: response.headers.get("cache-control"),
    cors: response.headers.get("access-control-allow-origin"),
    vary: response.headers.get("netlify-vary"),
  };
};

const withIcon = iconIndex({ domains: { demo: entry(["icon.png"]) } });

describe("serve", () => {
  it("serves an indexed icon", async () => {
    const response = await call("/marketplace/demo/icon.png", withIcon);

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, ICON);
    assert.equal(response.cors, "*");
    assert.equal(response.vary, "query=_");
  });

  it("ignores the query string", async () => {
    const response = await call("/marketplace/demo/icon.png?nonce=1", withIcon);

    assert.equal(response.status, 200);
    assert.equal(response.vary, "query=_");
  });

  for (const path of [
    "/demo/icon.png",
    "/marketplace/Demo/icon.png",
    "/marketplace/demo/icon.svg",
    "/demo/icon.png/more",
    "/marketplace/demo/icon.png/more",
    "/_/demo/icon.png",
    "/marketplace/%2E%2E/icon.png",
  ]) {
    it(`rejects ${path} without looking anything up`, async () => {
      let looked = false;
      const response = await serve(request(path), {
        getIndex: async () => {
          looked = true;
          return withIcon;
        },
      });

      assert.equal(response.status, 404);
      assert.equal(looked, false);
    });
  }

  it("serves a variant without icon.png", async () => {
    const index = iconIndex({ domains: { demo: entry(["logo.png"]) } });

    assert.equal((await call("/marketplace/demo/logo.png", index)).status, 200);
    assert.equal((await call("/marketplace/demo/icon.png", index)).status, 404);
  });

  it("answers 404 when we know there is no icon", async () => {
    const index = iconIndex({ domains: { demo: entry([]) } });
    const response = await call("/marketplace/demo/icon.png", index);

    assert.equal(response.status, 404);
    assert.match(response.cacheControl!, /s-maxage=21600/);
  });

  it("answers 404 for a domain that is not in the feed", async () => {
    assert.equal((await call("/marketplace/other/icon.png", withIcon)).status, 404);
  });

  it("answers 503 for unknown domains when the index is stale", async () => {
    const stale = iconIndex({ updated: new Date(Date.now() - 2 * DAY).toISOString() });
    const response = await call("/marketplace/other/icon.png", stale);

    assert.equal(response.status, 503);
    assert.equal(response.cacheControl, "no-store");
  });

  it("answers 503 without an index", async () => {
    assert.equal((await call("/marketplace/demo/icon.png", undefined)).status, 503);
  });

  it("answers 503 while a domain waits for its first probe", async () => {
    const index = iconIndex({ pending: ["demo"] });

    assert.equal((await call("/marketplace/demo/icon.png", index)).status, 503);
  });

  it("keeps serving the old icon while a new ref waits", async () => {
    const index = iconIndex({ domains: { demo: entry(["icon.png"]) }, pending: ["demo"] });

    assert.equal((await call("/marketplace/demo/icon.png", index)).status, 200);
  });

  it("answers 503 while a new ref waits and the old one had nothing", async () => {
    const index = iconIndex({ domains: { demo: entry([]) }, pending: ["demo"] });

    assert.equal((await call("/marketplace/demo/icon.png", index)).status, 503);
  });

  it("answers 503 when GitHub does not hand out an indexed icon", async () => {
    const response = await call("/marketplace/demo/icon.png", withIcon, raw("slow down", 429));

    assert.equal(response.status, 503);
  });

  it("does not read past the size limit", async () => {
    const endless = new ReadableStream({
      pull(controller) {
        controller.enqueue(new Uint8Array(64 * 1024));
      },
    });

    assert.equal((await call("/marketplace/demo/icon.png", withIcon, raw(endless))).status, 404);
  });
});

describe("isPng", () => {
  const iend = chunk("IEND");

  it("accepts a complete PNG", () => {
    assert.equal(isPng(png()), true);
  });

  it("accepts a palette image with its palette", () => {
    const data = Buffer.concat([
      PNG_SIGNATURE,
      ihdr(4, 4, { colorType: 3 }),
      chunk("PLTE", Buffer.alloc(3)),
      idat(),
      iend,
    ]);

    assert.equal(isPng(data), true);
  });

  const broken: [string, Buffer][] = [
    ["only the signature", PNG_SIGNATURE],
    ["a bad checksum", Buffer.concat([PNG_SIGNATURE, ihdr(4, 4).fill(0, 21, 25), idat(), iend])],
    ["no image data", Buffer.concat([PNG_SIGNATURE, ihdr(4, 4), iend])],
    ["data after the end", Buffer.concat([png(), Buffer.from("<script>")])],
    ["a cut off end", png().subarray(0, -4)],
    ["an animation", Buffer.concat([PNG_SIGNATURE, ihdr(4, 4), chunk("acTL", Buffer.alloc(8)), idat(), iend])],
    ["huge dimensions", png(5000, 1)],
    ["no header first", Buffer.concat([PNG_SIGNATURE, idat(), ihdr(4, 4), iend])],
    ["an illegal bit depth", png(4, 4, { bitDepth: 3 })],
    ["an illegal color type", png(4, 4, { colorType: 1 })],
    ["a bit depth its color type does not allow", png(4, 4, { colorType: 2, bitDepth: 4 })],
    ["an unknown compression", png(4, 4, { compression: 1 })],
    ["an unknown filter method", png(4, 4, { filter: 1 })],
    ["an unknown interlace method", png(4, 4, { interlace: 2 })],
    ["a palette image without a palette", png(4, 4, { colorType: 3 })],
    ["an end chunk with data", Buffer.concat([PNG_SIGNATURE, ihdr(4, 4), idat(), chunk("IEND", Buffer.from("x"))])],
  ];

  for (const [name, data] of broken) {
    it(`rejects ${name}`, () => {
      assert.equal(isPng(data), false);
    });
  }
});

describe("IndexCache", () => {
  it("keeps the last good index when a refresh fails", async () => {
    let now = 0;
    let reads = 0;
    let failing = false;
    const cache = new IndexCache(async () => {
      reads += 1;
      if (failing) {
        throw new Error("Blobs is down");
      }
      return withIcon;
    }, () => now);

    assert.equal(await cache.get(), withIcon);

    failing = true;
    now = 6 * 60 * 1000;
    assert.equal(await cache.get(), withIcon);
    assert.equal(reads, 2);

    // Backing off, so no new read straight away
    now += 1000;
    assert.equal(await cache.get(), withIcon);
    assert.equal(reads, 2);
  });

  it("shares one read between concurrent requests", async () => {
    let reads = 0;
    const cache = new IndexCache(async () => {
      reads += 1;
      return withIcon;
    });

    await Promise.all([cache.get(), cache.get(), cache.get()]);
    assert.equal(reads, 1);
  });
});
