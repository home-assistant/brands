import { getDeployStore, getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

import type { IconIndex } from "./marketplace-icons.ts";

const STORE = "marketplace-icons";
const INDEX_KEY = "index";

// A site store is shared by every deploy, so previews get their own
// and cannot touch the index production serves from
const iconStore = (context: Context) =>
  context.deploy.context === "production"
    ? getStore(STORE)
    : getDeployStore(STORE);

export const readIndex = async (
  context: Context,
): Promise<IconIndex | undefined> =>
  ((await iconStore(context).get(INDEX_KEY, { type: "json" })) as IconIndex | null) ??
  undefined;

export const writeIndex = async (context: Context, index: IconIndex) => {
  await iconStore(context).setJSON(INDEX_KEY, index);
};
