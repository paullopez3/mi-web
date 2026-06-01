"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const avServices = [
  "Producción cinematográfica",
  "Video corporativo",
  "Video publicitario",
  "Videos testimoniales",
  "Reels profesionales",
  "Fotografía corporativa",
  "Fotografía de producto",
  "Cobertura de eventos",
  "Cápsulas educativas",
  "Storytelling audiovisual de marca",
];

export default function AudiovisualSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad bg-gray-900 relative overflow-hidden">
      {/* Cinematic overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(135deg, rgba(192,63,121,0.3) 0%, rgba(70,83,206,0.3) 100%)",
        }}
      />

      {/* Film grain effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Cinematic visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Cinematic frame */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a0a0a 0%, #0d0520 100%)",
                border: "1px solid rgba(192, 63, 121, 0.2)",
                aspectRatio: "16/9",
              }}
            >
              {/* Cinema-style abstract visual */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 640 360"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <radialGradient id="filmGlow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#C03F79" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <filter id="filmBlur">
                    <feGaussianBlur stdDeviation="2" />
                  </filter>
                </defs>
                {/* Film strips */}
                <rect x="0" y="0" width="40" height="360" fill="rgba(0,0,0,0.6)" />
                <rect x="600" y="0" width="40" height="360" fill="rgba(0,0,0,0.6)" />
                {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((y) => (
                  <rect key={y} x="8" y={y + 8} width="24" height="24" rx="3" fill="rgba(255,255,255,0.05)" />
                ))}
                {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((y) => (
                  <rect key={y} x="608" y={y + 8} width="24" height="24" rx="3" fill="rgba(255,255,255,0.05)" />
                ))}
                {/* Lens flare */}
                <circle cx="320" cy="180" r="120" fill="url(#filmGlow)" />
                {/* Camera icon abstract */}
                <circle cx="320" cy="180" r="60" fill="none" stroke="rgba(192,63,121,0.4)" strokeWidth="1.5" />
                <circle cx="320" cy="180" r="40" fill="none" stroke="rgba(192,63,121,0.3)" strokeWidth="1" />
                <circle cx="320" cy="180" r="20" fill="rgba(192,63,121,0.2)" />
                <circle cx="320" cy="180" r="8" fill="rgba(192,63,121,0.6)" />
                {/* Light rays */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  return (
                    <line
                      key={i}
                      x1={320 + 20 * Math.cos(rad)}
                      y1={180 + 20 * Math.sin(rad)}
                      x2={320 + 100 * Math.cos(rad)}
                      y2={180 + 100 * Math.sin(rad)}
                      stroke="rgba(192,63,121,0.15)"
                      strokeWidth="0.5"
                    />
                  );
                })}
                {/* Clapper board elements */}
                <rect x="50" y="280" width="100" height="50" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="50" y="280" width="100" height="14" rx="4" fill="rgba(192,63,121,0.2)" />
                {[0, 12, 24, 36, 48, 60, 72, 84, 96].map((x) => (
                  <line key={x} x1={50 + x} y1={280} x2={50 + x + 6} y2={294} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                ))}
                <text x="100" y="308" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6" fontWeight="600">FICTICIA FILMS</text>
                <text x="100" y="318" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5">GRAFIZÉ AUDIOVISUAL</text>
                {/* Grid lines */}
                <line x1="40" y1="120" x2="600" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <line x1="40" y1="240" x2="600" y2="240" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <line x1="213" y1="0" x2="213" y2="360" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <line x1="427" y1="0" x2="427" y2="360" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
              </svg>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                  style={{
                    background: "rgba(192, 63, 121, 0.8)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 0 30px rgba(192, 63, 121, 0.5)",
                  }}
                >
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="absolute top-4 right-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: "rgba(192, 63, 121, 0.8)",
                    color: "white",
                  }}
                >
                  Ficticia Films
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="section-label mb-6"
              style={{
                background: "rgba(192, 63, 121, 0.15)",
                color: "#C03F79",
                borderColor: "rgba(192, 63, 121, 0.3)",
              }}
            >
              Producción audiovisual
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Contenido audiovisual de alto impacto,{" "}
              <span style={{ color: "#C03F79" }}>con calidad de cine.</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              A través de{" "}
              <span className="text-white font-semibold">Ficticia Films</span>, Grafizé
              integra producción cinematográfica, video corporativo, video publicitario,
              fotografía y storytelling visual para elevar la percepción de valor de
              marcas, empresas e instituciones.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              No se trata solo de hacer videos. Se trata de contar historias que
              construyen confianza, emoción, recordación y autoridad.
            </p>

            {/* Services list */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {avServices.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#C03F79" }}
                  />
                  <span className="text-white/70 text-sm">{service}</span>
                </div>
              ))}
            </div>

            <Link href="/servicios" className="btn-primary" style={{ background: "#C03F79" }}>
              Crear contenido audiovisual
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
