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

# Find all files in the src folder (should contain only images)
while read image; do
    # Read properties from image
    properties=($(identify -format "%w %h %m %[colorspace]" "${image}"))
    if [[ "$?" -ne 0 ]]; then
      error "${image}" "Could not read image file"
      continue
    fi

    # Extract properties into variables
    filename=$(basename "${image}")
    width="${properties[0]}"
    height="${properties[1]}"
    type="${properties[2]}"
    colorspace="${properties[3]}"

    # Ensure file is actually a PNG file
    [[ "${type}" != "PNG" ]] \
      && error "${image}" "Invalid file type '${type}' for file"

    # Ensure color space is sRGB
    [[ "${colorspace}" != "sRGB" ]] \
      && error "${image}" "Invalid color space '${colorspace}' for file"

    # Validate image dimensions
    if [[ "${filename}" == "icon.png" ]]; then
      # icon dimension
      [[ "${width}" -ne 256 || "${height}" -ne 256 ]] \
        && error "${image}" "Invalid icon size! Size is ${width}x${height}px, must be 256x256px"

    elif [[ "${filename}" == "icon@2x.png" ]]; then
      # hDPI icon dimension
      [[ "${width}" -ne 512 || "${height}" -ne 512 ]] \
        && error "${image}" "Invalid hDPI icon size! Size is ${width}x${height}px, must be 512x512px"

    elif [[ "${filename}" == "logo.png" ]]; then
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

    elif [[ "${filename}" == "logo@2x.png" ]]; then
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
done <<< $(find src -type f)

echo ""
echo "Total of ${IMAGES} images checked, found ${ERRORS} issues."

[[ "${ERRORS}" -ne 0 ]] && exit 1 || exit 0
