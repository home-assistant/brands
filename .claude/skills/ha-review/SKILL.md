---
name: ha-review
description: Review brand image changes against the repository requirements. Checks file existence, file names, and image dimensions only.
---

# Review brand images

Follow the image requirements in `README.md` (sections "Image specification", "Icon image requirements", "Logo image requirements", and the symlink rules). Read it before reviewing; it is the source of truth.

## Scope

Only check:

- Files exist in the correct folder and use the allowed file names (`icon.png`, `logo.png`, `dark_*`, `*@2x.png`).
- Files are PNG.
- Image dimensions match the README requirements (icon sizes, logo size limits, `@2x` being double the normal version).
- Required counterparts exist (e.g. `icon.png` present, `@2x` variants match their base files).

Do NOT analyze image content (colors, transparency, trimming, visual quality, branding correctness).

## How

1. Get the changed files (`git diff --name-status master...HEAD`, or `gh pr diff <number> --name-only` for a PR).
2. Get dimensions with `file <path>` (or `identify <path>` if available).
3. Report each violation as `path: problem`. If none, say so.
