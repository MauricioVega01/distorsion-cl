import EventCard from "../events/EventCard";
import Reveal from "../common/Reveal";

export default function Cartelera({ events }) {
  return (
    <section className="px-5 md:px-8 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-clip font-body text-xs md:text-sm tracking-widest2 uppercase mb-3">
              Próximas fechas · Santiago
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-bone">Cartelera</h2>
          </div>
          <a
            href="/eventos"
            className="hidden md:block font-body text-sm uppercase tracking-wide text-bone2 hover:text-clip transition-colors"
          >
            Ver todo →
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.08}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>

        <a
          href="/eventos"
          className="md:hidden mt-8 block text-center font-body text-sm uppercase tracking-wide text-clip"
        >
          Ver todos los eventos →
        </a>
      </div>
    </section>
  );
}
