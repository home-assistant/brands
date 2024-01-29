#!/usr/bin/env bash

if ! [ -x "$(command -v rsvg-convert)" ]; then
  apt install -y librsvg2-bin
fi

# Copy folder, without symlinks, but use actual files instead
mkdir -p build/_
mkdir -p build/brands

# Clone MDI icons
rm -f -r mdi
git clone --depth=1 https://github.com/Templarian/MaterialDesign mdi

# Copy custom integrations
rsync -aL custom_integrations/ build/_
rsync -aL custom_integrations/ build

# Copy core integrations 
rsync -aL --exclude '_homeassistant' core_integrations/ build/_
rsync -aL --exclude '_homeassistant' --exclude '_placeholder' core_integrations/ build

# Generate integration icons based on MDI
find ./build -type f -name "icon.txt" | while read icon; do
  dir=$(dirname "${icon}")
  mdi=$(<${icon})
  mdi="${mdi##mdi:}"
  rsvg-convert \
    --stylesheet scripts/mdi.css \
    --keep-aspect-ratio \
    --height 256 \
    --width 256 \
    --background-color transparent \
    --output "${dir}/icon.png" \
    "mdi/svg/${mdi}.svg"

  rsvg-convert \
    --stylesheet scripts/mdi.css \
    --keep-aspect-ratio \
    --height 512 \
    --width 512 \
    --background-color transparent \
    --output "${dir}/icon@2x.png" \
    "mdi/svg/${mdi}.svg"

  optipng -silent "${dir}/icon.png" "${dir}/icon@2x.png"

  rm "${icon}"
  echo "Generated mdi:${mdi} for ${icon}"
done

# Use icon@2x as logo@2x in case of a missing logo@2x and no dedicated logo is provided for better resolution
# This check must before the missing logo check
find ./build -type f -name "icon@2x.png" | while read icon; do
  dir=$(dirname "${icon}")
  if [[ ! -f "${dir}/logo2x.png" && ! -f "${dir}/logo.png" ]]; then
    cp "${icon}" "${dir}/logo@2x.png"
    echo "Using ${icon} as hDPI logo because no logo is provided"
  fi
done

# Use icon as logo in case of a missing logo
find ./build -type f -name "icon.png" | while read icon; do
  dir=$(dirname "${icon}")
  if [[ ! -f "${dir}/logo.png" ]]; then
    cp "${icon}" "${dir}/logo.png"
    echo "Using ${icon} as logo"
  fi
  if [[ ! -f "${dir}/dark_logo.png" ]] && [[ -f "${dir}/dark_icon.png" ]]; then
    cp "${dir}/dark_icon.png" "${dir}/dark_logo.png"
    echo "Using ${dir}/dark_icon.png as dark_logo"
  fi
done

# Use icon as icon@2x in case it is missing
find ./build -type f -name "icon.png" | while read icon; do
  dir=$(dirname "${icon}")
  if [[ ! -f "${dir}/icon@2x.png" ]]; then
    cp "${icon}" "${dir}/icon@2x.png"
    echo "Using ${icon} as hDPI icon"
  fi
  if [[ ! -f "${dir}/dark_logo@2x.png" ]] && [[ -f "${dir}/dark_icon@2x.png" ]]; then
    cp "${dir}/dark_icon@2x.png" "${dir}/dark_logo@2x.png"
    echo "Using ${dir}/dark_icon@2x.png as dark_logo@2x"
  fi
done

# Use logo as logo@2x in case it is missing
find ./build -type f -name "logo.png" | while read logo; do
  dir=$(dirname "${logo}")
  if [[ ! -f "${dir}/logo@2x.png" ]]; then
    cp "${logo}" "${dir}/logo@2x.png"
    echo "Using ${logo} as hDPI logo"
  fi
done

# Copy in all integrations as fallback for brands
rsync -aL --exclude 'brands' build/ build/brands

# Overwrite brands with actual brands
rsync -aL --exclude '_homeassistant' --exclude '_placeholder' core_brands/ build/brands
rsync -aL --exclude '_homeassistant' --exclude '_placeholder' core_brands/ build/brands/_

# Use brand icon as logo in case of a missing logo
find ./build/brands -type f -name "icon.png" | while read icon; do
  dir=$(dirname "${icon}")
  if [[ ! -f "${dir}/logo.png" ]]; then
    cp "${icon}" "${dir}/logo.png"
    echo "Using ${icon} as logo"
  fi
  if [[ ! -f "${dir}/dark_logo.png" ]] && [[ -f "${dir}/dark_icon.png" ]]; then
    cp "${dir}/dark_icon.png" "${dir}/dark_logo.png"
    echo "Using ${dir}/dark_icon.png as dark_logo"
  fi
done

# Use brand icon as icon@2x in case it is missing
find ./build/brands -type f -name "icon.png" | while read icon; do
  dir=$(dirname "${icon}")
  if [[ ! -f "${dir}/icon@2x.png" ]]; then
    cp "${icon}" "${dir}/icon@2x.png"
    echo "Using ${icon} as hDPI icon"
  fi
  if [[ ! -f "${dir}/dark_logo@2x.png" ]] && [[ -f "${dir}/dark_icon@2x.png" ]]; then
    cp "${dir}/dark_icon@2x.png" "${dir}/dark_logo@2x.png"
    echo "Using ${dir}/dark_icon@2x.png as dark_logo@2x"
  fi
done

# Use brand logo as logo@2x in case it is missing
find ./build/brands -type f -name "logo.png" | while read logo; do
  dir=$(dirname "${logo}")
  if [[ ! -f "${dir}/logo@2x.png" ]]; then
    cp "${logo}" "${dir}/logo@2x.png"
    echo "Using ${logo} as hDPI logo"
  fi
done

# Create fallback for dark variants
find ./build -type f -type f -name "icon.png" -o -name "icon@2x.png" -o -name "logo.png" -o -name "logo@2x.png" | while read image; do
  dir=$(dirname "${image}")
  filename=$(basename -s .png "${image}")
  if [[ ! -f "${dir}/dark_${filename}.png" ]]; then
    cp "${image}" "${dir}/dark_${filename}.png"
    echo "Using ${image} as dark_${filename}"
  fi
done

# Copy hardware
rsync -aL hardware/ build/hardware

# Create fallback for dark hardware variants
find ./build/hardware -type f -name "*.png" | while read image; do
  dir=$(dirname "${image}")
  filename=$(basename -s .png "${image}")
  if [[ ! -f "${dir}/dark_${filename}.png" ]]; then
    cp "${image}" "${dir}/dark_${filename}.png"
    echo "Using ${image} as dark_${filename}"
  fi
done

# Create domains.json
core_brands=$(
  find ./core_brands \
    -maxdepth 1 \
    -exec basename {} \; \
  | sort \
  | jq -sR 'split("\n")[1:]' \
  | jq -r 'map(select(length > 0))'
)

core_integrations=$(
  find ./core_integrations \
    -maxdepth 1 \
    -exec basename {} \; \
  | sort \
  | jq -sR 'split("\n")[1:]' \
  | jq -r 'map(select(length > 0))'
)
custom_integrations=$(
  find ./custom_integrations \
    -maxdepth 1 \
    -exec basename {} \; \
  | sort \
  | jq -sR 'split("\n")[1:]' \
  | jq -r 'map(select(length > 0))'
)

jq -n '{"brands": $brands, "core": $core, "custom": $custom}' \
    --argjson brands "$core_brands" \
    --argjson core "$core_integrations" \
    --argjson custom "$custom_integrations" \
  | jq -r . > ./build/domains.json
