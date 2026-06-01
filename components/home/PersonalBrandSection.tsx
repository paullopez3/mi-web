"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const scenarios = [
  {
    label: "Conferencia",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Conferencista de autoridad",
    desc: "Tu nombre frente a una audiencia que te reconoce como referente del sector.",
    color: "#490490",
  },
  {
    label: "Podcast",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Entrevistado en medios",
    desc: "Tu experiencia amplificada en podcasts, entrevistas y medios especializados.",
    color: "#C03F79",
  },
  {
    label: "Reconocimiento",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Referente reconocido",
    desc: "Premio, distinción o reconocimiento público que valida tu trayectoria.",
    color: "#365FE8",
  },
];

export default function PersonalBrandSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{ background: "#f8f5ff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label section-label-purple">
              Marca personal
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tu experiencia también puede{" "}
              <span style={{ color: "#490490" }}>convertirse en marca.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Ayudamos a profesionales, empresarios, consultores, médicos, abogados,
              docentes, directivos y voceros a construir una presencia pública sólida,
              confiable y comercialmente atractiva.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Diseñamos tu posicionamiento, narrativa profesional, imagen pública,
              contenidos, web personal, LinkedIn, videos de autoridad y estrategia de
              reputación digital.
            </p>
            <div
              className="p-5 rounded-2xl mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(73,4,144,0.06), rgba(192,63,121,0.06))",
                border: "1px solid rgba(73, 4, 144, 0.1)",
              }}
            >
              <p className="font-semibold text-gray-800">
                Deja de ser &ldquo;uno más&rdquo; en el mercado.{" "}
                <span style={{ color: "#490490" }}>
                  Conviértete en una voz reconocible.
                </span>
              </p>
            </div>
            <Link href="/soluciones-integrales" className="btn-primary">
              Ver solución de marca personal
            </Link>
          </motion.div>

          {/* Right: 3 scenarios */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            {scenarios.map((scenario, i) => (
              <motion.div
                key={scenario.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="flex items-center gap-5 p-5 bg-white rounded-2xl"
                style={{
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  border: `1px solid ${scenario.color}18`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${scenario.color}12`,
                    color: scenario.color,
                  }}
                >
                  {scenario.icon}
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: scenario.color }}
                  >
                    {scenario.label}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {scenario.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{scenario.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Includes list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(73,4,144,0.06), rgba(70,83,206,0.06))",
                border: "1px solid rgba(73,4,144,0.08)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                La solución incluye
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Diagnóstico",
                  "Posicionamiento",
                  "Narrativa",
                  "LinkedIn",
                  "Web personal",
                  "Fotografía",
                  "Videos de autoridad",
                  "Reputación digital",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(73,4,144,0.08)",
                      color: "#490490",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
