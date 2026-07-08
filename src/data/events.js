// src/data/events.js
// Mock data — reemplazar por fetch a la API (GET /events) cuando el backend esté listo.
// TODO: completar precio, hora exacta y dirección cuando estén listos.
// Flyers: placeholders en /events/ — reemplazar por los flyers definitivos cuando estén generados.

export const upcomingEvents = [
  {
    id: "ev-01",
    slug: "distorsion-come-back",
    name: "DISTORSION COME BACK",
    date: "2026-08-22",
    dateLabel: "SÁB 22.08",
    time: "23:00", // TODO: confirmar hora exacta
    doorsClose: "05:00", // TODO: confirmar
    city: "Santiago",
    venue: "Indómito House",
    address: "", // TODO: dirección exacta
    priceFrom: 0, // TODO: precio preventa
    status: "disponible",
    minAge: 18,
    flyer: "/events/flyer-come-back.png",
    banner: "/events/flyer-come-back.png",
    description: "", // TODO
    important:
      "Evento solo para mayores de 18 años. Se solicitará carnet de identidad en la entrada.",
    ticketTiers: [
      { name: "Preventa", price: 0, available: true }, // TODO precio
    ],
    // Lineup ordenado alfabéticamente
    lineup: [
      { name: "AR-TASS", country: "CL", time: "" },
      { name: "DIRTY", country: "CL", time: "" },
      { name: "FFLOOYDD", country: "CL", time: "" },
      { name: "NEKTO", country: "CL", time: "" },
      { name: "REEDUS", country: "CL", time: "" },
      { name: "THUNDER21", country: "CL", time: "" },
    ],
  },
  {
    id: "ev-02",
    slug: "distorsion-x-climaxclub",
    name: "DISTORSION X CLIMAXCLUB",
    date: "2026-08-28",
    dateLabel: "VIE 28.08",
    time: "23:00", // TODO: confirmar hora exacta
    doorsClose: "05:00", // TODO: confirmar
    city: "Santiago",
    venue: "Barrio Bellavista", // TODO: nombre exacto del local si lo tienes
    address: "", // TODO: dirección exacta
    priceFrom: 0, // TODO: precio preventa
    status: "disponible",
    minAge: 18,
    flyer: "/events/flyer-climaxclub.png",
    banner: "/events/flyer-climaxclub.png",
    description: "", // TODO
    important:
      "Evento solo para mayores de 18 años. Se solicitará carnet de identidad en la entrada.",
    ticketTiers: [
      { name: "Preventa", price: 0, available: true }, // TODO precio
    ],
    // Lineup ordenado alfabéticamente
    lineup: [
      { name: "Aldes", country: "CL", time: "" },
      { name: "Atom", country: "CL", time: "" },
      { name: "Lurtz", country: "CL", time: "" },
      { name: "Mashel", country: "CL", time: "" },
      { name: "Somar", country: "CL", time: "" },
    ],
  },
];

export const pastEvents = [];
