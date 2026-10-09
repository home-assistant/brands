// Icons for Marketplace integrations that ship their own brand folder,
// but are not in this repository.
//
// The index only records which images exist at which ref. The images
// themselves are fetched from the repository of the integration on request.

import blocklist from "../marketplace-icons-blocklist.json" with { type: "json" };

const RAW_URL = "https://raw.githubusercontent.com";
export const RAW_TIMEOUT = 5000;
// Well past what an icon needs, but some authors ship photos
export const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

export const IMAGES = [
  "icon.png",
  "icon@2x.png",
  "logo.png",
  "logo@2x.png",
  "dark_icon.png",
  "dark_icon@2x.png",
  "dark_logo.png",
  "dark_logo@2x.png",
] as const;

export type Image = (typeof IMAGES)[number];

// Same chains as the brands integration in Home Assistant uses for the brand
// folder of an installed integration, so an icon looks the same before and
// after installing.
const IMAGE_FALLBACKS: Record<Image, Image[]> = {
  "icon.png": [],
  "logo.png": ["icon.png"],
  "icon@2x.png": ["icon.png"],
  "logo@2x.png": ["logo.png", "icon.png"],
  "dark_icon.png": ["icon.png"],
  "dark_logo.png": ["dark_icon.png", "logo.png", "icon.png"],
  "dark_icon@2x.png": ["icon@2x.png", "icon.png"],
  "dark_logo@2x.png": [
    "dark_icon@2x.png",
    "logo@2x.png",
    "logo.png",
    "icon.png",
  ],
};

// Same rules as a domain in Home Assistant, which also keeps it safe in a path
const DOMAIN_RE = /^(?!.+__)(?!_)[\da-z_]+(?<!_)$/;
const REPOSITORY_RE = /^[\w.-]+\/[\w.-]+$/;
// Stricter than git, but keeps a ref from turning into URL syntax
const REF_RE = /^[\w.+-]+(\/[\w.+-]+)*$/;

export interface IndexEntry {
  repository: string;
  ref: string;
  // Empty when the integration has no brand folder at this ref
  images: Image[];
  checked: number;
}

export interface IconIndex {
  // Last time the index was brought in line with the feed
  updated: string;
  domains: Record<string, IndexEntry>;
  // Their current ref has not been probed yet, so what they have is unknown
  pending: string[];
}

export const isImage = (name: string): name is Image =>
  (IMAGES as readonly string[]).includes(name);

export const isDomain = (name: string): boolean => DOMAIN_RE.test(name);

export const isRepository = (name: string): boolean => REPOSITORY_RE.test(name);

export const isRef = (ref: string): boolean =>
  REF_RE.test(ref) && !ref.split("/").some((segment) => /^\.+$/.test(segment));

// Turned off by hand, see "Marketplace icons" in the README
export const isBlocked = (domain: string): boolean => Object.hasOwn(blocklist, domain);

export const imageUrl = (
  entry: Pick<IndexEntry, "repository" | "ref">,
  domain: string,
  image: Image,
) => {
  const ref = entry.ref.split("/").map(encodeURIComponent).join("/");
  return `${RAW_URL}/${entry.repository}/${ref}/custom_components/${domain}/brand/${image}`;
};

export const resolveImage = (
  entry: IndexEntry,
  image: Image,
): Image | undefined =>
  [image, ...IMAGE_FALLBACKS[image]].find((candidate) =>
    entry.images.includes(candidate),
  );

export const authorization = (token: string | undefined): Record<string, string> =>
  token ? { Authorization: `token ${token}` } : {};
