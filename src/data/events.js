// Mock data — reemplazar por fetch a la API (GET /events) cuando el backend esté listo.

export const upcomingEvents = [
  {
    id: "ev-01",
    slug: "distorsion-w-void",
    name: "DISTORSION w/ VOID",
    date: "2026-08-15",
    dateLabel: "SÁB 15.08",
    time: "23:00",
    doorsClose: "05:00",
    city: "Santiago",
    venue: "Galpón Víctor Jara",
    address: "Av. Departamental 4142, San Joaquín, Santiago",
    priceFrom: 12000,
    status: "quedan-pocas", // disponible | quedan-pocas | agotado
    minAge: 18,
    flyer: "https://images.unsplash.com/photo-1571266028243-e4c4d0651e8f?w=800&q=80",
    banner: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80",
    description:
      "VOID vuelve a Santiago después de su set en Boiler Room Berlín. Una noche de hard techno crudo en formato warehouse, con todo el peso del colectivo local abriendo camino.",
    important:
      "Evento solo para mayores de 18 años. Se solicitará carnet de identidad en la entrada. Prohibido el ingreso con bebidas alcohólicas externas.",
    ticketTiers: [
      { name: "Preventa 1", price: 12000, available: true },
      { name: "Preventa 2", price: 15000, available: true },
      { name: "Puerta", price: 20000, available: true },
    ],
    lineup: [
      { name: "VOID", country: "DE", time: "03:00 - 05:00" },
      { name: "KRATER", country: "CL", time: "01:30 - 03:00" },
      { name: "NULA", country: "AR", time: "00:15 - 01:30" },
      { name: "DIRTY", country: "CL", time: "23:00 - 00:15" },
    ],
  },
  {
    id: "ev-02",
    slug: "aniversario-distorsion",
    name: "2° ANIVERSARIO DISTORSION",
    date: "2026-09-05",
    dateLabel: "SÁB 05.09",
    time: "22:30",
    doorsClose: "06:00",
    city: "Santiago",
    venue: "Club Subsuelo",
    address: "Bombero Ossa 1350, Santiago Centro",
    priceFrom: 15000,
    status: "disponible",
    minAge: 18,
    flyer: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    banner: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80",
    description:
      "Celebramos 2 años de DISTORSION como colectivo. Line up especial con SCHRANZ MACHINE llegando desde Polonia, más toda la fuerza residente. La fiesta más importante del año.",
    important:
      "Evento solo para mayores de 18 años. Cupos limitados, se recomienda comprar preventa.",
    ticketTiers: [
      { name: "Preventa 1", price: 15000, available: true },
      { name: "Preventa 2", price: 18000, available: true },
      { name: "Puerta", price: 22000, available: true },
    ],
    lineup: [
      { name: "SCHRANZ MACHINE", country: "PL", time: "04:00 - 06:00" },
      { name: "DIRTY", country: "CL", time: "02:00 - 04:00" },
      { name: "ACIDÖ", country: "CL", time: "22:30 - 02:00" },
    ],
  },
  {
    id: "ev-03",
    slug: "distorsion-radikal",
    name: "DISTORSION RADIKAL",
    date: "2026-07-25",
    dateLabel: "VIE 25.07",
    time: "23:30",
    doorsClose: "05:30",
    city: "Santiago",
    venue: "Bodega Industrial Maipú",
    address: "Camino a Rinconada de Maipú 8500, Maipú",
    priceFrom: 10000,
    status: "disponible",
    minAge: 18,
    flyer: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80",
    banner: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&q=80",
    description:
      "Vuelta a las raíces: bodega industrial, sonido crudo y sin filtro. DISTORSION RADIKAL es la fecha más under del año, pensada para la pista más dura del colectivo.",
    important:
      "Evento solo para mayores de 18 años. Ubicación exacta se confirma 24 horas antes vía Instagram.",
    ticketTiers: [
      { name: "Preventa única", price: 10000, available: true },
      { name: "Puerta", price: 14000, available: true },
    ],
    lineup: [
      { name: "DIRTY", country: "CL", time: "02:00 - 05:30" },
      { name: "RAWKILLA", country: "CL", time: "23:30 - 02:00" },
    ],
  },
];

export const pastEvents = [
  {
    id: "ev-p1",
    slug: "distorsion-warehouse-vol1",
    name: "DISTORSION WAREHOUSE VOL. 1",
    date: "2026-05-10",
    dateLabel: "SÁB 10.05",
    venue: "Bodega Industrial Maipú",
    flyer: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  },
  {
    id: "ev-p2",
    slug: "hard-mass-santiago",
    name: "HARD MASS SANTIAGO",
    date: "2026-04-12",
    dateLabel: "SÁB 12.04",
    venue: "Club Subsuelo",
    flyer: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
  {
    id: "ev-p3",
    slug: "distorsion-x-altered-state",
    name: "DISTORSION X ALTERED STATE",
    date: "2026-03-01",
    dateLabel: "SÁB 01.03",
    venue: "Galpón Víctor Jara",
    flyer: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
  },
];
