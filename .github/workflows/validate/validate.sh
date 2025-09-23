#!/usr/bin/env bash

# Small variable to determine exit code at the end
ERRORS=0
IMAGES=0

# List of exempted integration domains (existing ones with invalid names)
# These are grandfathered in and won't be validated for domain naming rules
EXEMPTED_DOMAINS=(
  "w1000-energy-monitor"
  "exchangerate-api"
  "watermyyard-pro"
  "meraki-ha"
  "baidu-charging"
  "lock-manager"
  "plugwise-beta"
  "ACInfinity"
  "bootstrap-icons"
  "tauron-outages"
  "hacs-minerstat"
  "meteo-swiss"
  "up-bank"
)

# Function to check if a domain is exempted
function is_exempted() {
  local domain="${1}"
  for exempted in "${EXEMPTED_DOMAINS[@]}"; do
    if [[ "${domain}" == "${exempted}" ]]; then
      return 0
    fi
  done
  return 1
}

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

    # Validate integration domain naming rules (except for special underscore cases and exempted domains)
    if [[ "${foldername}" != "_placeholder" && "${foldername}" != "_homeassistant" ]] && ! is_exempted "${foldername}"; then
      # Check if domain starts with underscore (not allowed except for special cases)
      if [[ "${foldername}" == _* ]]; then
        error "${folderpath}" "Invalid integration domain '${foldername}'. Integration domains cannot start with an underscore (_), please use the integration domain instead."
      fi
      
      # Check if domain contains only valid characters (a-z, 0-9, underscore)
      if [[ ! "${foldername}" =~ ^[a-z0-9_]+$ ]]; then
        error "${folderpath}" "Invalid integration domain '${foldername}'. Integration domains can only contain lowercase letters (a-z), numbers (0-9), and underscores (_). Hyphens (-) and other special characters are not allowed."
      fi
    fi

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

    if [[ "${filename}" == "REMOVAL_NOTE" ]]; then
      # This file should not be processed
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
done <<< $(find core_integrations custom_integrations core_brands -type f)

# Check for identical icon and logo images (using file hashes)
for folder in core_integrations/* custom_integrations/* core_brands/*; do
    [[ ! -d "${folder}" ]] && continue
    
    # Check if icon and logo files are byte-for-byte identical
    # Standard resolution
    if [[ -f "${folder}/icon.png" ]] && [[ -f "${folder}/logo.png" ]]; then
        if cmp -s "${folder}/icon.png" "${folder}/logo.png"; then
            error "${folder}/logo.png" "logo.png is identical to icon.png. Please remove logo.png as the icon will be used automatically"
        fi
    fi
    
    # High resolution @2x
    if [[ -f "${folder}/icon@2x.png" ]] && [[ -f "${folder}/logo@2x.png" ]]; then
        if cmp -s "${folder}/icon@2x.png" "${folder}/logo@2x.png"; then
            error "${folder}/logo@2x.png" "logo@2x.png is identical to icon@2x.png. Please remove logo@2x.png as the icon will be used automatically"
        fi
    fi
    
    # Dark mode standard resolution
    if [[ -f "${folder}/dark_icon.png" ]] && [[ -f "${folder}/dark_logo.png" ]]; then
        if cmp -s "${folder}/dark_icon.png" "${folder}/dark_logo.png"; then
            error "${folder}/dark_logo.png" "dark_logo.png is identical to dark_icon.png. Please remove dark_logo.png as the icon will be used automatically"
        fi
    fi
    
    # Dark mode high resolution @2x
    if [[ -f "${folder}/dark_icon@2x.png" ]] && [[ -f "${folder}/dark_logo@2x.png" ]]; then
        if cmp -s "${folder}/dark_icon@2x.png" "${folder}/dark_logo@2x.png"; then
            error "${folder}/dark_logo@2x.png" "dark_logo@2x.png is identical to dark_icon@2x.png. Please remove dark_logo@2x.png as the icon will be used automatically"
        fi
    fi
    
    # Check if dark variants are identical to light variants
    # Dark icon vs light icon - standard resolution
    if [[ -f "${folder}/icon.png" ]] && [[ -f "${folder}/dark_icon.png" ]]; then
        if cmp -s "${folder}/icon.png" "${folder}/dark_icon.png"; then
            error "${folder}/dark_icon.png" "dark_icon.png is identical to icon.png. Please remove dark_icon.png and dark_icon@2x.png as the light version will be used automatically"
        fi
    fi
    
    # Dark icon vs light icon - high resolution
    if [[ -f "${folder}/icon@2x.png" ]] && [[ -f "${folder}/dark_icon@2x.png" ]]; then
        if cmp -s "${folder}/icon@2x.png" "${folder}/dark_icon@2x.png"; then
            error "${folder}/dark_icon@2x.png" "dark_icon@2x.png is identical to icon@2x.png. Please remove dark_icon.png and dark_icon@2x.png as the light version will be used automatically"
        fi
    fi
    
    # Dark logo vs light logo - standard resolution
    if [[ -f "${folder}/logo.png" ]] && [[ -f "${folder}/dark_logo.png" ]]; then
        if cmp -s "${folder}/logo.png" "${folder}/dark_logo.png"; then
            error "${folder}/dark_logo.png" "dark_logo.png is identical to logo.png. Please remove dark_logo.png and dark_logo@2x.png as the light version will be used automatically"
        fi
    fi
    
    # Dark logo vs light logo - high resolution
    if [[ -f "${folder}/logo@2x.png" ]] && [[ -f "${folder}/dark_logo@2x.png" ]]; then
        if cmp -s "${folder}/logo@2x.png" "${folder}/dark_logo@2x.png"; then
            error "${folder}/dark_logo@2x.png" "dark_logo@2x.png is identical to logo@2x.png. Please remove dark_logo.png and dark_logo@2x.png as the light version will be used automatically"
        fi
    fi
    
    # Check if @2x versions are identical to standard versions (should be higher resolution)
    # Icon @2x vs standard
    if [[ -f "${folder}/icon.png" ]] && [[ -f "${folder}/icon@2x.png" ]]; then
        if cmp -s "${folder}/icon.png" "${folder}/icon@2x.png"; then
            error "${folder}/icon@2x.png" "icon@2x.png is identical to icon.png. Please remove icon@2x.png as it should be a higher resolution version"
        fi
    fi
    
    # Logo @2x vs standard
    if [[ -f "${folder}/logo.png" ]] && [[ -f "${folder}/logo@2x.png" ]]; then
        if cmp -s "${folder}/logo.png" "${folder}/logo@2x.png"; then
            error "${folder}/logo@2x.png" "logo@2x.png is identical to logo.png. Please remove logo@2x.png as it should be a higher resolution version"
        fi
    fi
    
    # Dark icon @2x vs standard
    if [[ -f "${folder}/dark_icon.png" ]] && [[ -f "${folder}/dark_icon@2x.png" ]]; then
        if cmp -s "${folder}/dark_icon.png" "${folder}/dark_icon@2x.png"; then
            error "${folder}/dark_icon@2x.png" "dark_icon@2x.png is identical to dark_icon.png. Please remove dark_icon@2x.png as it should be a higher resolution version"
        fi
    fi
    
    # Dark logo @2x vs standard
    if [[ -f "${folder}/dark_logo.png" ]] && [[ -f "${folder}/dark_logo@2x.png" ]]; then
        if cmp -s "${folder}/dark_logo.png" "${folder}/dark_logo@2x.png"; then
            error "${folder}/dark_logo@2x.png" "dark_logo@2x.png is identical to dark_logo.png. Please remove dark_logo@2x.png as it should be a higher resolution version"
        fi
    fi
done

echo ""
echo "Total of ${IMAGES} images checked, found ${ERRORS} issues."

[[ "${ERRORS}" -ne 0 ]] && exit 1 || exit 0
