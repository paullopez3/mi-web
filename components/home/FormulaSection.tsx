"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const formulaItems = [
  {
    label: "Estrategia",
    desc: "Diagnóstico, posicionamiento y ruta de crecimiento",
    color: "#490490",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Marca",
    desc: "Identidad, tono de voz y posicionamiento visual",
    color: "#C03F79",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    label: "Marketing",
    desc: "Contenidos, redes sociales y comunicación estratégica",
    color: "#365FE8",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    label: "Publicidad",
    desc: "Campañas digitales, creatividades y captación de leads",
    color: "#E37B5E",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    label: "Tecnología",
    desc: "Web, CRM, automatización y plataformas digitales",
    color: "#4653CE",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    label: "IA",
    desc: "Agentes inteligentes, automatización y análisis de datos",
    color: "#7AD1B9",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function FormulaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label section-label-purple mx-auto w-fit">
            Nuestra metodología
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            La fórmula Grafizé de crecimiento
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Primero entendemos tu negocio. Luego construimos tu sistema completo de
            presencia, captación, venta y crecimiento digital.
          </p>
        </motion.div>

        {/* Formula visual */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {formulaItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
                  style={{
                    background: `${item.color}20`,
                    border: `1px solid ${item.color}40`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-xs font-bold tracking-wide uppercase"
                  style={{ color: item.color }}
                >
                  {item.label}
                </span>
              </motion.div>
              {i < formulaItems.length - 1 && (
                <span className="text-2xl font-light text-gray-300 pb-5">+</span>
              )}
            </div>
          ))}
        </div>

        {/* Description cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {formulaItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="p-5 rounded-2xl card-hover"
              style={{
                background: "white",
                border: `1px solid ${item.color}20`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${item.color}15`, color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
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
              Una empresa que quiere escalar no necesita piezas aisladas.{" "}
              <span style={{ color: "#490490" }}>Necesita un sistema.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
