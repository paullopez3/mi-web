"use client";

import { useState } from "react";

const sectors = [
  "Educación",
  "Salud y bienestar",
  "Servicios profesionales",
  "Inmobiliaria y construcción",
  "Turismo y gastronomía",
  "Cultura e instituciones",
  "Comercio y retail",
  "Tecnología",
  "Manufactura",
  "Otro",
];

const needsOptions = [
  "Marca / identidad",
  "Sitio web",
  "Publicidad digital",
  "Redes sociales",
  "Captación de clientes",
  "CRM / seguimiento comercial",
  "Inteligencia artificial",
  "Producción audiovisual",
  "Marca personal",
  "Transformación digital",
  "Proyecto inmobiliario",
  "Lanzamiento de negocio",
  "Comunicación institucional",
];

const budgetOptions = [
  "Menos de $500",
  "$500 – $1.500",
  "$1.500 – $3.000",
  "$3.000 – $6.000",
  "$6.000 – $12.000",
  "Más de $12.000",
  "Por definir",
];

const urgencyOptions = [
  "Lo necesito cuanto antes",
  "En el próximo mes",
  "En los próximos 3 meses",
  "Estoy explorando opciones",
];

export default function DiagnosticoForm() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  function toggleNeed(need: string) {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  }

  return (
    <form
      action="https://formspree.io/f/mvzyjbgj"
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="necesidades" value={selectedNeeds.join(", ")} />
      <input type="hidden" name="_next" value="https://mi-web-sage.vercel.app" />
      <input type="hidden" name="_subject" value="Nueva solicitud de diagnóstico — Grafizé" />

      <div
        className="p-6 rounded-3xl"
        style={{
          border: "1px solid rgba(73, 4, 144, 0.08)",
          background: "white",
          boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-5">Información de contacto</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nombre y apellido *
            </label>
            <input
              type="text"
              name="nombre"
              required
              placeholder="Tu nombre completo"
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490490")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Empresa o proyecto *
            </label>
            <input
              type="text"
              name="empresa"
              required
              placeholder="Nombre de tu empresa"
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490490")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Cargo
            </label>
            <input
              type="text"
              name="cargo"
              placeholder="Tu cargo o rol"
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490490")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Teléfono / WhatsApp *
            </label>
            <input
              type="tel"
              name="telefono"
              required
              placeholder="+593 99 000 0000"
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490490")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Correo electrónico *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="correo@empresa.com"
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490490")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Sitio web actual (si tiene)
            </label>
            <input
              type="url"
              name="sitio_web"
              placeholder="www.tuempresa.com"
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490490")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Sector *
          </label>
          <select
            name="sector"
            required
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white appearance-none"
            style={{
              borderColor: "rgba(73, 4, 144, 0.15)",
              background: "rgba(248, 245, 255, 0.5)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#490490")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
          >
            <option value="">Selecciona tu sector</option>
            {sectors.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Needs */}
      <div
        className="p-6 rounded-3xl"
        style={{
          border: "1px solid rgba(73, 4, 144, 0.08)",
          background: "white",
          boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          ¿Qué necesita mejorar tu empresa?
        </h3>
        <p className="text-sm text-gray-500 mb-4">Puedes seleccionar varias opciones.</p>
        <div className="flex flex-wrap gap-2">
          {needsOptions.map((need) => (
            <button
              key={need}
              type="button"
              onClick={() => toggleNeed(need)}
              className="px-3 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: selectedNeeds.includes(need) ? "#490490" : "rgba(73,4,144,0.06)",
                color: selectedNeeds.includes(need) ? "white" : "#490490",
                border: `1px solid ${selectedNeeds.includes(need) ? "#490490" : "rgba(73,4,144,0.15)"}`,
              }}
            >
              {need}
            </button>
          ))}
        </div>
      </div>

      {/* Objectives + Budget + Urgency */}
      <div
        className="p-6 rounded-3xl"
        style={{
          border: "1px solid rgba(73, 4, 144, 0.08)",
          background: "white",
          boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-5">Sobre tu proyecto</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              ¿Cuál es su principal objetivo?
            </label>
            <textarea
              rows={3}
              name="objetivo"
              placeholder="Cuéntanos qué quieres lograr con tu empresa en los próximos meses..."
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490490")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Presupuesto aproximado
              </label>
              <select
                name="presupuesto"
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all appearance-none"
                style={{
                  borderColor: "rgba(73, 4, 144, 0.15)",
                  background: "rgba(248, 245, 255, 0.5)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#490490")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
              >
                <option value="">Seleccionar rango</option>
                {budgetOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Urgencia del proyecto
              </label>
              <select
                name="urgencia"
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all appearance-none"
                style={{
                  borderColor: "rgba(73, 4, 144, 0.15)",
                  background: "rgba(248, 245, 255, 0.5)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#490490")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
              >
                <option value="">Seleccionar</option>
                {urgencyOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Mensaje adicional
            </label>
            <textarea
              rows={3}
              name="mensaje"
              placeholder="Cualquier información adicional que consideres relevante..."
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490490")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full btn-primary justify-center text-base py-4"
        style={{ background: "#490490" }}
      >
        Enviar solicitud de diagnóstico
      </button>

      <p className="text-xs text-gray-400 text-center">
        Tu información es confidencial y no será compartida con terceros.
      </p>
    </form>
  );
}
