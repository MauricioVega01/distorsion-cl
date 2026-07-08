import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { upcomingEvents } from "../../data/events";
import { formatCLP } from "../../utils/formatCurrency";

export default function EventDetail() {
  const { slug } = useParams();
  const event = upcomingEvents.find((e) => e.slug === slug);
  const [selectedTier, setSelectedTier] = useState(event?.ticketTiers?.[0]?.name ?? null);

  if (!event) {
    return (
      <section className="px-5 md:px-8 pt-32 pb-24 min-h-[60vh] text-center">
        <h1 className="font-display text-3xl text-bone mb-4">Evento no encontrado</h1>
        <Link to="/eventos" className="text-clip font-body uppercase text-sm tracking-wide">
          ← Volver a eventos
        </Link>
      </section>
    );
  }

  const mapQuery = encodeURIComponent(`${event.venue}, ${event.address}`);

  return (
    <article>
      {/* Banner */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img src={event.banner} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-base/20" />
        <div className="absolute bottom-0 left-0 w-full px-5 md:px-8 pb-10 md:pb-14">
          <div className="max-w-5xl mx-auto">
            <p className="text-clip font-body text-xs md:text-sm uppercase tracking-widest2 mb-3">
              {event.dateLabel} · {event.venue}, {event.city}
            </p>
            <h1 className="font-display text-4xl md:text-7xl text-bone leading-[0.9]">
              {event.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Columna principal */}
        <div className="lg:col-span-2 space-y-14">
          <section>
            <h2 className="font-display text-2xl text-bone mb-4">Sobre el evento</h2>
            <p className="text-bone2 leading-relaxed">{event.description}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bone mb-6">Line up</h2>
            <ul className="space-y-0 border-t border-surface2">
              {event.lineup.map((artist) => (
                <li
                  key={artist.name}
                  className="flex items-center justify-between py-4 border-b border-surface2"
                >
                  <div>
                    <p className="font-display text-xl text-bone tracking-wide">{artist.name}</p>
                    <p className="text-bone2 text-xs font-body uppercase tracking-widest2">
                      {artist.country}
                    </p>
                  </div>
                  <span className="text-clip font-body text-sm tracking-wide">{artist.time}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bone mb-4">Ubicación</h2>
            <p className="text-bone2 mb-4">{event.venue} — {event.address}</p>
            <div className="aspect-video w-full border border-surface2 overflow-hidden">
              <iframe
                title="Mapa del venue"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              />
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bone mb-4">Información importante</h2>
            <p className="text-bone2 leading-relaxed">{event.important}</p>
          </section>
        </div>

        {/* Sidebar: compra de entradas */}
        <aside className="lg:sticky lg:top-24 h-fit bg-surface border border-surface2 p-6">
          <p className="text-clip font-body text-xs uppercase tracking-widest2 mb-2">
            {event.dateLabel} · {event.time} hrs
          </p>
          <p className="text-bone2 text-sm mb-6">
            Puertas hasta las {event.doorsClose} hrs · +{event.minAge} años
          </p>

          <div className="space-y-3 mb-6">
            {event.ticketTiers.map((tier) => (
              <button
                key={tier.name}
                onClick={() => setSelectedTier(tier.name)}
                disabled={!tier.available}
                className={`w-full flex items-center justify-between px-4 py-3 border text-left transition-colors ${
                  selectedTier === tier.name
                    ? "border-clip bg-clip/10"
                    : "border-surface2 hover:border-bone2"
                } ${!tier.available ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                <span className="font-body text-sm text-bone uppercase tracking-wide">
                  {tier.name}
                </span>
                <span className="font-body text-sm text-bone">
                  {tier.available ? formatCLP(tier.price) : "Agotado"}
                </span>
              </button>
            ))}
          </div>

          <button
            className="w-full bg-clip text-base font-body font-semibold uppercase text-sm tracking-wide px-6 py-3.5 hover:bg-bone transition-colors"
            onClick={() => alert("Checkout aún no implementado — se conecta en Fase 3 (pasarela de pago).")}
          >
            Comprar entrada →
          </button>

          <p className="text-bone2/70 text-xs mt-4 text-center">
            No necesitas crear una cuenta para comprar.
          </p>
        </aside>
      </div>
    </article>
  );
}
