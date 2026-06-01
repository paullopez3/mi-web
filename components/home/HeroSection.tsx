"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

function NodeGraph() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7AD1B9" stopOpacity="1" />
          <stop offset="100%" stopColor="#7AD1B9" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Connection lines */}
      <line x1="400" y1="300" x2="150" y2="120" stroke="#7AD1B9" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="400" y1="300" x2="650" y2="120" stroke="#365FE8" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="400" y1="300" x2="100" y2="400" stroke="#C03F79" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="400" y1="300" x2="700" y2="420" stroke="#7AD1B9" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="400" y1="300" x2="300" y2="500" stroke="#365FE8" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="400" y1="300" x2="550" y2="480" stroke="#C03F79" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="150" y1="120" x2="650" y2="120" stroke="#7AD1B9" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="100" y1="400" x2="300" y2="500" stroke="#365FE8" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="700" y1="420" x2="550" y2="480" stroke="#7AD1B9" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="150" y1="120" x2="100" y2="400" stroke="#C03F79" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="650" y1="120" x2="700" y2="420" stroke="#365FE8" strokeWidth="0.3" strokeOpacity="0.2" />
      {/* Data flow particles */}
      <circle r="2" fill="#7AD1B9">
        <animateMotion dur="4s" repeatCount="indefinite" path="M400,300 L150,120" />
      </circle>
      <circle r="2" fill="#365FE8">
        <animateMotion dur="5s" repeatCount="indefinite" path="M400,300 L650,120" />
      </circle>
      <circle r="1.5" fill="#C03F79">
        <animateMotion dur="6s" repeatCount="indefinite" path="M400,300 L700,420" />
      </circle>
      <circle r="1.5" fill="#7AD1B9">
        <animateMotion dur="4.5s" repeatCount="indefinite" path="M400,300 L300,500" />
      </circle>
      {/* Nodes */}
      <circle cx="400" cy="300" r="8" fill="#7AD1B9" filter="url(#glow)" />
      <circle cx="400" cy="300" r="16" fill="none" stroke="#7AD1B9" strokeWidth="1" strokeOpacity="0.3">
        <animate attributeName="r" values="16;24;16" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="120" r="5" fill="#7AD1B9" filter="url(#glow)" />
      <circle cx="650" cy="120" r="5" fill="#365FE8" filter="url(#glow)" />
      <circle cx="100" cy="400" r="4" fill="#C03F79" filter="url(#glow)" />
      <circle cx="700" cy="420" r="4" fill="#7AD1B9" filter="url(#glow)" />
      <circle cx="300" cy="500" r="4" fill="#365FE8" filter="url(#glow)" />
      <circle cx="550" cy="480" r="4" fill="#C03F79" filter="url(#glow)" />
      <circle cx="220" cy="60" r="3" fill="#7AD1B9" opacity="0.5" />
      <circle cx="580" cy="60" r="3" fill="#365FE8" opacity="0.5" />
      <circle cx="760" cy="250" r="3" fill="#7AD1B9" opacity="0.5" />
      <circle cx="40" cy="250" r="3" fill="#C03F79" opacity="0.5" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, #0d0520 0%, #1a0840 30%, #0e1a4a 70%, #0a1230 100%)",
      }}
    >
      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #490490 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #365FE8 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #C03F79 0%, transparent 70%)",
          animation: "float 7s ease-in-out infinite 4s",
        }}
      />

      {/* Node graph overlay */}
      <NodeGraph />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(122,209,185,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(122,209,185,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="section-label mb-8 inline-flex">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-glow"
              style={{ background: "#7AD1B9" }}
            />
            Agencia de Crecimiento Digital · Ecuador
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Estrategia, marketing, publicidad,{" "}
            <span
              className="relative"
              style={{
                background: "linear-gradient(135deg, #7AD1B9, #365FE8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              tecnología e inteligencia artificial
            </span>{" "}
            para empresas que quieren crecer.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl leading-relaxed">
            En Grafizé convertimos negocios en marcas visibles, vendibles y escalables
            mediante estrategia, branding, campañas, contenidos, automatización,
            transformación digital e inteligencia artificial.
          </p>

          {/* Impact phrase */}
          <div
            className="inline-block mb-10 px-5 py-3 rounded-xl border"
            style={{
              background: "rgba(73, 4, 144, 0.3)",
              borderColor: "rgba(122, 209, 185, 0.2)",
            }}
          >
            <p
              className="text-base md:text-lg font-semibold tracking-wide"
              style={{ color: "#7AD1B9" }}
            >
              Marcas visibles. Negocios vendibles. Empresas escalables.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/diagnostico" className="btn-teal text-base px-7 py-4">
              Solicitar diagnóstico
            </Link>
            <Link href="/soluciones-integrales" className="btn-secondary text-base px-7 py-4">
              Ver soluciones integrales
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10">
            {[
              { value: "7", label: "Áreas de servicio integradas" },
              { value: "5", label: "Marcas del ecosistema" },
              { value: "360°", label: "Estrategia de crecimiento digital" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "#7AD1B9" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-white/50 mt-1 max-w-[160px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Descubre más</span>
        <div
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div
            className="w-1 h-2 rounded-full bg-white/60"
            style={{ animation: "float 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
