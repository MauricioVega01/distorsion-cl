import EventCard from "../../components/events/EventCard";
import { upcomingEvents, pastEvents } from "../../data/events";

export default function Events() {
  return (
    <section className="px-5 md:px-8 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-clip font-body text-xs uppercase tracking-widest2 mb-3">Fechas</p>
        <h1 className="font-display text-4xl md:text-6xl text-bone mb-12">Eventos</h1>

        <h2 className="font-display text-2xl text-bone mb-6">Próximos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <h2 className="font-display text-2xl text-bone mb-6">Pasados</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {pastEvents.map((event) => (
            <a key={event.id} href={`/eventos/${event.slug}`} className="block aspect-square overflow-hidden bg-surface2">
              <img src={event.flyer} alt={event.name} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
