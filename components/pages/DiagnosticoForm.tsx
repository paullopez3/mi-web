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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  function toggleNeed(need: string) {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="p-10 rounded-3xl text-center"
        style={{
          background: "linear-gradient(135deg, rgba(73,4,144,0.06), rgba(122,209,185,0.06))",
          border: "1px solid rgba(73, 4, 144, 0.12)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5"
          style={{ background: "rgba(73, 4, 144, 0.1)" }}
        >
          <svg className="w-8 h-8" fill="none" stroke="#490490" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          ¡Solicitud recibida!
        </h3>
        <p className="text-gray-600 mb-6">
          Gracias por contactarnos. Revisaremos tu información y nos pondremos en contacto
          contigo en las próximas 24 horas hábiles.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://wa.me/593992564376"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
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
              placeholder="Cualquier información adicional que consideres relevante..."
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
              style={{
                borderColor: "rgba(73, 4, 144, 0.15)",
                background: "rgba(248, 245, 255, 0.5)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#490090")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(73, 4, 144, 0.15)")}
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center text-base py-4 disabled:opacity-70"
        style={{ background: loading ? "#6a06cc" : "#490490" }}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </div>
        ) : (
          "Enviar solicitud de diagnóstico"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Tu información es confidencial y no será compartida con terceros.
      </p>
    </form>
  );
}
