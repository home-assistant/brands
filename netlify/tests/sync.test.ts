import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { imageUrl } from "../lib/marketplace-icons.ts";
import { type Claim, FeedShrankError, fetchClaims, sync } from "../lib/sync.ts";
import { entry, fakeFetch, iconIndex } from "./helpers.ts";

const DAY = 24 * 60 * 60 * 1000;

const claim = (domain: string, overrides: Partial<Claim> = {}): Claim => ({
  domain,
  repository: `owner/${domain}`,
  ref: "v1",
  ...overrides,
});

// Every repository only has a logo, unless told otherwise
const headFetch = (
  requested: string[] = [],
  status: (url: string) => number = (url) => (url.endsWith("/logo.png") ? 200 : 404),
) =>
  fakeFetch((url) => {
    requested.push(url);
    return new Response(null, { status: status(url) });
  });

describe("fetchClaims", () => {
  it("only keeps safe claims that brands does not already serve", async () => {
    const feed = {
      1: { domain: "hash_ref", full_name: "owner/a", last_version: "v1#release" },
      2: { domain: "traversal", full_name: "owner/b", last_version: "../../x" },
      3: { domain: "slash_ref", full_name: "owner/c", last_version: "release/1.0" },
      4: { domain: "brand_only", full_name: "owner/d", last_version: "1.0" },
      5: { domain: "in_core", full_name: "owner/e", last_version: "1.0" },
      6: { domain: 42, full_name: "owner/f", last_version: "1.0" },
      7: { domain: "no_release", full_name: "owner/g", last_commit: "abc1234" },
    };
    const domains = { brands: ["brand_only"], core: ["in_core"], custom: [], thread: [] };
    const fetcher = fakeFetch((url) =>
      Response.json(url.includes("hacs") ? feed : domains),
    );

    const claims = await fetchClaims(fetcher);

    assert.deepEqual(
      claims.map((claim) => claim.domain).sort(),
      ["brand_only", "no_release", "slash_ref"],
    );
  });

  it("encodes every segment of a ref", () => {
    const url = imageUrl({ repository: "owner/c", ref: "release/1.0+x" }, "demo", "icon.png");

    assert.match(url, /\/owner\/c\/release\/1\.0%2Bx\/custom_components\//);
  });
});

describe("sync", () => {
  it("probes every variant on its own", async () => {
    const requested: string[] = [];
    const { index } = await sync(undefined, [claim("demo")], { fetcher: headFetch(requested) });

    assert.equal(requested.length, 8);
    assert.deepEqual(index.domains.demo.images, ["logo.png"]);
  });

  it("treats an image too big to serve as not there", async () => {
    const fetcher = fakeFetch((url) =>
      new Response(null, {
        status: url.endsWith("/icon.png") || url.endsWith("/logo.png") ? 200 : 404,
        headers: { "content-length": url.endsWith("/icon.png") ? "3000000" : "5000" },
      }),
    );

    const { index } = await sync(undefined, [claim("demo")], { fetcher });

    assert.deepEqual(index.domains.demo.images, ["logo.png"]);
  });

  it("treats a redirect as not there", async () => {
    const { index } = await sync(undefined, [claim("demo")], {
      fetcher: headFetch([], () => 301),
    });

    assert.deepEqual(index.domains.demo.images, []);
  });

  it("re-probes entries after a week, not before", async () => {
    const requested: string[] = [];
    const previous = iconIndex({
      domains: {
        fresh: entry([], { repository: "owner/fresh", checked: Date.now() - DAY }),
        stale: entry([], { repository: "owner/stale", checked: Date.now() - 8 * DAY }),
      },
    });

    await sync(previous, [claim("fresh"), claim("stale")], { fetcher: headFetch(requested) });

    assert.equal(requested.some((url) => url.includes("/owner/fresh/")), false);
    assert.equal(requested.some((url) => url.includes("/owner/stale/")), true);
  });

  it("does not start a probe that could outlive the deadline", async () => {
    const result = await sync(undefined, [claim("demo")], {
      fetcher: headFetch(),
      deadline: Date.now() + 4000,
    });

    assert.equal(result.probed, 0);
    assert.deepEqual(result.index.pending, ["demo"]);
  });

  it("keeps a new ref pending next to the old entry", async () => {
    const previous = iconIndex({ domains: { demo: entry([], { repository: "owner/demo" }) } });

    const { index } = await sync(previous, [claim("demo", { ref: "v2" })], {
      fetcher: headFetch(),
      deadline: Date.now(),
    });

    assert.equal(index.domains.demo.ref, "v1");
    assert.deepEqual(index.pending, ["demo"]);
  });

  it("moves past repositories that keep failing", async () => {
    const blocked = Array.from({ length: 8 }, (_, number) => claim(`blocked_${number}`));
    const result = await sync(undefined, [...blocked, claim("healthy")], {
      fetcher: headFetch([], (url) => (url.includes("/blocked_") ? 451 : 404)),
    });

    assert.equal(result.skipped, 8);
    assert.equal(result.interrupted, false);
    assert.ok(result.index.domains.healthy);
    assert.equal(result.index.pending.length, 8);
  });

  it("stops the run when GitHub rate limits", async () => {
    const requested: string[] = [];
    const result = await sync(undefined, [claim("demo"), claim("next")], {
      fetcher: headFetch(requested, () => 429),
      concurrency: 1,
    });

    assert.equal(result.interrupted, true);
    assert.equal(requested.some((url) => url.includes("/owner/next/")), false);
    assert.deepEqual(result.index.domains, {});
    assert.deepEqual(result.index.pending, ["demo", "next"]);
  });

  it("lets a rate limit outweigh a repository error in the same probe", async () => {
    const requested: string[] = [];
    const result = await sync(undefined, [claim("demo"), claim("next")], {
      fetcher: headFetch(requested, (url) => (url.endsWith("/icon.png") ? 451 : 429)),
      concurrency: 1,
    });

    assert.equal(result.interrupted, true);
    assert.equal(result.skipped, 0);
    assert.equal(requested.some((url) => url.includes("/owner/next/")), false);
  });

  it("keeps an expired entry pending until its recheck works", async () => {
    const previous = iconIndex({
      domains: { demo: entry([], { repository: "owner/demo", checked: Date.now() - 8 * DAY }) },
    });

    const { index } = await sync(previous, [claim("demo")], {
      fetcher: headFetch([], () => 451),
    });

    assert.deepEqual(index.domains.demo.images, []);
    assert.deepEqual(index.pending, ["demo"]);
  });

  it("refuses a feed that lost most of what we know", async () => {
    const previous = iconIndex({
      domains: Object.fromEntries(
        Array.from({ length: 10 }, (_, number) => [`known_${number}`, entry(["icon.png"])]),
      ),
    });

    await assert.rejects(sync(previous, [], { fetcher: headFetch() }), FeedShrankError);
  });

  it("counts domains still waiting for their first probe as known", async () => {
    const previous = iconIndex({ pending: ["first", "second"] });

    await assert.rejects(sync(previous, [], { fetcher: headFetch() }), FeedShrankError);
  });

  it("keeps the established repository when another claims its domain", async () => {
    const previous = iconIndex({
      domains: { demo: entry(["icon.png"], { repository: "owner/demo" }) },
    });

    const { index } = await sync(
      previous,
      [claim("demo"), claim("demo", { repository: "intruder/demo" })],
      { fetcher: headFetch() },
    );

    assert.equal(index.domains.demo.repository, "owner/demo");
  });

  it("gives nobody a contested domain without history", async () => {
    const { index } = await sync(
      undefined,
      [claim("demo"), claim("demo", { repository: "other/demo" })],
      { fetcher: headFetch() },
    );

    assert.deepEqual(index.domains, {});
    assert.deepEqual(index.pending, []);
  });
});
