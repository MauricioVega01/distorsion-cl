export default function Footer() {
  return (
    <footer className="border-t border-surface2 bg-base pt-16 pb-8 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-widest2 text-bone mb-4">DISTORSIÓN</p>
          <p className="text-bone2 text-sm max-w-sm leading-relaxed">
            Colectivo y productora de hard techno. Santiago, Chile. La señal se
            satura, el sonido se rompe, la pista no perdona.
          </p>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest2 text-clip mb-4">Sitio</p>
          <ul className="space-y-2 text-sm text-bone2">
            <li><a href="/eventos" className="hover:text-bone transition-colors">Eventos</a></li>
            <li><a href="/artistas" className="hover:text-bone transition-colors">Artistas</a></li>
            <li><a href="/galeria" className="hover:text-bone transition-colors">Galería</a></li>
            <li><a href="/bookings" className="hover:text-bone transition-colors">Bookings</a></li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest2 text-clip mb-4">Contacto</p>
          <ul className="space-y-2 text-sm text-bone2">
            <li>
              <a href="mailto:contacto@distorsion.cl" className="hover:text-bone transition-colors">
                contacto@distorsion.cl
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors">
                Instagram ↗
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors">
                SoundCloud ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-surface2 flex flex-col md:flex-row justify-between gap-2 text-xs text-bone2/70">
        <p>© {new Date().getFullYear()} DISTORSIÓN · Santiago, CL</p>
        <p>Sitio en construcción — Fase 1</p>
      </div>
    </footer>
  );
}
