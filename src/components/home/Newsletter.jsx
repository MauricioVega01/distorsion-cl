import { useState } from "react";
import Reveal from "../common/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // TODO: conectar a POST /newsletter/subscribe cuando el backend esté listo
    setStatus("sent");
  }

  return (
    <section className="px-5 md:px-8 py-20 md:py-24 border-t border-surface2">
      <Reveal className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl text-bone mb-3">Suscríbete</h2>
        <p className="text-bone2 mb-8 max-w-md mx-auto">
          Próximas fechas y acceso a preventa, directo a tu correo. Nada más.
        </p>

        {status === "sent" ? (
          <p className="text-clip font-body uppercase tracking-wide">
            Listo. Revisa tu correo para confirmar.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-surface border border-surface2 focus:border-clip outline-none px-4 py-3 text-bone placeholder:text-bone2/60 font-body text-sm"
            />
            <button
              type="submit"
              className="bg-clip text-base font-body font-semibold uppercase text-sm tracking-wide px-6 py-3 hover:bg-bone transition-colors"
            >
              Suscribirme →
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
