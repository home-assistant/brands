# Agents

## Pull Requests

When creating pull requests, you **must** use the repository's PR template. Do not replace or rewrite the template with your own description.

The template is located at `.github/PULL_REQUEST_TEMPLATE.md` and is also available at:
https://github.com/home-assistant/brands/blob/master/.github/PULL_REQUEST_TEMPLATE.md

Fill in the template fields as instructed by the comments within it. Do not delete any text from the template unless the template itself instructs you to.

### Key requirements

- Check exactly **one** type of change box
- If adding a custom integration, include a link to the custom integration repository
- Ensure images meet the size requirements listed in the checklist
- All images must be PNG format with transparent backgrounds

## Repository Structure

- `core_integrations/` - Icons and logos for core Home Assistant integrations
- `custom_integrations/` - Icons and logos for custom integrations (HACS, etc.)

## Image Requirements

| File | Size |
|------|------|
| `icon.png` | 256x256px |
| `icon@2x.png` | 512x512px |
| `logo.png` | min 128px, max 256px on shortest side |
| `logo@2x.png` | min 256px, max 512px on shortest side |
