from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "public" / "assets" / "hero-3.jpg"
BACKUP = ROOT / "public" / "assets" / "hero-3-before-neon.jpg"


def cubic(p0, p1, p2, p3, steps=90):
    points = []
    for index in range(steps + 1):
        t = index / steps
        mt = 1 - t
        x = (
            mt**3 * p0[0]
            + 3 * mt**2 * t * p1[0]
            + 3 * mt * t**2 * p2[0]
            + t**3 * p3[0]
        )
        y = (
            mt**3 * p0[1]
            + 3 * mt**2 * t * p1[1]
            + 3 * mt * t**2 * p2[1]
            + t**3 * p3[1]
        )
        points.append((round(x), round(y)))
    return points


def draw_neon(layer, points, color=(0, 225, 255), core_width=5):
    glow_color = (*color, 255)
    draw = ImageDraw.Draw(layer)
    for width, alpha, blur in (
        (core_width * 16, 34, 34),
        (core_width * 9, 58, 20),
        (core_width * 5, 96, 10),
    ):
        glow = Image.new("RGBA", layer.size, (0, 0, 0, 0))
        ImageDraw.Draw(glow).line(points, fill=(*color, alpha), width=width, joint="curve")
        layer.alpha_composite(glow.filter(ImageFilter.GaussianBlur(blur)))

    draw.line(points, fill=glow_color, width=core_width, joint="curve")
    draw.line(points, fill=(175, 255, 255, 230), width=max(1, core_width // 2), joint="curve")


def screen(base, overlay):
    return ImageChops.screen(base.convert("RGB"), overlay.convert("RGB"))


def main():
    if not BACKUP.exists():
        BACKUP.write_bytes(TARGET.read_bytes())

    source = BACKUP if BACKUP.exists() else TARGET
    base = Image.open(source).convert("RGB")
    width, height = base.size
    neon = Image.new("RGBA", base.size, (0, 0, 0, 0))

    outer_body = cubic(
        (1195, 70),
        (1350, 150),
        (1270, 420),
        (1405, 650),
        120,
    ) + cubic((1405, 650), (1335, 760), (1340, 965), (1190, 1065), 90)
    draw_neon(neon, outer_body, (0, 215, 255), 5)

    bun_rim = cubic((1115, 88), (1165, 38), (1235, 54), (1268, 130), 70)
    draw_neon(neon, bun_rim, (24, 104, 255), 3)

    shoulder_sweep = cubic((1195, 530), (1290, 560), (1352, 690), (1288, 790), 80)
    draw_neon(neon, shoulder_sweep, (0, 255, 238), 4)

    hand_phone = cubic((760, 520), (705, 595), (770, 705), (875, 665), 90)
    draw_neon(neon, hand_phone, (0, 245, 255), 3)

    forearm = cubic((840, 650), (935, 680), (1015, 610), (1088, 565), 80)
    draw_neon(neon, forearm, (18, 140, 255), 3)

    bloom = neon.filter(ImageFilter.GaussianBlur(8))
    combined = screen(base, bloom)
    combined = Image.alpha_composite(combined.convert("RGBA"), neon)

    vignette = Image.new("RGBA", base.size, (0, 0, 0, 0))
    vignette_draw = ImageDraw.Draw(vignette)
    vignette_draw.rectangle((0, 0, width, height), fill=(0, 18, 85, 18))
    final = Image.alpha_composite(combined, vignette).convert("RGB")
    final.save(TARGET, quality=94, subsampling=0, optimize=True)


if __name__ == "__main__":
    main()
