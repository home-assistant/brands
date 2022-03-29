#!/usr/bin/env bash

# Small variable to determine exit code at the end
ERRORS=0
IMAGES=0

# Small error handling method, that works with GitHub Actions
function error() {
  local file=${1}
  local message=${2}
  ((ERRORS++))

  if [[ ! -z "${GITHUB_ACTIONS}" ]]; then
    echo "::error file=${file}::${message}: ${file}"
  else
    echo "${message}: ${file}"
  fi
}

# Clone MDI icons
rm -f -r mdi
git clone --depth=1 https://github.com/Templarian/MaterialDesign mdi

# Find all files in the src folder (should contain only images)
while read image; do
    filename=$(basename "${image}")
    folderpath=$(dirname "${image}")
    foldername=$(basename "${folderpath}")

    # Underscore folders are special cases. Instead one should symlink between integration domains
    [[ "${foldername}" == _* && "${foldername}" != "_placeholder" && "${foldername}" != "_homeassistant" ]] \
      && error "${folderpath}" "Directories should not start with an underscore (_), please use the integration domain instead"

    # Ensure the core and custom integrations don't collide
    [[ -d "core_integrations/${foldername}" ]] \
      && [[ -d "custom_integrations/${foldername}" ]] \
        && error "${folderpath}" "The integration ${foldername} exists in both core and custom integrations. Core wins." 

    # If icon filename is icon.txt
    if [[ "${filename}" == "icon.txt" ]]; then
      mdi=$(<${image})
      mdi="${mdi##mdi:}"

      # Check if the icon exists
      [[ -f "mdi/svg/${mdi}.svg" ]] \
        || error "${image}" "The icon 'mdi:${mdi}' does not exist"

      # Ensure icon.png and icon@2x.png are missing
      [[ -f "${folderpath}/icon.png" ]] \
        && error "${image}" "icon.png exists while icon.txt was provided"
      [[ -f "${folderpath}/icon@2x.png" ]] \
        && error "${image}" "icon@2x.png exists while icon.txt was provided"

      # Continue to next image
      continue
    fi

    # Read properties from image
    properties=($(identify -format "%w %h %m" "${image}"))
    if [[ "$?" -ne 0 ]]; then
      error "${image}" "Could not read image file"
      continue
    fi

    # Extract properties into variables
    width="${properties[0]}"
    height="${properties[1]}"
    type="${properties[2]}"

    # Ensure file is actually a PNG file
    [[ "${type}" != "PNG" ]] \
      && error "${image}" "Invalid file type '${type}' for file"

    # Ensure normal version exists when hDPI image is provided
    [[ "${filename}" == "icon@2x.png" ]] \
      && [[ ! -f "${folderpath}/icon.png" ]] \
        && error "${image}" "hDPI icon was provided, but the normal version is missing"

    [[ "${filename}" == "logo@2x.png" ]] \
      && [[ ! -f "${folderpath}/logo.png" ]] \
        && error "${image}" "hDPI logo was provided, but the normal version is missing"

    [[ "${filename}" == "dark_icon@2x.png" ]] \
      && [[ ! -f "${folderpath}/dark_icon.png" ]] \
        && error "${image}" "hDPI icon was provided, but the normal version is missing"

    [[ "${filename}" == "dark_logo@2x.png" ]] \
      && [[ ! -f "${folderpath}/dark_logo.png" ]] \
        && error "${image}" "hDPI logo was provided, but the normal version is missing"

    # Validate image dimensions
    if [[ "${filename}" == "icon.png" ]] || [[ "${filename}" == "dark_icon.png" ]]; then
      # icon dimension
      [[ "${width}" -ne 256 || "${height}" -ne 256 ]] \
        && error "${image}" "Invalid icon size! Size is ${width}x${height}px, must be 256x256px"

    elif [[ "${filename}" == "icon@2x.png" ]] || [[ "${filename}" == "dark_icon@2x.png" ]]; then
      # hDPI icon dimension
      [[ "${width}" -ne 512 || "${height}" -ne 512 ]] \
        && error "${image}" "Invalid hDPI icon size! Size is ${width}x${height}px, must be 512x512px"

    elif [[ "${filename}" == "logo.png" ]] || [[ "${filename}" == "dark_logo.png" ]]; then
      # Minimal shortest side
      if [[ "${width}" -le "${height}" && "${width}" -lt 128 ]]; then
        error "${image}" "Invalid logo size! Size is ${width}x${height}px, shortest side must be at least 128px"
      elif [[ "${width}" -ge "${height}" && "${height}" -lt 128 ]]; then
        error "${image}" "Invalid logo size! Size is ${width}x${height}px, shortest side must be at least 128px"
      fi

      # Maximal shortest size
      if [[ "${width}" -le "${height}" && "${width}" -gt 256 ]]; then
        error "${image}" "Invalid logo size! Size is ${width}x${height}px, shortest side must not exceed 256px"
      elif [[ "${width}" -ge "${height}" && "${height}" -gt 256 ]]; then
        error "${image}" "Invalid logo size! Size is ${width}x${height}px, shortest side must not exceed 256px"
      fi

    elif [[ "${filename}" == "logo@2x.png" ]] || [[ "${filename}" == "dark_logo@2x.png" ]]; then
      # Minimal shortest side
      if [[ "${width}" -le "${height}" && "${width}" -lt 256 ]]; then
        error "${image}" "Invalid hDPI logo size! Size is ${width}x${height}px, shortest side must be at least 256px"
      elif [[ "${width}" -ge "${height}" && "${height}" -lt 256 ]]; then
        error "${image}" "Invalid hDPI logo size! Size is ${width}x${height}px, shortest side must be at least 256px"
      fi

      # Maximal shortest side
      if [[ "${width}" -le "${height}" && "${width}" -gt 512 ]]; then
        error "${image}" "Invalid hDPI logo size! Size is ${width}x${height}px, shortest side must not exceed 512px"
      elif [[ "${width}" -ge "${height}" && "${height}" -gt 512 ]]; then
        error "${image}" "Invalid hDPI logo size! Size is ${width}x${height}px, shortest side must not exceed 512px"
      fi

    else
      # Unexpected file
      error "${image}" "Unknown and invalid filename"
    fi

    ((IMAGES++))
done <<< $(find core_integrations custom_integrations -type f)

echo ""
echo "Total of ${IMAGES} images checked, found ${ERRORS} issues."

[[ "${ERRORS}" -ne 0 ]] && exit 1 || exit 0
