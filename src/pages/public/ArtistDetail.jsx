import { useParams, Link } from "react-router-dom";
import { residentArtists } from "../../data/artists";
import * as EventsData from "../../data/events";

export default function ArtistDetail() {
  const { slug } = useParams();
  const artist = residentArtists.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <section className="px-5 md:px-8 pt-32 pb-24 min-h-[60vh] text-center">
        <h1 className="font-display text-3xl text-bone mb-4">Artista no encontrado</h1>
        <Link to="/artistas" className="text-clip font-body uppercase text-sm tracking-wide">
          ← Volver a artistas
        </Link>
      </section>
    );
  }

  const allEvents = [...EventsData.upcomingEvents, ...EventsData.pastEvents];
  const artistEvents = allEvents.filter((e) => artist.history?.includes(e.slug));

  return (
    <article className="px-5 md:px-8 pt-32 pb-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14">
        <div>
          <div className="aspect-[4/5] overflow-hidden bg-surface2 mb-4">
            <img src={artist.photo} alt={artist.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-4 text-sm font-body uppercase tracking-wide">
            {artist.instagram && artist.instagram !== "#" && (
              <a href={artist.instagram} target="_blank" rel="noreferrer" className="text-clip hover:text-bone">
                Instagram ↗
              </a>
            )}
            {artist.soundcloud && artist.soundcloud !== "#" && (
              <a href={artist.soundcloud} target="_blank" rel="noreferrer" className="text-clip hover:text-bone">
                SoundCloud ↗
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="text-clip font-body text-xs uppercase tracking-widest2 mb-2">
            {artist.country}{artist.city ? ` · ${artist.city}` : ""}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-bone mb-3">{artist.name}</h1>
          <p className="text-bone2 text-sm font-body uppercase tracking-wide mb-8">{artist.genre}</p>

          <p className="text-bone2 leading-relaxed mb-12 max-w-xl">{artist.bio}</p>

          <h2 className="font-display text-2xl text-bone mb-5">Fechas con DISTORSION</h2>
          {artistEvents.length === 0 ? (
            <p className="text-bone2 text-sm">Aún no hay fechas registradas.</p>
          ) : (
            <ul className="space-y-0 border-t border-surface2 max-w-xl">
              {artistEvents.map((event) => (
                <li key={event.id} className="flex items-center justify-between py-4 border-b border-surface2">
                  <div>
                    <p className="font-body text-bone">{event.name}</p>
                    <p className="text-bone2 text-xs uppercase tracking-widest2">{event.venue}</p>
                  </div>
                  <span className="text-clip font-body text-sm tracking-wide">{event.dateLabel}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
