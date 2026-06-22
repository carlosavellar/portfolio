from pathlib import Path
import math

from PIL import Image, ImageDraw, ImageFilter, ImageFont


W = H = 900
OUT = Path("public/assets/logo-jc-dev.png")
FONT_REGULAR = Path("node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")
FONT_CANDIDATES = [
    Path("C:/Windows/Fonts/arialbd.ttf"),
    Path("C:/Windows/Fonts/segoeuib.ttf"),
    FONT_REGULAR,
]
FONT_BOLD = next((path for path in FONT_CANDIDATES if path.exists()), FONT_REGULAR)


def gradient_layer(size, c1, c2, horizontal=True):
    w, h = size
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    pix = layer.load()
    for yy in range(h):
        for xx in range(w):
            t = xx / (w - 1) if horizontal else yy / (h - 1)
            pix[xx, yy] = tuple(int(c1[i] * (1 - t) + c2[i] * t) for i in range(4))
    return layer


def rounded_bar(center, length, width, angle_deg, colors):
    length = int(length)
    width = int(width)
    pad = 18
    base = Image.new("RGBA", (length + pad * 2, width + pad * 2), (0, 0, 0, 0))
    mask = Image.new("L", base.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((pad, pad, pad + length, pad + width), radius=width // 2, fill=255)
    grad = gradient_layer(base.size, colors[0], colors[1], horizontal=True)
    bar = Image.new("RGBA", base.size, (0, 0, 0, 0))
    bar.paste(grad, (0, 0), mask)
    rotated = bar.rotate(angle_deg, resample=Image.Resampling.BICUBIC, expand=True)
    pos = (int(center[0] - rotated.size[0] / 2), int(center[1] - rotated.size[1] / 2))
    return rotated, pos


img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
pix = img.load()
for y in range(H):
    for x in range(W):
        dx = (x - W / 2) / (W / 2)
        dy = (y - H / 2) / (H / 2)
        radius = math.sqrt(dx * dx + dy * dy)
        glow = max(0, 1 - radius)
        pix[x, y] = (int(31 + 12 * glow), int(2 * glow), int(78 + 26 * glow), 255)

for radius, alpha in [(260, 28), (190, 20), (120, 20)]:
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow)
    draw.ellipse(
        (W / 2 - radius, H / 2 - radius - 98, W / 2 + radius, H / 2 + radius - 98),
        fill=(100, 0, 255, alpha),
    )
    img = Image.alpha_composite(img, glow.filter(ImageFilter.GaussianBlur(70)))

icon = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
bars = [
    ((340, 298), 188, 75, -42, ((255, 126, 126, 255), (255, 56, 162, 255))),
    ((382, 392), 178, 75, 48, ((111, 0, 255, 255), (255, 55, 170, 255))),
    ((540, 294), 176, 75, 42, ((108, 0, 255, 255), (255, 61, 168, 255))),
    ((538, 406), 174, 75, -42, ((255, 131, 129, 255), (255, 56, 160, 255))),
]
for spec in bars:
    rotated, pos = rounded_bar(*spec)
    shadow_draw = Image.new("RGBA", rotated.size, (0, 0, 0, 70))
    shadow.alpha_composite(shadow_draw, (pos[0] + 2, pos[1] + 8))
    icon.alpha_composite(rotated, pos)

draw = ImageDraw.Draw(icon, "RGBA")
draw.ellipse((259, 320, 334, 395), fill=(255, 88, 148, 165))
draw.ellipse((558, 316, 634, 392), fill=(255, 55, 151, 165))
img = Image.alpha_composite(img, shadow.filter(ImageFilter.GaussianBlur(7)))
img = Image.alpha_composite(img, icon)

draw = ImageDraw.Draw(img)
mono_font = ImageFont.truetype(str(FONT_BOLD), 124)
letters = "JC"
letter_box = draw.textbbox((0, 0), letters, font=mono_font)
draw.text(
    ((W - (letter_box[2] - letter_box[0])) / 2, 284),
    letters,
    font=mono_font,
    fill=(255, 255, 255, 245),
    stroke_width=3,
    stroke_fill=(56, 0, 130, 90),
)

word_font = ImageFont.truetype(str(FONT_BOLD), 128)
word = "dev"
word_box = draw.textbbox((0, 0), word, font=word_font)
draw.text(((W - (word_box[2] - word_box[0])) / 2, 515), word, font=word_font, fill=(255, 255, 255, 255))

sub_font = ImageFont.truetype(str(FONT_REGULAR), 42)
subtitle = "DEVELOPERS"
spacing = 18
subtitle_width = sum(draw.textlength(ch, font=sub_font) for ch in subtitle) + spacing * (len(subtitle) - 1)
x = (W - subtitle_width) / 2
for ch in subtitle:
    draw.text((x, 662), ch, font=sub_font, fill=(137, 28, 255, 230))
    x += draw.textlength(ch, font=sub_font) + spacing

OUT.parent.mkdir(parents=True, exist_ok=True)
img.convert("RGB").save(OUT, quality=95)
print(OUT.resolve())
