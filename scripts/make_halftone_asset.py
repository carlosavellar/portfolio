from pathlib import Path
import math
import struct

from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
PREVIEW = ROOT / "public" / "assets" / "modern-halftone-preview.tif"
OUT = ROOT / "public" / "assets" / "modern-halftone-blue.png"


def lerp(a, b, t):
    return round(a + (b - a) * t)


def main():
    data = PREVIEW.read_bytes()
    width = 25
    height = 25
    image_data = data[10 : 10 + width * height * 2]
    palette_offset = 1262
    palette = struct.unpack("<768H", data[palette_offset : palette_offset + 1536])
    reds = palette[:256]
    greens = palette[256:512]
    blues = palette[512:768]

    alpha = Image.new("L", (width, height), 0)
    alpha_pixels = []
    for index in range(width * height):
        palette_index = image_data[index * 2]
        preview_alpha = image_data[index * 2 + 1]
        brightness = (
            reds[palette_index] // 256
            + greens[palette_index] // 256
            + blues[palette_index] // 256
        ) / 3
        pattern_strength = max(0, min(255, round((140 - brightness) * 3.1)))
        alpha_pixels.append(pattern_strength)

    alpha.putdata(alpha_pixels)
    alpha = alpha.resize((900, 900), Image.Resampling.NEAREST)
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.35))

    asset = Image.new("RGBA", alpha.size, (0, 0, 0, 0))
    pixels = []
    width, height = alpha.size
    for y in range(height):
        for x in range(width):
            t = (x + y * 0.26) / (width + height * 0.26)
            edge = min(x, y, width - 1 - x, height - 1 - y) / (width * 0.18)
            fade = max(0, min(1, edge))
            radial = math.dist((x, y), (width * 0.56, height * 0.5)) / (width * 0.68)
            fade *= max(0, min(1, 1.12 - radial))
            dot_alpha = round(alpha.getpixel((x, y)) * fade * 0.82)
            color = (
                lerp(8, 0, t),
                lerp(39, 230, t),
                lerp(104, 255, t),
                dot_alpha,
            )
            pixels.append(color)
    asset.putdata(pixels)

    glow = Image.new("RGBA", asset.size, (0, 0, 0, 0))
    glow.putalpha(alpha.filter(ImageFilter.GaussianBlur(8)))
    glow_pixels = []
    for y in range(height):
        for x in range(width):
            a = glow.getpixel((x, y))[3]
            t = x / width
            glow_pixels.append((0, lerp(105, 245, t), 255, round(a * 0.15)))
    glow.putdata(glow_pixels)

    final = Image.alpha_composite(glow, asset)
    final.save(OUT)


if __name__ == "__main__":
    main()
