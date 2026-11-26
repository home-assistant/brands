import type { Config, Context } from "@netlify/functions";

import { IndexCache, serve } from "../lib/serve.ts";
import { readIndex } from "../lib/store.ts";

let cache: IndexCache | undefined;

export default async (request: Request, context: Context) => {
  cache ??= new IndexCache(() => readIndex(context));

  return serve(request, {
    getIndex: () => cache!.get(),
    token: process.env.MARKETPLACE_ICONS_GITHUB_TOKEN,
  });
};

export const config: Config = {
  path: "/marketplace/:domain/:image",
  method: "GET",
};
