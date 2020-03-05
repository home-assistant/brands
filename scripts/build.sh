#!/usr/bin/env bash

# Copy folder, without symlinks, but use actual files instead
rsync -aL --exclude '_homeassistant' src/ build

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
