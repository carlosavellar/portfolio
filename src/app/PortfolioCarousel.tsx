"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";
import { assetPath } from "./assetPath";

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  stack: string;
  role: string;
  result: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Copes Empresarial",
    description:
      "Interface institucional com hierarquia visual forte, composição responsiva e foco em apresentação clara de serviços.",
    image: assetPath("/assets/copes-empresarial.png"),
    stack: "Next.js, React, Tailwind CSS",
    role: "Front-end, UI e adaptação responsiva",
    result: "Página com leitura rápida, boa presença visual e CTA claro.",
  },
  {
    title: "Montessori",
    description:
      "Layout visual para uma experiência educacional, com uso de imagens grandes, organização de conteúdo e linguagem acolhedora.",
    image: assetPath("/assets/montessori.png"),
    stack: "React, CSS responsivo, Figma",
    role: "UI design e implementação front-end",
    result: "Interface mais humana, organizada e pronta para apresentação.",
  },
  {
    title: "Soltec",
    description:
      "Apresentação front-end para empresa de tecnologia, com estrutura visual voltada a credibilidade e clareza comercial.",
    image: assetPath("/assets/soltec.png"),
    stack: "React, Next.js, componentes reutilizáveis",
    role: "Estrutura de página, componentes e refinamento visual",
    result: "Comunicação mais objetiva para produto, serviço e conversão.",
  },
  {
    title: "Casa da União",
    description:
      "Projeto de interface com foco em identidade visual, navegação simples e experiência responsiva para conteúdo institucional.",
    image: assetPath("/assets/casa-da-uniao.png"),
    stack: "HTML, CSS, JavaScript, UI",
    role: "Front-end e organização visual",
    result: "Entrega com estética consistente e conteúdo mais fácil de navegar.",
  },
];

const visibleCount = 4;

const carouselStyle = {
  "--carousel-gap": "1.25rem",
} as CSSProperties;

export default function PortfolioCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const lastStartIndex = Math.max(0, portfolioItems.length - visibleCount);
  const canGoPrevious = startIndex > 0;
  const canGoNext = startIndex < lastStartIndex;

  function showPrevious() {
    setStartIndex((current) => Math.max(0, current - visibleCount));
  }

  function showNext() {
    setStartIndex((current) =>
      Math.min(lastStartIndex, current + visibleCount),
    );
  }

  return (
    <div
      className="relative mx-auto max-w-[1120px] [--gap-count:3] [--items-per-view:4] max-[1000px]:[--gap-count:1] max-[1000px]:[--items-per-view:2] max-[560px]:[--gap-count:0] max-[560px]:[--items-per-view:1]"
      style={carouselStyle}
    >
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          className="flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white text-2xl font-black text-[#0d063f] shadow-sm transition hover:border-cyan-400 hover:text-cyan-500 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-black/10 disabled:hover:text-[#0d063f]"
          type="button"
          aria-label="Mostrar projetos anteriores"
          onClick={showPrevious}
          disabled={!canGoPrevious}
        >
          &lt;
        </button>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white text-2xl font-black text-[#0d063f] shadow-sm transition hover:border-cyan-400 hover:text-cyan-500 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-black/10 disabled:hover:text-[#0d063f]"
          type="button"
          aria-label="Mostrar próximos projetos"
          onClick={showNext}
          disabled={!canGoNext}
        >
          &gt;
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(${startIndex} * (((100% - (var(--carousel-gap) * var(--gap-count))) / var(--items-per-view)) + var(--carousel-gap)) * -1))`,
          }}
        >
          {portfolioItems.map((item) => (
            <button
              className="group min-w-0 shrink-0 basis-[calc((100%-var(--carousel-gap)*var(--gap-count))/var(--items-per-view))] overflow-hidden rounded-lg bg-white text-left shadow-[0_16px_40px_rgba(13,6,63,0.1)] transition hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(13,6,63,0.16)]"
              key={item.title}
              type="button"
              onClick={() => setSelectedItem(item)}
            >
              <span className="relative block aspect-[4/3] bg-[#0d063f]">
                <Image
                  className="object-cover transition duration-300 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0d063f]/45 to-transparent opacity-60" />
              </span>
              <span className="block p-4">
                <span className="block text-base font-black text-[#18191f]">
                  {item.title}
                </span>
                <span className="mt-2 block text-xs font-black uppercase text-cyan-600">
                  {item.stack}
                </span>
                <span className="mt-2 line-clamp-3 block text-sm leading-6 text-[#6f7280]">
                  {item.description}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedItem ? (
        <div
          id="modal-port"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07041c]/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes do projeto: ${selectedItem.title}`}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="grid max-h-[92vh] w-full max-w-[980px] overflow-hidden rounded-lg bg-white shadow-[0_28px_90px_rgba(0,0,0,0.35)] md:grid-cols-[1.2fr_0.8fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              id="scrollbar2"
              className="modal-port__image-scroll max-h-[62vh] overflow-y-auto bg-[#0d063f] p-2 md:max-h-[92vh]"
            >
              <img
                className="h-auto w-full"
                src={selectedItem.image}
                alt={selectedItem.title}
              />
            </div>
            <div className="relative flex flex-col justify-center p-7 md:p-10">
              <button
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#f1f1f1] text-xl font-black text-[#0d063f] transition hover:bg-cyan-100"
                type="button"
                aria-label="Fechar detalhe do projeto"
                onClick={() => setSelectedItem(null)}
              >
                x
              </button>
              <p className="mb-3 text-xs font-extrabold uppercase text-cyan-500">
                Estudo de caso
              </p>
              <h3 className="mb-4 text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-none text-[#11152b]">
                {selectedItem.title}
              </h3>
              <p className="text-base leading-7 text-[#6f7280]">
                {selectedItem.description}
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                <p className="mb-0 rounded-md bg-[#f4f5f9] px-4 py-3">
                  <strong>Stack:</strong> {selectedItem.stack}
                </p>
                <p className="mb-0 rounded-md bg-[#f4f5f9] px-4 py-3">
                  <strong>Responsabilidade:</strong> {selectedItem.role}
                </p>
                <p className="mb-0 rounded-md bg-[#f4f5f9] px-4 py-3">
                  <strong>Resultado:</strong> {selectedItem.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
