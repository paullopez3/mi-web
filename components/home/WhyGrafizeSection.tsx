"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  "Estrategia antes que ejecución.",
  "Enfoque en crecimiento, no solo en diseño.",
  "Integración de marketing, publicidad y transformación digital.",
  "Producción audiovisual con calidad cinematográfica (Ficticia Films).",
  "Capacidad editorial y de contenidos (Premisa Editorial).",
  "Formación empresarial (Cátedra Digital).",
  "Inteligencia artificial aplicada a ventas, atención y comunicación.",
  "Servicios integrales orientados a resultados empresariales.",
];

const chaosItems = [
  { label: "Diseño", opacity: 0.4, rotate: -8, x: -20 },
  { label: "Redes", opacity: 0.3, rotate: 5, x: 30 },
  { label: "Web", opacity: 0.35, rotate: -3, x: -10 },
  { label: "Ads", opacity: 0.25, rotate: 10, x: 20 },
  { label: "Video", opacity: 0.3, rotate: -12, x: -30 },
  { label: "Email", opacity: 0.2, rotate: 7, x: 10 },
];

const systemItems = [
  { label: "Estrategia", color: "#490490" },
  { label: "Marketing", color: "#365FE8" },
  { label: "Publicidad", color: "#E37B5E" },
  { label: "Tecnología", color: "#7AD1B9" },
  { label: "Contenido", color: "#C03F79" },
  { label: "IA", color: "#4653CE" },
];

export default function WhyGrafizeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f5ff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label section-label-purple mx-auto w-fit">
            Por qué Grafizé
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 max-w-3xl mx-auto">
            No empezamos preguntando qué pieza necesitas. Empezamos preguntando qué quiere lograr tu empresa.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Antes de diseñar una web, una campaña o una automatización, entendemos el
            problema comercial, la oportunidad de posicionamiento y la ruta de crecimiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {/* Chaos vs System visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="p-6 rounded-3xl"
            style={{
              background: "rgba(192, 63, 121, 0.04)",
              border: "1px solid rgba(192, 63, 121, 0.12)",
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: "rgba(192,63,121,0.1)", color: "#C03F79" }}>✕</span>
              Piezas aisladas sin estrategia
            </h3>
            <div className="relative h-44 flex items-center justify-center overflow-hidden rounded-2xl" style={{ background: "rgba(0,0,0,0.03)" }}>
              {chaosItems.map((item, i) => (
                <div
                  key={i}
                  className="absolute px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-400"
                  style={{
                    transform: `rotate(${item.rotate}deg) translateX(${item.x}px)`,
                    opacity: item.opacity,
                    background: "rgba(93,93,93,0.08)",
                    border: "1px solid rgba(93,93,93,0.12)",
                    top: `${15 + (i * 15)}%`,
                    left: `${10 + (i * 14)}%`,
                  }}
                >
                  {item.label}
                </div>
              ))}
              <p className="relative z-10 text-gray-400 text-xs text-center max-w-[150px] leading-relaxed">
                Acciones desconectadas sin ruta ni medición
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-6 rounded-3xl"
            style={{
              background: "rgba(73, 4, 144, 0.04)",
              border: "1px solid rgba(73, 4, 144, 0.12)",
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: "rgba(73,4,144,0.1)", color: "#490490" }}>✓</span>
              Sistema integrado de crecimiento
            </h3>
            <div className="relative h-44 flex items-center justify-center rounded-2xl" style={{ background: "rgba(73,4,144,0.03)" }}>
              {/* Center */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center z-10 relative"
                style={{ background: "rgba(73,4,144,0.9)" }}
              >
                <span className="text-white text-xs font-bold text-center leading-tight">CRECI-<br/>MIENTO</span>
              </div>
              {/* Surrounding items */}
              {systemItems.map((item, i) => {
                const angle = (i * 60 * Math.PI) / 180;
                const x = 55 * Math.cos(angle);
                const y = 55 * Math.sin(angle);
                return (
                  <div
                    key={i}
                    className="absolute px-2 py-1 rounded-full text-xs font-bold"
                    style={{
                      color: item.color,
                      background: item.color + "15",
                      border: `1px solid ${item.color}30`,
                      transform: `translateX(${x}px) translateY(${y}px)`,
                    }}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {differentiators.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{
                background: "white",
                border: "1px solid rgba(73, 4, 144, 0.06)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(73, 4, 144, 0.1)" }}
              >
                <svg className="w-3 h-3" style={{ color: "#490090" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{diff}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-block p-6 rounded-2xl max-w-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(73,4,144,0.06), rgba(70,83,206,0.06))",
              border: "1px solid rgba(73, 4, 144, 0.1)",
            }}
          >
            <p className="text-lg font-semibold text-gray-800">
              El resultado: una marca más clara, una presencia más fuerte y{" "}
              <span style={{ color: "#490490" }}>
                un sistema comercial más inteligente.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
