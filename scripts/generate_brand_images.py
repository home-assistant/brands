import os
import argparse
from pathlib import Path
from PIL import Image

# Output file definitions: (filename, size, square, dark)
FILES = [
    ("icon.png", (256, 256), True, False),
    ("icon@2x.png", (512, 512), True, False),
    ("logo.png", (256, 128), False, False),
    ("logo@2x.png", (512, 256), False, False),
    # ("dark_icon.png", (256, 256), True, True),
    # ("dark_icon@2x.png", (512, 512), True, True),
    # ("dark_logo.png", (256, 128), False, True),
    # ("dark_logo@2x.png", (512, 256), False, True),
]

def process_image(src, dest, size, square, dark):
    img = Image.open(src).convert("RGBA")
    # Trim whitespace
    bbox = img.getbbox()
    img = img.crop(bbox)
    # Resize and pad if needed
    if square:
        max_side = max(size)
        new_img = Image.new("RGBA", (max_side, max_side), (0, 0, 0, 0))
        img.thumbnail((max_side, max_side), Image.LANCZOS)
        offset = ((max_side - img.width) // 2, (max_side - img.height) // 2)
        new_img.paste(img, offset)
        img = new_img.resize(size, Image.LANCZOS)
    else:
        img = img.resize(size, Image.LANCZOS)
    # Optionally darken for dark variants
    if dark:
        # Simple darken: multiply alpha, or overlay
        overlay = Image.new("RGBA", img.size, (0, 0, 0, 60))
        img = Image.alpha_composite(img, overlay)
    img.save(dest, format="PNG", optimize=True)

def parse_args():
    p = argparse.ArgumentParser(
        description="Generate brand images from a source logo into a target directory"
    )
    p.add_argument("source", help="Path to the source image file (PNG preferred)")
    p.add_argument("target_dir", help="Target directory to write generated images")
    return p.parse_args()


if __name__ == "__main__":
    args = parse_args()
    src_path = Path(args.source)
    target_dir = Path(args.target_dir)

    if not src_path.exists():
        raise SystemExit(f"Source image not found: {src_path}")

    target_dir.mkdir(parents=True, exist_ok=True)

    for fname, size, square, dark in FILES:
        out_path = target_dir / fname
        process_image(str(src_path), str(out_path), size, square, dark)

    print(f"All brand images generated in {target_dir}")
