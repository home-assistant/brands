import type { Config, Context } from "@netlify/functions";

import { readIndex, writeIndex } from "../lib/store.ts";
import { fetchClaims, sync } from "../lib/sync.ts";

// Scheduled functions get 30 seconds. The feed and every probe fit in this,
// which leaves the rest for writing the index. Whatever is left gets picked
// up by the next run, which only matters for the very first fill.
const SYNC_BUDGET = 20 * 1000;

export default async (_request: Request, context: Context) => {
  const deadline = Date.now() + SYNC_BUDGET;
  const claims = await fetchClaims();
  const result = await sync(await readIndex(context), claims, {
    token: process.env.MARKETPLACE_ICONS_GITHUB_TOKEN,
    deadline,
  });
  await writeIndex(context, result.index);

  console.log(
    `Marketplace icons: ${Object.keys(result.index.domains).length} indexed, ` +
      `${result.probed} probed, ${result.pending} pending, ${result.skipped} skipped, ` +
      `interrupted: ${result.interrupted}`,
  );
};

export const config: Config = {
  schedule: "17 * * * *",
};
