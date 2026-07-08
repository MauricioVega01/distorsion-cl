import ArtistCard from "../artists/ArtistCard";
import Reveal from "../common/Reveal";

export default function Residentes({ artists }) {
  return (
    <section className="px-5 md:px-8 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex items-end justify-between mb-10 md:mb-14">
          <h2 className="font-display text-4xl md:text-6xl text-bone">Residentes</h2>
          <a
            href="/artistas"
            className="hidden md:block font-body text-sm uppercase tracking-wide text-bone2 hover:text-clip transition-colors"
          >
            Ver todos →
          </a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {artists.map((artist, i) => (
            <Reveal key={artist.id} delay={i * 0.06}>
              <ArtistCard artist={artist} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
