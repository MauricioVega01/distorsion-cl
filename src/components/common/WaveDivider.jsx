// Divisor entre secciones: un waveform de audio que se satura (clipea) en el centro.
// Encodes el concepto central de la marca: DISTORSION = señal que se corta.
export default function WaveDivider({ flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-10 md:h-14"
      >
        <polyline
          points="0,30 60,30 90,10 120,50 150,4 180,56 210,30 260,30 300,18 330,42 360,2 390,58 420,30 480,30 520,22 550,38 580,30 640,30 680,8 710,52 740,30 800,30 840,20 870,40 900,30 960,30 1000,14 1030,46 1060,30 1120,30 1160,24 1200,30"
          fill="none"
          stroke="#2a2624"
          strokeWidth="2"
        />
        {/* Segmento central "clipeado" en rojo, cortado plano arriba y abajo */}
        <polyline
          points="360,2 375,2 375,58 390,58"
          fill="none"
          stroke="#ff2b2b"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}
