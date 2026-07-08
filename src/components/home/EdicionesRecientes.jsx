import Reveal from "../common/Reveal";

export default function EdicionesRecientes({ events }) {
  return (
    <section className="px-5 md:px-8 py-20 md:py-28 bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-clip font-body text-xs md:text-sm tracking-widest2 uppercase mb-3">
              Archivo
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-bone">Ediciones recientes</h2>
          </div>
          <a
            href="/galeria"
            className="hidden md:block font-body text-sm uppercase tracking-wide text-bone2 hover:text-clip transition-colors"
          >
            Galería completa →
          </a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {events.map((event) => (
            <a
              key={event.id}
              href={`/eventos/${event.slug}`}
              className="group relative aspect-square overflow-hidden bg-surface2"
            >
              <img
                src={event.flyer}
                alt={`Flyer ${event.name}`}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs text-clip font-body uppercase tracking-widest2 mb-1">
                  {event.dateLabel}
                </p>
                <p className="font-display text-lg md:text-xl text-bone leading-tight">
                  {event.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
