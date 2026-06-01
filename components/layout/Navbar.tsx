"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Soluciones integrales", href: "/soluciones-integrales" },
  { label: "Sectores", href: "/sectores" },
  { label: "Ecosistema", href: "/ecosistema" },
  { label: "Recursos", href: "/recursos" },
  { label: "Diagnóstico", href: "/diagnostico" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0520]/95 backdrop-blur-md shadow-lg shadow-[#490490]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo%20Grafize%20vectorial%20color%20blanco.svg"
              alt="Grafizé"
              width={140}
              height={36}
              className="h-8 md:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-150 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden lg:block">
            <Link
              href="/diagnostico"
              className="btn-primary text-sm px-5 py-2.5"
              style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
            >
              Solicitar diagnóstico
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-white"
            aria-label="Abrir menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#0d0520]/98 backdrop-blur-xl" />
        <nav className="relative flex flex-col gap-2 p-6 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-lg text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium border border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/diagnostico"
            onClick={() => setMobileOpen(false)}
            className="mt-4 btn-primary text-center"
          >
            Solicitar diagnóstico
          </Link>
        </nav>
      </div>
    </header>
  );
}
