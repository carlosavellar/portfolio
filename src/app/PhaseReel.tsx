"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

const phrases = [
  "Planejamento do fluxo do usuário",
  "Sketch page structure",
  "Design responsive layouts",
  "React interfaces",
  "Design  nuclear",
  "Componentização",
  "Rest API",
  "Otimização de performance",
  "Testest automatizados",
  "Banco de dados",
  "UX/UI",
  "Deploy",
  "Teste de usabilidade",
  "Improve next sprint",
];

const visibleCenter = 3;

export default function PhaseReel() {
  const [active, setActive] = useState(phrases.length);
  const [withTransition, setWithTransition] = useState(true);
  const reelItems = useMemo(() => [...phrases, ...phrases, ...phrases], []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWithTransition(true);
      setActive((current) => current + 1);
    }, 1700);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (active < phrases.length * 2) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setWithTransition(false);
      setActive(phrases.length);
    }, 620);

    return () => window.clearTimeout(timeout);
  }, [active]);

  return (
    <div
      className="phase-reel"
      aria-label="Web development phases"
      style={
        {
          "--phase-active": active,
          "--phase-center": visibleCenter,
        } as CSSProperties
      }
    >
      <div
        className={`phase-reel__track ${
          withTransition ? "phase-reel__track--animated" : ""
        }`}
      >
        {reelItems.map((phrase, index) => (
          <p
            className={`phase-reel__item ${
              index === active ? "phase-reel__item--active" : ""
            }`}
            key={`${phrase}-${index}`}
          >
            {phrase}
          </p>
        ))}
      </div>
    </div>
  );
}
