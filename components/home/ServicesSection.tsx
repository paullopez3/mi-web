"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Estrategia de crecimiento digital",
    desc: "Diagnóstico, propuesta de valor, posicionamiento, estrategia comercial, embudos de venta y plan de crecimiento.",
    color: "#490490",
    bg: "rgba(73,4,144,0.06)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Branding e identidad corporativa",
    desc: "Naming, identidad visual, manual de marca, tono de comunicación, storytelling, presentaciones y reputación.",
    color: "#C03F79",
    bg: "rgba(192,63,121,0.06)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Presencia digital profesional",
    desc: "Sitios web, landing pages, catálogos digitales, SEO básico, Google Business Profile, WhatsApp Business y correos corporativos.",
    color: "#365FE8",
    bg: "rgba(54,95,232,0.06)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Marketing, publicidad y captación",
    desc: "Campañas Meta Ads, Google Ads, campañas de leads, copywriting, landing pages, creatividad publicitaria y reportes.",
    color: "#E37B5E",
    bg: "rgba(227,123,94,0.06)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "CRM, automatización e IA",
    desc: "CRM comercial, WhatsApp Business, agentes IA de ventas, agentes IA de atención, automatización de respuestas y capacitación.",
    color: "#7AD1B9",
    bg: "rgba(122,209,185,0.08)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Producción cinematográfica y audiovisual",
    desc: "Producción cinematográfica, video corporativo, video publicitario, reels, fotografía, testimoniales y contenido audiovisual de alto impacto, con calidad de cine.",
    color: "#4653CE",
    bg: "rgba(70,83,206,0.06)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label section-label-purple mx-auto w-fit">
            Servicios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Todo lo que tu empresa necesita para crecer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Integramos estrategia, creatividad, marketing, publicidad, tecnología, contenidos
            e inteligencia artificial en una sola ruta de crecimiento.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={cardVariants}
              className="group relative p-7 rounded-3xl card-hover cursor-pointer"
              style={{
                background: service.bg,
                border: `1px solid ${service.color}18`,
              }}
              whileHover={{
                borderColor: `${service.color}40`,
                boxShadow: `0 16px 40px ${service.color}15`,
              }}
            >
              {/* Number */}
              <span
                className="text-5xl font-black opacity-10 absolute top-5 right-6 leading-none"
                style={{ color: service.color }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-2 pr-8 leading-snug"
                style={{ color: service.color }}
              >
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>

              {/* Arrow */}
              <div
                className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: service.color }}
              >
                Ver más
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/servicios" className="btn-outline">
            Ver todos los servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
