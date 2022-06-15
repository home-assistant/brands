#!/usr/bin/env bash

# Copy folder, without symlinks, but use actual files instead
mkdir -p build/_

# Clone MDI icons
rm -f -r mdi
git clone --depth=1 https://github.com/Templarian/MaterialDesign mdi

# Copy custom integrations
rsync -aL custom_integrations/ build/_
rsync -aL custom_integrations/ build

# Copy core integrations 
rsync -aL --exclude '_homeassistant' core_integrations/ build/_
rsync -aL --exclude '_homeassistant' --exclude '_placeholder' core_integrations/ build

# Copy hardware
rsync -aL hardware/ build/hardware

# Generate icons based on MDI
find ./build -type f -name "icon.txt" | while read icon; do
  dir=$(dirname "${icon}")
  mdi=$(<${icon})
  mdi="${mdi##mdi:}"
  mogrify \
    -format png \
    -density 6400 \
    -background transparent \
    -fill "rgb(0,171,248,1.0)" \
    -opaque black \
    -trim \
    -resize 240x240 \
    -gravity center \
    -extent 256x256 \
    -write "${dir}/icon.png" \
    "mdi/svg/${mdi}.svg"

  mogrify \
    -format png \
    -density 6400 \
    -background transparent \
    -fill "rgb(0,171,248,1.0)" \
    -opaque black \
    -trim \
    -resize 480x480 \
    -gravity center \
    -extent 512x512 \
    -write "${dir}/icon@2x.png" \
    "mdi/svg/${mdi}.svg"

  optipng -silent "${dir}/icon.png" "${dir}/icon@2x.png"

  rm "${icon}"
  echo "Generated mdi:${mdi} for ${icon}"
done

# Use icon as logo in case of a missing logo
find ./build -type f -name "icon.png" | while read icon; do
  dir=$(dirname "${icon}")
  if [[ ! -f "${dir}/logo.png" ]]; then
    cp "${icon}" "${dir}/logo.png"
    echo "Using ${icon} as logo"
  fi
done

# Use icon as icon@2x in case it is missing
find ./build -type f -name "icon.png" | while read icon; do
  dir=$(dirname "${icon}")
  if [[ ! -f "${dir}/icon@2x.png" ]]; then
    cp "${icon}" "${dir}/icon@2x.png"
    echo "Using ${icon} as hDPI icon"
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

# Create fallback for dark variants
find ./build -type f -type f -name "icon.png" -o -name "icon@2x.png" -o -name "logo.png" -o -name "logo@2x.png" | while read image; do
  dir=$(dirname "${image}")
  filename=$(basename -s .png "${image}")
  if [[ ! -f "${dir}/dark_${filename}.png" ]]; then
    cp "${image}" "${dir}/dark_${filename}.png"
    echo "Using ${image} as dark_${filename}"
  fi
done

# Create domains.json
core_integrations=$(find ./core_integrations -maxdepth 1 -exec basename {} \; | sort | jq -sR 'split("\n")[1:]' | jq -r 'map(select(length > 0))')
custom_integrations=$(find ./custom_integrations -maxdepth 1 -exec basename {} \; | sort | jq -sR 'split("\n")[1:]' | jq -r 'map(select(length > 0))')
jq -n '{"core": $core, "custom": $custom}' --argjson core "$core_integrations"  --argjson custom "$custom_integrations" | jq -r . > ./build/domains.json