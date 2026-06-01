"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Presencia Digital Profesional",
    desc: "Para negocios que necesitan verse serios, confiables y preparados para captar clientes.",
    includes: "Sitio web · Identidad básica · Google Business · WhatsApp · SEO",
    color: "#490490",
    icon: "🌐",
  },
  {
    title: "Sistema de Captación de Clientes",
    desc: "Para empresas que necesitan generar leads, consultas, citas, reservas o prospectos comerciales.",
    includes: "Landing · Campañas · CRM · Automatización · Reportes",
    color: "#365FE8",
    icon: "🎯",
  },
  {
    title: "Marca Personal de Autoridad",
    desc: "Para profesionales, fundadores y expertos que quieren convertirse en referentes.",
    includes: "Narrativa · LinkedIn · Web personal · Fotografía · Contenidos",
    color: "#C03F79",
    icon: "⭐",
  },
  {
    title: "Empresa Digital con IA",
    desc: "Para negocios que quieren modernizar su atención, seguimiento comercial y procesos internos.",
    includes: "CRM · Agentes IA · WhatsApp · Automatización · Capacitación",
    color: "#7AD1B9",
    icon: "🤖",
  },
  {
    title: "Lanzamiento Integral de Marca",
    desc: "Para nuevas empresas, emprendimientos o unidades comerciales que necesitan salir al mercado con fuerza.",
    includes: "Naming · Identidad · Web · Redes · Campaña · Kit comercial",
    color: "#E37B5E",
    icon: "🚀",
  },
  {
    title: "Proyecto Inmobiliario Digital",
    desc: "Para constructoras, inmobiliarias, urbanizaciones, lotizaciones y proyectos de vivienda.",
    includes: "Branding · Landing · Campañas · CRM · Video · Brochure",
    color: "#4653CE",
    icon: "🏢",
  },
  {
    title: "Autoridad Institucional y Reputación",
    desc: "Para empresas, fundaciones, gremios e instituciones que necesitan visibilidad pública y confianza.",
    includes: "Comunicación estratégica · Web · Video · Brochure · Contenido",
    color: "#2F54FB",
    icon: "🏛️",
  },
];

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, #f8f5ff 0%, #f0f4ff 100%)",
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
            Soluciones integrales
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Soluciones completas para crecer con estrategia
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            No vendemos tareas aisladas. Diseñamos soluciones completas para resolver
            problemas concretos de visibilidad, confianza, captación, ventas y reputación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.slice(0, 6).map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-7 rounded-3xl card-hover"
              style={{
                border: `1px solid ${sol.color}15`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${sol.color}12` }}
                >
                  {sol.icon}
                </div>
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ background: sol.color }}
                />
              </div>
              <h3
                className="text-lg font-bold mb-2 leading-snug"
                style={{ color: sol.color }}
              >
                {sol.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{sol.desc}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{sol.includes}</p>
            </motion.div>
          ))}
        </div>

        {/* 7th solution - wide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-5 bg-white p-7 rounded-3xl card-hover"
          style={{
            border: `1px solid ${solutions[6].color}15`,
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${solutions[6].color}12` }}
            >
              {solutions[6].icon}
            </div>
            <div className="flex-1">
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: solutions[6].color }}
              >
                {solutions[6].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {solutions[6].desc}
              </p>
            </div>
            <p className="text-xs text-gray-400 sm:max-w-[220px] leading-relaxed">
              {solutions[6].includes}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link href="/soluciones-integrales" className="btn-primary">
            Explorar soluciones integrales
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
