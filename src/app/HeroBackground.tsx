"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assetPath } from "./assetPath";

type HeroSlide = {
  src: string;
  className?: string;
  priority?: boolean;
};

const HERO_ROTATION_MS = 15 * 1000;

const heroSlides: HeroSlide[] = [
  { src: assetPath("/assets/hero-professional-neon-light.jpg"), priority: true },
  // {
  //   src: assetPath("/assets/hero-2.jpg"),
  //   className: "hero-bg--subject-right",
  // },
  // { src: assetPath("/assets/hero-3.jpg") },
];

export default function HeroBackground() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlideIndex((current) => (current + 1) % heroSlides.length);
    }, HERO_ROTATION_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {heroSlides.map((slide, index) => {
        const isActive = true;
        const className = [
          "hero-bg object-cover transition-opacity duration-1000 ease-in-out",
          isActive ? "opacity-100 hero-bg--active" : "opacity-0",
          slide.className,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <Image
            key={slide.src}
            className={className}
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            priority={slide.priority}
          />
        );
      })}
    </>
  );
}
