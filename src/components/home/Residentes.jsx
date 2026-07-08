import ArtistCard from "../artists/ArtistCard";
import Reveal from "../common/Reveal";
import { residentArtists, internationalArtists } from "../../data/artists";

function ArtistGrid({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {items.map((artist, i) => (
        <Reveal key={artist.slug} delay={i * 0.06}>
          <ArtistCard artist={artist} />
        </Reveal>
      ))}
    </div>
  );
}

export default function Residentes() {
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

        <ArtistGrid items={residentArtists} />

        <Reveal className="mt-16 md:mt-20 mb-10 md:mb-14">
          <h3 className="font-display text-3xl md:text-5xl text-bone">Internacionales</h3>
        </Reveal>

        <ArtistGrid items={internationalArtists} />
      </div>
    </section>
  );
}
