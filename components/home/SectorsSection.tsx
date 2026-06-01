"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const sectors = [
  {
    title: "Educación",
    desc: "Colegios, institutos, academias y centros de formación. Captación de estudiantes, reputación y comunicación institucional.",
    color: "#365FE8",
    emoji: "🎓",
    tags: ["Campañas de matrícula", "CRM de admisiones", "Web institucional"],
  },
  {
    title: "Salud y bienestar",
    desc: "Clínicas, consultorios y centros de bienestar. Confianza, autoridad profesional y captación de citas.",
    color: "#7AD1B9",
    emoji: "⚕️",
    tags: ["Web profesional", "Campañas de citas", "Atención automatizada"],
  },
  {
    title: "Servicios profesionales",
    desc: "Abogados, arquitectos, consultores y asesores. Conversión de experiencia en autoridad y oportunidades.",
    color: "#490490",
    emoji: "💼",
    tags: ["Marca personal", "LinkedIn", "Videos de autoridad"],
  },
  {
    title: "Inmobiliaria y construcción",
    desc: "Constructoras, inmobiliarias y proyectos de vivienda. Presentación de proyectos, captación de prospectos y CRM.",
    color: "#E37B5E",
    emoji: "🏢",
    tags: ["Landing de proyecto", "Campañas de leads", "CRM inmobiliario"],
  },
  {
    title: "Turismo y gastronomía",
    desc: "Hoteles, restaurantes y agencias turísticas. Presencia digital, captación de reservas y contenido visual.",
    color: "#C03F79",
    emoji: "✈️",
    tags: ["Fotografía y video", "Reservas online", "Redes sociales"],
  },
  {
    title: "Cultura e instituciones",
    desc: "Editoriales, productoras, festivales e instituciones culturales. Comunicación con valor simbólico y presencia profesional.",
    color: "#4653CE",
    emoji: "🎭",
    tags: ["Comunicación institucional", "Video", "Publicaciones"],
  },
];

export default function SectorsSection() {
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
            Sectores
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Trabajamos donde la imagen, la confianza y la captación son decisivas.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Grafizé se enfoca en sectores con potencial de crecimiento, necesidad de
            reputación y capacidad de inversión en soluciones digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-3xl card-hover"
              style={{
                background: `${sector.color}06`,
                border: `1px solid ${sector.color}15`,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${sector.color}15` }}
                >
                  {sector.emoji}
                </div>
                <div>
                  <h3
                    className="font-bold text-gray-900 text-base leading-snug"
                  >
                    {sector.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {sector.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {sector.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${sector.color}12`,
                      color: sector.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link href="/sectores" className="btn-outline">
            Ver todos los sectores
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
