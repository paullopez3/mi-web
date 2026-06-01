"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const systemNodes = [
  { label: "Estrategia", color: "#490490", angle: 0 },
  { label: "Marca", color: "#C03F79", angle: 60 },
  { label: "Web", color: "#365FE8", angle: 120 },
  { label: "Campañas", color: "#E37B5E", angle: 180 },
  { label: "CRM & IA", color: "#7AD1B9", angle: 240 },
  { label: "Contenido", color: "#4653CE", angle: 300 },
];

export default function WhatIsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{
        background: "linear-gradient(135deg, #0d0520 0%, #1a0840 50%, #0a1a3a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Right: System diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* SVG diagram */}
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {/* Outer ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="110"
                  fill="none"
                  stroke="rgba(122,209,185,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                {/* Connection lines from center */}
                {systemNodes.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = 150 + 110 * Math.cos(rad);
                  const y = 150 + 110 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1="150"
                      y1="150"
                      x2={x}
                      y2={y}
                      stroke={node.color}
                      strokeWidth="1"
                      strokeOpacity="0.4"
                    />
                  );
                })}
                {/* Center node */}
                <circle cx="150" cy="150" r="28" fill="#490490" />
                <circle
                  cx="150"
                  cy="150"
                  r="36"
                  fill="none"
                  stroke="#490490"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                >
                  <animate
                    attributeName="r"
                    values="36;44;36"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.1;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="150"
                  y="146"
                  textAnchor="middle"
                  fill="white"
                  fontSize="7"
                  fontWeight="700"
                  letterSpacing="0.5"
                >
                  GRAFIZÉ
                </text>
                <text
                  x="150"
                  y="157"
                  textAnchor="middle"
                  fill="rgba(122,209,185,0.8)"
                  fontSize="5.5"
                  letterSpacing="0.3"
                >
                  CRECIMIENTO
                </text>
                {/* Outer nodes */}
                {systemNodes.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = 150 + 110 * Math.cos(rad);
                  const y = 150 + 110 * Math.sin(rad);
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="18" fill={node.color} fillOpacity="0.15" />
                      <circle cx={x} cy={y} r="12" fill={node.color} fillOpacity="0.8" />
                      <text
                        x={x}
                        y={y + 28}
                        textAnchor="middle"
                        fill="white"
                        fontSize="7"
                        fontWeight="600"
                        opacity="0.9"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="section-label">
              ¿Qué es Grafizé?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              No hacemos piezas sueltas.{" "}
              <span style={{ color: "#7AD1B9" }}>
                Construimos sistemas de crecimiento.
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Grafizé es una agencia de crecimiento digital que integra estrategia, marca,
              marketing, publicidad, tecnología, contenidos e inteligencia artificial para
              convertir negocios en marcas visibles, vendibles y escalables.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Ayudamos a empresas, profesionales e instituciones a verse mejor, comunicar
              mejor, captar más clientes y ordenar sus canales digitales de venta.
            </p>

            <div
              className="p-5 rounded-2xl mb-6"
              style={{
                background: "rgba(73, 4, 144, 0.2)",
                border: "1px solid rgba(122, 209, 185, 0.15)",
              }}
            >
              <div className="space-y-2">
                {[
                  "No somos una agencia tradicional de diseño.",
                  "No hacemos solamente páginas web.",
                  "No publicamos contenido por publicar.",
                  "No vendemos piezas aisladas sin estrategia.",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-2">
                    <span style={{ color: "#C03F79" }}>→</span>
                    <p className="text-white/80 text-sm">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-lg font-semibold"
              style={{ color: "#7AD1B9" }}
            >
              Diseñamos presencia, comunicación, captación y venta.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
