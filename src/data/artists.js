// src/data/artists.js
// Artistas / residentes de DISTORSION.
// Fotos en public/artists/

export const residentArtists = [
  {
    slug: "dirty",
    name: "DIRTY",
    country: "Chile",
    international: false,
    photo: "/artists/dirty.png",
  },
  {
    slug: "floyd",
    name: "FLOYD",
    country: "Chile",
    international: false,
    photo: "/artists/floyd.png",
  },
  {
    slug: "nekto",
    name: "NEKTO",
    country: "Chile",
    international: false,
    photo: "/artists/nekto.png",
  },
  {
    slug: "thunder21",
    name: "THUNDER21",
    country: "Chile",
    international: false,
    photo: "/artists/thunder21.png",
  },
];

export const internationalArtists = [
  {
    slug: "faust",
    name: "FAUST",
    country: "Internacional · Rumania",
    international: true,
    photo: "/artists/faust.png",
  },
  {
    slug: "paula-sanz",
    name: "PAULA SANZ",
    country: "Internacional · España",
    international: true,
    photo: "/artists/paula-sanz.png",
  },
  {
    slug: "szg",
    name: "SZG",
    country: "Internacional · Brasil",
    international: true,
    photo: "/artists/szg.png",
  },
  {
    slug: "tacidelli",
    name: "Tacidelli",
    country: "Internacional · Brasil",
    international: true,
    photo: "/artists/tacidelli.png",
  },
];

// Lista combinada (por si algún componente futuro necesita todos juntos)
export const residentArtistsAll = [...residentArtists, ...internationalArtists];
