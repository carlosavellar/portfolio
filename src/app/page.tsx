import Image from "next/image";
import Link from "next/link";
import ContactSection from "./ContactSection";
import DottedParallax from "./DottedParallax";
import Header from "./Header";
import HeroBackground from "./HeroBackground";
import PhaseReel from "./PhaseReel";
import PortfolioCarousel from "./PortfolioCarousel";
import { assetPath } from "./assetPath";

const linkedinUrl = "https://www.linkedin.com/in/carlossantosjose/";
const githubUrl = "https://github.com/carlosavellar";

const skills = [
  {
    title: "React e Next.js",
    body: "Componentes reutilizáveis, rotas, páginas estáticas, integração com APIs e interfaces prontas para evoluir.",
    image: assetPath("/assets/react.png"),
  },
  {
    title: "HTML, CSS e JavaScript",
    body: "Base sólida de semântica, responsividade, acessibilidade, estados de interface e boas práticas de front-end.",
    image: assetPath("/assets/web-dev.png"),
  },
  {
    title: "TypeScript e clean code",
    body: "Código mais previsível, organizado e fácil de manter, com atenção a nomes, estrutura e legibilidade.",
    image: assetPath("/assets/github.png"),
  },
  {
    title: "UX/UI e Figma",
    body: "Tradução de layouts em interfaces reais, com cuidado em hierarquia visual, espaçamento e experiência do usuário.",
    image: assetPath("/assets/figma.png"),
  },
];

const strengths = [
  {
    title: "Interfaces responsivas",
    body: "Crio telas que funcionam bem em desktop e mobile, com atenção a navegação, leitura e consistência visual.",
    theme: "bg-[#31bdc6]",
  },
  {
    title: "Design para código",
    body: "Uso minha experiência com UI para transformar ideias e layouts em componentes front-end claros e reutilizáveis.",
    theme: "bg-[#442df0]",
  },
  {
    title: "Entrega com cuidado",
    body: "Gosto de entender o objetivo do produto, organizar o fluxo e revisar detalhes antes de considerar uma tela pronta.",
    theme: "bg-[#a453f2]",
  },
];

const experienceHighlights = [
  "Desenvolvimento de sites e interfaces web com React, Next.js, JavaScript, HTML e CSS.",
  "Criação de layouts responsivos a partir de Figma, referências visuais e necessidades de negócio.",
  "Experiência combinando design, front-end, publicação de sites e comunicação com clientes.",
  "Busca ativa por oportunidade como Front-end Developer em times que valorizam produto, código e UI.",
];

const profileStats = [
  ["25+", "anos criando soluções digitais"],
  ["React", "Next.js e TypeScript"],
  ["UX/UI", "visão de design aplicada ao código"],
];

const eyebrowClass =
  "mb-3 text-xs font-extrabold uppercase tracking-wider text-cyan-400";
const sectionClass = "px-[clamp(22px,7vw,96px)] py-[clamp(64px,9vw,128px)]";
const primaryButtonClass =
  "inline-flex min-w-32 justify-center rounded-md bg-gradient-to-br from-cyan-400 to-lime-300 px-5 py-3.5 text-sm font-extrabold text-slate-950";
const secondaryButtonClass =
  "inline-flex min-w-32 justify-center rounded-md border border-white/40 px-5 py-3.5 text-sm font-extrabold text-white transition hover:border-lime-300 hover:text-lime-200";

export default function Home() {
  return (
    <main className="bg-[#f6f8fb] text-[#18191f]">
      <DottedParallax />
      <Header />

      <section
        id="home"
        className="relative flex min-h-[min(760px,92vh)] items-center overflow-hidden px-[clamp(22px,7vw,96px)] py-[clamp(86px,10vw,132px)] max-[900px]:min-h-[540px] max-[560px]:min-h-[520px] max-[560px]:px-4 max-[560px]:py-8"
      >
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09042b]/88 via-[#120650]/54 to-[#09042b]/28" />
        <div className="relative z-[1] mx-auto grid w-full max-w-[1080px] grid-cols-[minmax(0,650px)_minmax(280px,380px)] items-center justify-center gap-[clamp(28px,5vw,58px)] max-[900px]:grid-cols-1 max-[900px]:items-start max-[560px]:gap-5">
          <div id="hero" className="max-w-[720px] text-white">
            <p className={eyebrowClass}>
              Front-end Developer | React | Next.js
            </p>
            <h1 className="mb-5 text-[clamp(2.45rem,6vw,4.6rem)] font-bold leading-[0.95] max-[560px]:mb-2 max-[560px]:text-[1.75rem]">
              José Carlos dos Santos
            </h1>
            <p className="max-w-[640px] text-[clamp(1rem,1.6vw,1.18rem)] leading-7 text-white/82 max-[560px]:text-xs max-[560px]:leading-5">
              Desenvolvedor front-end com experiência em React, Next.js,
              TypeScript, UX/UI e criação de interfaces responsivas. Estou em
              busca de uma oportunidade para construir produtos digitais com
              código limpo, design consistente e atenção aos detalhes.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3.5 max-[560px]:mt-4 max-[560px]:flex-col max-[560px]:items-stretch">
              <a className={primaryButtonClass} href="#work">
                Ver projetos
              </a>
              <a
                className={`${secondaryButtonClass} max-[560px]:w-full`}
                href="#contact"
              >
                Falar comigo
              </a>
              <Link
                className={`${secondaryButtonClass} max-[560px]:w-full`}
                href={linkedinUrl}
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
          </div>
          {/* <PhaseReel /> */}
        </div>
      </section>

      <section id="skills" className={`${sectionClass} bg-[#f1f1f1]`}>
        <Image
          className="decor-dots decor-dots--blue decor-dots--services"
          src={assetPath("/assets/modern-halftone-blue.jpg")}
          alt=""
          width={900}
          height={900}
          aria-hidden="true"
          data-parallax-speed="0.2"
        />
        <div className="mx-auto mb-[clamp(34px,6vw,54px)] max-w-[620px] text-center">
          <p className="mb-2 text-[0.66rem] font-black uppercase text-[#2b7cf6]">
            Competências principais
          </p>
          <h2 className="mb-0 text-[clamp(1.65rem,3.1vw,2.25rem)] font-black leading-[1.05] text-[#11152b]">
            Front-end com base técnica, olhar de design e foco em product!
          </h2>
        </div>

        <div className="mx-auto grid max-w-[900px] grid-cols-3 items-stretch gap-7 max-[820px]:grid-cols-1">
          {strengths.map((strength) => (
            <article
              className={`${strength.theme} flex min-h-[302px] flex-col justify-between px-7 py-9 text-center text-white shadow-[0_18px_46px_rgba(31,35,88,0.12)]`}
              key={strength.title}
            >
              <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-lg bg-white/12 text-3xl font-black">
                {strength.title.slice(0, 2)}
              </div>
              <div>
                <h3 className="mb-4 text-lg font-black leading-none">
                  {strength.title}
                </h3>
                <p className="mx-auto max-w-[230px] text-xs leading-6 tracking-wider text-white/74">
                  {strength.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className={`${sectionClass} grid grid-cols-[minmax(260px,420px)_minmax(0,680px)] items-center justify-center gap-[clamp(34px,6vw,82px)] bg-white max-[900px]:grid-cols-1`}
      >
        <div className="relative w-full max-[900px]:max-w-[420px]">
          <Image
            className="decor-dots decor-dots--blue decor-dots--about"
            src={assetPath("/assets/layout-square-dotted.png")}
            alt=""
            width={210}
            height={210}
            aria-hidden="true"
            data-parallax-speed="-0.13"
          />
          <div className="relative z-[1] aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              className="object-cover"
              src={assetPath("/assets/about-image.png")}
              alt="Retrato de José Carlos"
              fill
              sizes="(max-width: 800px) 90vw, 420px"
            />
          </div>
        </div>
        <div className="max-w-[680px]">
          <p className={eyebrowClass}>Sobre mim</p>
          <h2 className="mb-5 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none">
            Desenvolvedor front-end com repertório em design.
          </h2>
          <p id="foto-text" className="leading-7 text-[#6f7280]">
            Sou José Carlos Santos, desenvolvedor front-end e designer. Minha
            trajetória combina criação visual, interfaces digitais e
            desenvolvimento web. Hoje meu foco é atuar em times de produto como
            front-end developer, entregando telas responsivas, organizadas e
            fáceis de usar com React, Next.js, TypeScript e boas práticas de UI.
          </p>
          <div className="mt-7 grid gap-3">
            {experienceHighlights.map((item) => (
              <p
                className="mb-0 rounded-md border border-black/10 bg-[#f6f8fb] px-4 py-3 text-sm font-bold text-[#33384a]"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
          <div
            id="foto"
            className="mt-7 grid grid-cols-[80px_minmax(0,1fr)] items-center gap-x-4 gap-y-2 border-t border-black/10 pt-6"
          >
            <Image
              className="row-span-2 h-20 w-20 rounded-full object-cover ring-2 ring-[#2b7cf6]/20"
              src={assetPath("/assets/jose-carlos-avatar.jpg")}
              alt="José Carlos"
              width={80}
              height={80}
            />
            <span>
              José Carlos /{" "}
              <span className="text-[#8A8B8D]">Front-end Developer</span>
            </span>
            <span className="flex flex-wrap gap-4">
              <Link
                href={linkedinUrl}
                target="_blank"
                className="text-xs font-semibold tracking-wide text-sky-700"
              >
                LinkedIn
              </Link>
              <Link
                href={githubUrl}
                target="_blank"
                className="text-xs font-semibold tracking-wide text-sky-700"
              >
                GitHub
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section id="work" className={`${sectionClass} bg-[#f4f5f9]`}>
        <Image
          className="decor-dots decor-dots--blue decor-dots--work"
          src={assetPath("/assets/layout-dotted.png")}
          alt=""
          width={210}
          height={210}
          aria-hidden="true"
          data-parallax-speed="0.18"
        />
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className={eyebrowClass}>Projetos selecionados</p>
          <h2 className="mb-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-none">
            Projetos com contexto, stack e responsabilidade.
          </h2>
          <p className="mx-auto max-w-xl leading-7 text-[#6f7280]">
            Uma seleção de interfaces e materiais que mostram minha capacidade
            de transformar design em produto navegável, responsivo e bem
            apresentado.
          </p>
        </div>
        <PortfolioCarousel />
      </section>

      <section id="tools" className={`${sectionClass} bg-white`}>
        <Image
          className="decor-dots decor-dots--blue decor-dots--tools"
          src={assetPath("/assets/layout-square-dotted.png")}
          alt=""
          width={190}
          height={190}
          aria-hidden="true"
          data-parallax-speed="-0.16"
        />
        <div className="mx-auto mb-[clamp(40px,7vw,72px)] max-w-[760px] text-center">
          <p className={eyebrowClass}>Stack e ferramentas</p>
          <h2 className="mb-5 text-[clamp(2.1rem,4.6vw,4rem)] font-bold leading-none">
            Tecnologias que uso para criar interfaces modernas.
          </h2>
          <p className="mx-auto max-w-xl leading-7 text-[#6f7280]">
            A ideia aqui é facilitar a leitura para recrutadores e equipes
            técnicas: quais ferramentas eu uso, como penso front-end e onde meu
            repertório de design ajuda.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1040px] grid-cols-2 gap-x-[clamp(38px,8vw,104px)] gap-y-[clamp(28px,5vw,58px)] max-[900px]:grid-cols-1">
          {skills.map((skill) => (
            <article
              className="grid grid-cols-[96px_minmax(0,1fr)] items-center gap-6 max-[560px]:grid-cols-[76px_minmax(0,1fr)] max-[560px]:items-start"
              key={skill.title}
            >
              <div className="flex aspect-square items-center justify-center rounded-lg border border-black/10 bg-[#f3f7fb] p-4 max-[560px]:p-3.5">
                <Image
                  className="h-full w-full object-contain"
                  src={skill.image}
                  alt=""
                  width={92}
                  height={92}
                />
              </div>
              <div>
                <h3 className="mb-2 text-[clamp(1.18rem,2vw,1.55rem)] font-bold">
                  {skill.title}
                </h3>
                <p className="mb-0 leading-7 text-[#6f7280]">{skill.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f5f9] px-[clamp(22px,7vw,96px)] py-16">
        <div className="mx-auto grid max-w-[1040px] grid-cols-3 gap-5 max-[760px]:grid-cols-1">
          {profileStats.map(([value, label]) => (
            <div
              className="border border-black/10 bg-white px-6 py-6 text-center shadow-[0_12px_32px_rgba(13,6,63,0.06)]"
              key={value}
            >
              <p className="mb-2 text-2xl font-black text-[#11152b]">{value}</p>
              <p className="mb-0 text-sm font-bold text-[#6f7280]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />

      <footer className="flex items-center justify-between gap-6 bg-[#07041c] px-[clamp(22px,7vw,96px)] py-6 text-white max-[560px]:items-start max-[560px]:flex-col">
        <div>
          <p className="mb-1 text-lg font-black">José Carlos Santos</p>
          <p className="mb-0 text-sm font-bold text-white/64">
            Front-end Developer | React | Next.js | UX/UI
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a className="text-sm font-bold text-white/80" href="#home">
            Voltar para o topo
          </a>
          <Link href={githubUrl} target="_blank" aria-label="GitHub">
            <Image
              src={assetPath("/assets/github.png")}
              alt=""
              width={22}
              height={22}
            />
          </Link>
        </div>
      </footer>
    </main>
  );
}
