// src/data/artists.js
// Artistas / residentes de DISTORSION — orden alfabético.
// Fotos en public/artists/ (o donde tengas montada la carpeta de assets).

export const artists = [
  {
    id: "dirty",
    name: "DIRTY",
    country: "Chile",
    international: false,
    photo: "/artists/dirty.png",
  },
  {
    id: "faust",
    name: "FAUST",
    country: "Rumania",
    international: true,
    photo: "/artists/faust.png",
  },
  {
    id: "floyd",
    name: "FLOYD",
    country: "Chile",
    international: false,
    photo: "/artists/floyd.png",
  },
  {
    id: "nekto",
    name: "NEKTO",
    country: "Chile",
    international: false,
    photo: "/artists/nekto.png",
  },
  {
    id: "paula-sanz",
    name: "PAULA SANZ",
    country: "España",
    international: true,
    photo: "/artists/paula-sanz.png",
  },
  {
    id: "szg",
    name: "SZG",
    country: "Brasil",
    international: true,
    photo: "/artists/szg.png",
  },
  {
    id: "tacidelli",
    name: "Tacidelli",
    country: "Brasil",
    international: true,
    photo: "/artists/tacidelli.png",
  },
  {
    id: "thunder21",
    name: "THUNDER21",
    country: "Chile",
    international: false,
    photo: "/artists/thunder21.png",
  },
];

// Helper para mostrar la etiqueta bajo el nombre:
// Chile -> "Chile"
// Internacional -> "Internacional · País"
export function artistLocationLabel(artist) {
  return artist.international ? `Internacional · ${artist.country}` : artist.country;
}
