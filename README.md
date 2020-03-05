[![Deploys by netlify](https://www.netlify.com/img/global/badges/netlify-color-bg.svg)](https://www.netlify.com)

# Home Assistant Brands

This repository holds the icons and logos for all the brands Home Assistant
supports.

This repository is used to generate a static website, serving these images
for use in our Home Assistant projects. The goal is to have a centralized
repository of brand images.

## Inner workings

The `./src` folder contains a folder for each `domain` Home Assistant provides
an integration for. A domain can contain four files:

- `icon.png`: A square avatar-like icon, representing the brand or product for that domain.
- `logo.png`: The logo of the brand or product for that domain.
- `icon@2x.png`: hDPI version of `icon.png`
- `logo@2x.png`: hDPI version of `logo.png`

Those images are served in the following format:

- `https://brands.home-assistant.io/[domain]/icon.png`
- `https://brands.home-assistant.io/[domain]/logo.png`
- `https://brands.home-assistant.io/[domain]/icon@2x.png`
- `https://brands.home-assistant.io/[domain]/logo@2x.png`

### Missing image handling

- If a domain is missing, the images from the `_placeholder` domain is served instead.
- If a domain is missing the `icon.png` file, the placeholder will be will be served instead.
- If a domain is missing the `logo.png` file, the `icon.png` is served instead.
- If a domain is missing the `icon@2.png` file, the `icon.png` is served instead.
- If a domain is missing the `logo@2.png` file, the `logo.png` is served instead.

### Caching

All icons are cached on the client-side browser end for 900 seconds, and cached
by Cloudflare for 604800 seconds.

Placeholder images are excepted from this. Placeholder images have a 900 seconds
cache on the client-side and are cached for 1 hour on Cloudflare. This allows
us to replace placeholder images within an acceptable time frame without losing
our cache.

## Image specification

All images must have the following requirements:

- The filetype of all images must be PNG.
- They should be properly compressed and optimized (lossless is preferred) for use on the web.
- Interlaced is preferred (also known as progressive).
- Images with transparency is preferred.
- If multiple images are available, the ones optimized for a white background are preferred.
- The image should be trimmed, so it contains the minimum amount of empty (white) space on the edges.

### Icon image requirements

Additional to the general image requirements listed above, for the icon image,
the following requirements are applied as well:

- Aspect ratio needs to be 1:1 (square).
- Icon size must be 256x256 pixels, for the hDPI this is 512x512 pixels.
- The maximum icon pixel size is, of course, preferred.

### Logo image requirements

Additional to the general image requirements listed, for the logo image,
the following requirements are applied as well:

- A landscape image is preferred.
- Aspect ratio should respect the logo of the brand.
- Shortest side of the image must be at least 128 pixels, 256 pixels for the hDPI version.
- Shortest side of the image must be not bigger than 256 pixels, 512 pixels for the hDPI version.
- The maximum pixel size for the shortest side of the images is, of course, preferred.

## Using the same logo & icon for different brands

In order to keep the size of this repository as efficient as possible,
symlinking domain folders for the same icon/logos is allowed. The deployment
process at our hosting provider will unpack these symlinks to actual files
during the deployment process.

Please note, symlinks should only be created between integration domain
directories. The `_placeholder` & `_homeassistant` directories are special
cases and new directories with an underscore (`_`) should not be created.

The names of directories must always match the integration domain. Additional
directories are not allowed.

## Trademark Legal Notices

All product names, trademarks and registered trademarks in the images in this
repository, are property of their respective owners. All images in this
repository are used by the Home Assistant project for identification purposes
only.

The use of these names, trademarks and brands appearing in these image files,
do not imply endorsement.
