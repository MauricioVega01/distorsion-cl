import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Eventos", href: "/eventos" },
  { label: "Artistas", href: "/artistas" },
  { label: "Galería", href: "/galeria" },
  { label: "Bookings", href: "/bookings" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/95 backdrop-blur border-b border-surface2" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="/" className="font-display text-2xl md:text-3xl tracking-widest2 text-bone">
          DISTORSIÓN
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm uppercase tracking-widest2 text-bone2 hover:text-clip transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/eventos"
            className="font-body text-sm uppercase tracking-wide font-semibold px-4 py-2 border border-clip text-clip hover:bg-clip hover:text-base transition-colors"
          >
            Entradas
          </a>
        </nav>

        <button
          className="md:hidden text-bone"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="block w-7 h-0.5 bg-bone mb-1.5" />
          <span className="block w-7 h-0.5 bg-bone mb-1.5" />
          <span className="block w-5 h-0.5 bg-clip" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-base border-t border-surface2 px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base uppercase tracking-widest2 text-bone2 hover:text-clip"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/eventos"
            className="font-body text-base uppercase font-semibold text-clip"
            onClick={() => setOpen(false)}
          >
            Entradas →
          </a>
        </nav>
      )}
    </header>
  );
}
