import { useState } from "react";

export default function Bookings() {
  const [form, setForm] = useState({ empresa: "", nombre: "", correo: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: conectar a POST /bookings cuando el backend esté listo
    setSent(true);
  }

  return (
    <section className="px-5 md:px-8 pt-32 pb-24">
      <div className="max-w-xl mx-auto">
        <p className="text-clip font-body text-xs uppercase tracking-widest2 mb-3">Contrataciones · Colaboraciones</p>
        <h1 className="font-display text-4xl md:text-5xl text-bone mb-4">Bookings</h1>
        <p className="text-bone2 mb-10">
          ¿Quieres tocar en DISTORSIÓN, colaborar o tienes una consulta comercial? Cuéntanos.
        </p>

        {sent ? (
          <p className="text-clip font-body uppercase tracking-wide">
            Recibido. Te contactamos pronto.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Empresa / Colectivo (opcional)" name="empresa" value={form.empresa} onChange={handleChange} />
            <Field label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
            <Field label="Correo" name="correo" type="email" value={form.correo} onChange={handleChange} required />
            <Field label="Teléfono (opcional)" name="telefono" value={form.telefono} onChange={handleChange} />
            <div>
              <label className="block text-xs font-body uppercase tracking-widest2 text-bone2 mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                required
                rows={5}
                value={form.mensaje}
                onChange={handleChange}
                className="w-full bg-surface border border-surface2 focus:border-clip outline-none px-4 py-3 text-bone placeholder:text-bone2/60 font-body text-sm"
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

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-xs font-body uppercase tracking-widest2 text-bone2 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-surface border border-surface2 focus:border-clip outline-none px-4 py-3 text-bone placeholder:text-bone2/60 font-body text-sm"
      />
    </div>
  );
}
