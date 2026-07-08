import ArtistCard from "../../components/artists/ArtistCard";
import { residentArtists } from "../../data/artists";

export default function Artists() {
  return (
    <section className="px-5 md:px-8 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-clip font-body text-xs uppercase tracking-widest2 mb-3">Colectivo</p>
        <h1 className="font-display text-4xl md:text-6xl text-bone mb-12">Artistas</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {residentArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
