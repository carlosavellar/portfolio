import Link from "next/link";

const linkedinUrl = "https://www.linkedin.com/in/carlossantosjose/";
const whatsappUrl =
  "https://wa.me/5511976610711?text=Ol%C3%A1%20Jos%C3%A9%20Carlos%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20front-end.";

const eyebrowClass =
  "mb-3 text-xs font-extrabold uppercase tracking-wider text-cyan-400";

const primaryButtonClass =
  "inline-flex min-w-36 justify-center rounded-md bg-gradient-to-br from-cyan-400 to-lime-300 px-5 py-3.5 text-sm font-extrabold text-slate-950";

const secondaryButtonClass =
  "inline-flex min-w-36 justify-center rounded-md border border-white/40 px-5 py-3.5 text-sm font-extrabold text-white transition hover:border-lime-300 hover:text-lime-200";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0d063f] px-[clamp(22px,7vw,96px)] py-16 text-white"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,720px)_minmax(260px,360px)] items-center gap-8 max-[840px]:grid-cols-1">
        <div>
          <p className={eyebrowClass}>Contato</p>
          <h2 className="mb-5 max-w-[760px] text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-none">
            Vamos conversar sobre uma oportunidade front-end?
          </h2>
          <p className="mb-0 max-w-[660px] leading-7 text-white/72">
            Estou buscando uma posição como Front-end Developer. Se meu perfil
            fizer sentido para sua vaga ou time, o melhor caminho é me chamar no
            LinkedIn ou enviar uma mensagem direta pelo WhatsApp.
          </p>
        </div>

        <div className="grid gap-3">
          <Link className={primaryButtonClass} href={linkedinUrl} target="_blank">
            Chamar no LinkedIn
          </Link>
          <Link className={secondaryButtonClass} href={whatsappUrl} target="_blank">
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
