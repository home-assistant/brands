[![Deploys by netlify](https://www.netlify.com/img/global/badges/netlify-color-bg.svg)](https://www.netlify.com)

# Home Assistant Brands

This repository holds the icons and logos for all the brands Home Assistant
supports.

This repository is used to generate a static website, serving these images
for use in our Home Assistant projects. The goal is to have a centralized
repository of brand images.

## Inner workings

This repository provides two main folders to store images in:

- `core_integrations`: Contains images for integrations bundled with the
  Home Assistant Core.
- `custom_integrations`: Contains images for custom integrations
  (custom components).

Each of these two main folders contain domain folders. Each domain folder is
named to the integration `domain` and must match the domain set in the
integration `manifest.json` file.

A domain folder can contain the following files:

- `icon.png`: A square avatar-like icon, representing the brand or product for that domain.
- `logo.png`: The logo of the brand or product for that domain.
- `icon@2x.png`: hDPI version of `icon.png`
- `logo@2x.png`: hDPI version of `logo.png`

Each of those images may also have a dark theme variant for a total of 8 files. They are served in the URL format:

```
https://brands.home-assistant.io/[domain]/{dark_}[icon|logo]{@2x}.png
```

### Missing image handling

Each domain folder is expected to at least contain `icon.png`, then the following rules handle any other missing variants:

- If a domain is missing the `logo.png` file, the `icon.png` is served instead
- If a domain is missing the `icon@2x.png` file, the `icon.png` is served instead
- If a domain is missing the `logo@2x.png` file, the `logo.png` is served instead
- If a image optimised for dark themes (image is prefixed with 'dark_') is missing, it's non-prefixed match will be served instead

### Placeholder fallback

Normally, if an image requested with the above URL pattern does not exist, a 404 will be served.  Instead, a fallback to placeholder images can be requested for missing domains by adding a search parameter to the URL as follows:

```
https://brands.home-assistant.io/[domain]/{dark_}[icon|logo]{@2x}.png?fallback=true
```

### Caching

All icons are cached on the client-side browser end for 900 seconds, and cached
by Cloudflare for 604800 seconds.

Placeholder images or 404 responses are excepted from this. These have a 900 seconds
cache on the client-side and are cached for 1 hour on Cloudflare. This allows
us to add new integrations within an acceptable time frame without losing
our cache.

Image additions and changes may take time to take effect due to caching. The cache is fully flushed in each major version of Home Assistant Core.

## Image specification

All images must meet the following requirements:

- The filetype of all images must be PNG.
- They should be properly compressed and optimized (lossless is preferred) for use on the web.
- Interlaced is preferred (also known as progressive).
- Images with transparency is preferred.
- If multiple images are available, the ones optimized for a white background are preferred.
  - Images optimized for a dark background can be prefixed with `dark_`
- The image should be trimmed, so it contains the minimum amount of empty space on the edges.
  This includes things like white/black/any color borders or transparent spacing around the actual
  subject in the image.
- Custom integrations must not use Home Assistant branded images, as this might confuse the end-user into thinking that the integration is an internal/official integration.

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
- The shortest side of the image must be at least 128 pixels, 256 pixels for the hDPI version.
- The shortest side of the image must be no bigger than 256 pixels, 512 pixels for the hDPI version.
- The maximum pixel size for the shortest side of the images is, of course, preferred.

## Using the same image for logo & icon

If the brand uses the same image for the logo and icon (e.g., if the logo has a square aspect ratio),
only add the icon images. The icon will be used as a fallback for the logo.

## Using the same logo & icon for different brands

To keep the size of this repository as efficient as possible,
symlinking domain folders for the same icon/logos is allowed for core integrations. The deployment
process at our hosting provider will unpack these symlinks to actual files
during the deployment process.

Please note, symlinks should only be created between integration domain
directories. The `_placeholder` & `_homeassistant` directories are special
cases and new directories with an underscore (`_`) should not be created.

Symlinks are currently not allowed in the custom integrations folder.

The names of directories must always match the integration domain. Additional
directories are not allowed.

## Integration domain conflict between custom and core integrations

It is possible for a custom integration and a core integration to collide on
a `domain` name level. In these cases, the core integration domain get
preference.

## Tips, Tools & Resources

When adding a new set of icons and logos, the following resources can help you
finding the needed images and getting them to match our specifications:

- [**RedKetchup Image Resizer**](https://redketchup.io/image-resizer):
  Resizes most images formats, including SVG, into any format using just your
  browser.
- [**Worldvectorlogo**](https://worldvectorlogo.com/):
  Thousands of SVG brand images, which are perfect to use as a base.
- [**Wikimedia Commons**](https://commons.wikimedia.org/):
  Has a lot of good quality images on file.

A lot of brands (especially the larger ones) often offer a press kit on
their (corporate) website, that contains high quality images.

## Trademark Legal Notices

All product names, trademarks and registered trademarks in the images in this
repository, are property of their respective owners. All images in this
repository are used by the Home Assistant project for identification purposes
only.

The use of these names, trademarks and brands appearing in these image files,
do not imply endorsement.
