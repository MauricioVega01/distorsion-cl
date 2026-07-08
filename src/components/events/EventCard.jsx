import { formatCLP } from "../../utils/formatCurrency";

const STATUS_LABEL = {
  disponible: null,
  "quedan-pocas": "QUEDAN POCAS",
  agotado: "AGOTADO",
};

export default function EventCard({ event }) {
  const statusLabel = STATUS_LABEL[event.status];

  return (
    <article className="group relative bg-surface border border-surface2 hover:border-clip/60 transition-colors">
      <a href={`/eventos/${event.slug}`} className="block relative aspect-[4/5] overflow-hidden">
        <img
          src={event.flyer}
          alt={`Flyer ${event.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {statusLabel && (
          <span className="absolute top-3 right-3 bg-clip text-base text-xs font-body font-bold uppercase tracking-wide px-2.5 py-1">
            {statusLabel}
          </span>
        )}
      </a>

      <div className="p-5">
        <p className="text-clip font-body text-xs uppercase tracking-widest2 mb-2">
          {event.dateLabel}
        </p>
        <h3 className="font-display text-2xl text-bone mb-1 leading-tight">
          {event.name}
        </h3>
        <p className="text-bone2 text-sm mb-4">{event.venue}, {event.city}</p>

        <div className="flex items-center justify-between">
          <span className="text-bone font-body text-sm">
            Desde {formatCLP(event.priceFrom)}
          </span>
          <a
            href={`/eventos/${event.slug}`}
            className="text-xs font-body uppercase tracking-wide text-clip hover:text-bone transition-colors"
          >
            Line up →
          </a>
        </div>
      </div>
    </article>
  );
}
