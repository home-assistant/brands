import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

import type { IconIndex } from "./marketplace-icons.ts";

const INDEX_KEY = "index";

// Previews share an index of their own, so a new commit does not start
// from scratch and no preview can touch the index production serves from
const iconStore = (context: Context) =>
  getStore(
    context.deploy.context === "production"
      ? "marketplace-icons"
      : "marketplace-icons-preview",
  );

export const readIndex = async (
  context: Context,
): Promise<IconIndex | undefined> =>
  ((await iconStore(context).get(INDEX_KEY, { type: "json" })) as IconIndex | null) ??
  undefined;

export const writeIndex = async (context: Context, index: IconIndex) => {
  await iconStore(context).setJSON(INDEX_KEY, index);
};
