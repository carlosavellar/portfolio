"use client";

import { useEffect } from "react";

const maxOffset = 120;

function clamp(value: number) {
  return Math.max(-maxOffset, Math.min(maxOffset, value));
}

export default function DottedParallax() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    let frame = 0;

    function updateDots() {
      frame = 0;

      const viewportCenter = window.innerHeight / 2;
      const dots = document.querySelectorAll<HTMLElement>(".decor-dots");

      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const dotCenter = rect.top + rect.height / 2;
        const speed = Number(dot.dataset.parallaxSpeed ?? 0.16);
        const offset = clamp((viewportCenter - dotCenter) * speed);

        dot.style.setProperty("--decor-parallax-y", `${offset.toFixed(2)}px`);
      });
    }

    function requestUpdate() {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateDots);
    }

    updateDots();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return null;
}
