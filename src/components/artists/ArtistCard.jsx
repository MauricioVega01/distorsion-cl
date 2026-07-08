export default function ArtistCard({ artist }) {
  return (
    <a
      href={`/artistas/${artist.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface2 mb-3">
        <img
          src={artist.photo}
          alt={artist.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
      </div>
      <h3 className="font-display text-xl text-bone tracking-wide">{artist.name}</h3>
      <p className="text-bone2 text-xs font-body uppercase tracking-widest2 mt-1">
        {artist.country}{artist.city ? ` · ${artist.city}` : ""}
      </p>
    </a>
  );
}
