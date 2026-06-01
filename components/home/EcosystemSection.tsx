"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  {
    name: "Ágora-EC S. A.",
    role: "Empresa matriz",
    desc: "Figura legal desde la cual se articulan proyectos, contratos y servicios.",
    color: "#5D5D5D",
    isMatrix: true,
  },
  {
    name: "Grafizé",
    role: "Crecimiento digital",
    desc: "Marketing, publicidad, marca, tecnología e inteligencia artificial.",
    color: "#490490",
  },
  {
    name: "Ficticia Films",
    role: "Producción audiovisual",
    desc: "Cinematografía, video, fotografía y storytelling visual de marca.",
    color: "#C03F79",
  },
  {
    name: "Premisa Editorial",
    role: "Contenidos editoriales",
    desc: "Redacción, edición, publicaciones, brochures, libros e impresión.",
    color: "#E37B5E",
  },
  {
    name: "Cátedra Digital",
    role: "Capacitación empresarial",
    desc: "Talleres de IA, marketing, ventas, transformación digital y marca personal.",
    color: "#365FE8",
  },
];

export default function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{
        background: "linear-gradient(135deg, #0a0118 0%, #0d1840 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label">
            Ecosistema de marcas
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Más que una agencia: un ecosistema para construir, comunicar y escalar marcas.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Grafizé forma parte de un ecosistema articulado por Ágora-EC S. A., que integra
            estrategia, creatividad, tecnología, audiovisual, contenidos editoriales y formación.
          </p>
        </motion.div>

        {/* Ecosystem diagram */}
        <div className="flex flex-col items-center">
          {/* Matrix node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm mb-6"
          >
            <div
              className="p-6 rounded-2xl text-center relative"
              style={{
                background: "rgba(93, 93, 93, 0.15)",
                border: "1px solid rgba(93, 93, 93, 0.3)",
              }}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                Empresa matriz
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Ágora-EC S. A.</h3>
              <p className="text-white/60 text-sm">
                Figura legal · Contratos · Proyectos integrados
              </p>
            </div>
          </motion.div>

          {/* Connector line */}
          <div className="w-px h-8 bg-white/10" />

          {/* Brand nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-2">
            {brands.slice(1).map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                className="relative"
              >
                {/* Connector line at top */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4"
                  style={{ background: brand.color + "60" }}
                />

                <div
                  className="p-5 rounded-2xl text-center h-full"
                  style={{
                    background: `${brand.color}12`,
                    border: `1px solid ${brand.color}30`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto flex items-center justify-center mb-3"
                    style={{ background: brand.color + "25" }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: brand.color }}
                    />
                  </div>
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: brand.color }}
                  >
                    {brand.role}
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2">{brand.name}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{brand.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
