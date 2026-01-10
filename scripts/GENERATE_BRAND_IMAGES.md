## Home Assistant Brand Images Generator

This script generates PNG logos and icons suitable for Home Assistant integrations according to the [brands repository](https://github.com/home-assistant/brands) guidelines.

## Requirements

- Python 3.7 or newer
- Pillow library (for image processing)

Install the dependency:

```bash
pip install Pillow
```

## Usage

Run the script from the repository root (recommended) or from the `scripts` folder. Provide the source image path and the target directory where the generated images should be written.

POSIX example:

```bash
python scripts/generate_brand_images.py scripts/example.png custom_integrations/DOMAIN
```

Windows (PowerShell) example:

```powershell
python .\scripts\generate_brand_images.py .\scripts\example.png ..\custom_integrations\DOMAIN
```

Notes:
- `source` can be any existing image file; PNG is recommended.
- `target_dir` will be created with `parents=True` if missing.

## Output files

By default the script generates the following files in the `target_dir`:
- `icon.png` (256×256)
- `icon@2x.png` (512×512)
- `logo.png` (256×128)
- `logo@2x.png` (512×256)

These sizes and filenames are defined in the `FILES` list inside `scripts/generate_brand_images.py` and can be adjusted there if you need different sizes.

There are commented-out entries for dark-mode variants (`dark_icon.png`, etc.) which you can enable as needed.

## Troubleshooting

- If you see `Source image not found`, verify the `source` path you passed is correct and readable.
- If Pillow import fails, ensure you installed it into the same Python environment you use to run the script.
- To inspect or change the sizes/filenames edit the `FILES` array inside `scripts/generate_brand_images.py`.

---

For details on required image conventions, see the [brands repository](https://github.com/home-assistant/brands).