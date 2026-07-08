import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: conectar a POST /contact cuando el backend esté listo
    setSent(true);
  }

  return (
    <section className="px-5 md:px-8 pt-32 pb-24">
      <div className="max-w-xl mx-auto">
        <p className="text-clip font-body text-xs uppercase tracking-widest2 mb-3">Escríbenos</p>
        <h1 className="font-display text-4xl md:text-5xl text-bone mb-10">Contacto</h1>

        {sent ? (
          <p className="text-clip font-body uppercase tracking-wide">
            Mensaje enviado. Te respondemos pronto.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-body uppercase tracking-widest2 text-bone2 mb-2">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                className="w-full bg-surface border border-surface2 focus:border-clip outline-none px-4 py-3 text-bone font-body text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-body uppercase tracking-widest2 text-bone2 mb-2">Correo</label>
              <input
                type="email"
                name="correo"
                required
                value={form.correo}
                onChange={handleChange}
                className="w-full bg-surface border border-surface2 focus:border-clip outline-none px-4 py-3 text-bone font-body text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-body uppercase tracking-widest2 text-bone2 mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                required
                rows={5}
                value={form.mensaje}
                onChange={handleChange}
                className="w-full bg-surface border border-surface2 focus:border-clip outline-none px-4 py-3 text-bone font-body text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-clip text-base font-body font-semibold uppercase text-sm tracking-wide px-7 py-3.5 hover:bg-bone transition-colors"
            >
              Enviar →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
