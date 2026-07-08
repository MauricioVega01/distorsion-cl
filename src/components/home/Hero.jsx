import GlitchText from "../common/GlitchText";
import { formatCLP } from "../../utils/formatCurrency";

export default function Hero({ event }) {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-28 pt-32 px-5 md:px-8 overflow-hidden">
      {/* Fondo con imagen del evento + degradado */}
      <div className="absolute inset-0 -z-10">
        <img
          src={event.flyer}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-base/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-base/90 via-transparent to-base/60" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <p className="text-clip font-body text-xs md:text-sm tracking-widest2 uppercase mb-4">
          Destacado · Próxima fecha
        </p>

        <GlitchText
          text="DISTORSIÓN"
          as="h1"
          active
          className="font-display text-[15vw] md:text-[8rem] leading-[0.85] text-bone block"
        />

        <h2 className="font-display text-3xl md:text-5xl text-bone mt-4 mb-6">
          {event.name}
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-2 text-bone2 font-body text-sm md:text-base uppercase tracking-wide mb-8">
          <span>{event.dateLabel} · {event.time}</span>
          <span>{event.venue}, {event.city}</span>
          <span>Desde {formatCLP(event.priceFrom)}</span>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={`/eventos/${event.slug}`}
            className="bg-clip text-base font-body font-semibold uppercase text-sm tracking-wide px-7 py-3.5 hover:bg-bone transition-colors"
          >
            Comprar entradas →
          </a>
          <a
            href="/eventos"
            className="border border-bone2 text-bone font-body uppercase text-sm tracking-wide px-7 py-3.5 hover:border-bone transition-colors"
          >
            Ver todos los eventos
          </a>
        </div>
      </div>
    </section>
  );
}
