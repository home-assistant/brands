// Run the Marketplace icon sync locally against a JSON file.
//
// Usage: node scripts/marketplace-icons-sync.ts <index.json> [limit]
// Set GITHUB_TOKEN to probe with a token.

import { readFile, writeFile } from "node:fs/promises";

import type { IconIndex } from "../netlify/lib/marketplace-icons.ts";
import { fetchClaims, sync } from "../netlify/lib/sync.ts";

const [indexPath, limitArgument] = process.argv.slice(2);
if (!indexPath) {
  console.error("Usage: node scripts/marketplace-icons-sync.ts <index.json> [limit]");
  process.exit(1);
}

const readIndex = async (): Promise<IconIndex | undefined> => {
  try {
    return JSON.parse(await readFile(indexPath, "utf8")) as IconIndex;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }

    throw error;
  }
};

const started = Date.now();
const result = await sync(await readIndex(), await fetchClaims(), {
  token: process.env.GITHUB_TOKEN,
  limit: limitArgument ? Number(limitArgument) : undefined,
});
await writeFile(indexPath, `${JSON.stringify(result.index, null, 2)}\n`);

const entries = Object.values(result.index.domains);
console.log(
  [
    `indexed: ${entries.length}`,
    `with images: ${entries.filter((entry) => entry.images.length).length}`,
    `probed: ${result.probed}`,
    `pending: ${result.pending}`,
    `skipped: ${result.skipped}`,
    `interrupted: ${result.interrupted}`,
    `took: ${((Date.now() - started) / 1000).toFixed(1)}s`,
  ].join("\n"),
);
