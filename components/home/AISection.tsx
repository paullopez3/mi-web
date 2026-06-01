"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const aiFeatures = [
  {
    title: "Diagnóstico de madurez digital",
    desc: "Evaluamos el estado digital de tu empresa y definimos la ruta de modernización.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "CRM y seguimiento de leads",
    desc: "Implementamos sistemas de gestión comercial para que nunca pierdas una oportunidad.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Agentes IA de ventas y atención",
    desc: "Bots inteligentes que responden, califican y nutren prospectos automáticamente.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "Automatización de respuestas",
    desc: "Flujos automáticos en WhatsApp, email y redes para no perder ningún contacto.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Digitalización de procesos",
    desc: "Convertimos procesos manuales en flujos digitales eficientes y medibles.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Capacitación al equipo",
    desc: "Formamos a tu equipo para adoptar herramientas digitales e inteligencia artificial.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function AISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #060e30 0%, #0d1852 40%, #0a1a4a 70%, #050b20 100%)",
      }}
    >
      {/* Tech pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,84,251,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(47,84,251,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute -top-20 left-1/3 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #2F54FB 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #7AD1B9 0%, transparent 70%)" }}
      />

      {/* Floating circuit nodes */}
      <svg className="absolute top-0 right-0 w-96 h-96 opacity-10" viewBox="0 0 400 400">
        <circle cx="200" cy="100" r="40" fill="none" stroke="#2F54FB" strokeWidth="0.5" />
        <circle cx="200" cy="100" r="6" fill="#2F54FB" />
        <circle cx="320" cy="200" r="30" fill="none" stroke="#7AD1B9" strokeWidth="0.5" />
        <circle cx="320" cy="200" r="5" fill="#7AD1B9" />
        <circle cx="100" cy="250" r="25" fill="none" stroke="#4653CE" strokeWidth="0.5" />
        <circle cx="100" cy="250" r="4" fill="#4653CE" />
        <line x1="200" y1="100" x2="320" y2="200" stroke="#2F54FB" strokeWidth="0.3" />
        <line x1="200" y1="100" x2="100" y2="250" stroke="#7AD1B9" strokeWidth="0.3" />
        <line x1="320" y1="200" x2="100" y2="250" stroke="#4653CE" strokeWidth="0.3" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-6">
              Transformación digital e IA
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              La inteligencia artificial no es el futuro.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7AD1B9, #2F54FB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Es una ventaja competitiva disponible ahora.
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Acompañamos a empresas que quieren modernizar su operación, atención y
              gestión comercial mediante herramientas digitales prácticas, automatización
              e inteligencia artificial aplicada.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Implementamos CRM, flujos de seguimiento, WhatsApp Business profesional,
              agentes IA de ventas, agentes IA de atención y procesos digitales que
              ayudan a no perder oportunidades comerciales.
            </p>
            <Link href="/diagnostico" className="btn-teal">
              Digitalizar mi empresa
            </Link>
          </motion.div>

          {/* Right: Feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aiFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className="glass-card p-5 rounded-2xl"
                style={{ borderColor: "rgba(47, 84, 251, 0.2)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: "rgba(47, 84, 251, 0.2)",
                    color: "#7AD1B9",
                  }}
                >
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-white/50 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
