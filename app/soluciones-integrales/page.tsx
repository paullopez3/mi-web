import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones Integrales | Grafizé",
  description:
    "Soluciones completas de crecimiento digital para empresas: presencia, captación, marca personal, IA, lanzamientos y más.",
};

const solutions = [
  {
    number: "01",
    title: "Presencia Digital Profesional",
    subtitle: "Para empresas que necesitan verse confiables, modernas y preparadas para captar clientes.",
    color: "#490490",
    emoji: "🌐",
    description:
      "Tu empresa tiene valor. Esta solución asegura que el mundo digital lo demuestre. Creamos una presencia coherente, profesional y orientada a generar confianza y contactos comerciales.",
    includes: [
      "Sitio web corporativo",
      "Identidad básica de marca",
      "Textos comerciales y SEO",
      "Google Business Profile",
      "WhatsApp Business configurado",
      "Formularios de contacto",
      "Brochure PDF",
      "Correo corporativo",
    ],
    for: "Empresas consolidadas, nuevas marcas o negocios con presencia digital desactualizada.",
  },
  {
    number: "02",
    title: "Sistema de Captación de Clientes",
    subtitle: "Para empresas que necesitan generar contactos comerciales medibles.",
    color: "#365FE8",
    emoji: "🎯",
    description:
      "Diseñamos y activamos un sistema completo para generar leads, consultas, reservas o prospectos. No solo campañas: un embudo completo con seguimiento y medición.",
    includes: [
      "Landing page optimizada",
      "Campañas Meta Ads y/o Google Ads",
      "Copywriting y creatividades",
      "CRM para gestión de leads",
      "WhatsApp Business con respuestas automáticas",
      "Flujos de seguimiento",
      "Reportes mensuales",
    ],
    for: "Empresas que ya tienen presencia pero quieren generar oportunidades comerciales medibles.",
  },
  {
    number: "03",
    title: "Marca Personal de Autoridad",
    subtitle: "Para profesionales que quieren posicionarse como referentes en su sector.",
    color: "#C03F79",
    emoji: "⭐",
    description:
      "Construimos tu presencia pública con estrategia: narrativa, imagen, canales y contenido para que seas reconocido como la referencia en tu área profesional.",
    includes: [
      "Diagnóstico de marca personal",
      "Posicionamiento y narrativa profesional",
      "Imagen pública optimizada",
      "Perfil de LinkedIn estratégico",
      "Sitio web personal",
      "Contenidos de autoridad",
      "Fotografía profesional",
      "Video de presentación",
      "Reputación digital",
    ],
    for: "Profesionales, empresarios, consultores, médicos, abogados, docentes y directivos.",
  },
  {
    number: "04",
    title: "Empresa Digital con IA",
    subtitle: "Para negocios que quieren modernizar su atención y seguimiento comercial.",
    color: "#7AD1B9",
    emoji: "🤖",
    description:
      "Implementamos las herramientas digitales e inteligencia artificial que tu empresa necesita para no perder oportunidades, responder mejor y vender más eficientemente.",
    includes: [
      "Diagnóstico digital",
      "CRM comercial configurado",
      "WhatsApp Business profesional",
      "Agente IA de ventas",
      "Agente IA de atención",
      "Scripts comerciales",
      "Automatización de respuestas",
      "Dashboard de gestión",
      "Capacitación al equipo",
    ],
    for: "Empresas con equipo comercial que quieren escalar su capacidad de atención y seguimiento.",
  },
  {
    number: "05",
    title: "Lanzamiento Integral de Marca o Negocio",
    subtitle: "Para nuevas empresas o emprendimientos que necesitan salir al mercado con fuerza.",
    color: "#E37B5E",
    emoji: "🚀",
    description:
      "Te acompañamos desde el modelo de negocio hasta la presencia digital completa. Un lanzamiento estructurado, con identidad, comunicación y canales listos para vender.",
    includes: [
      "Modelo de negocio y propuesta de valor",
      "Naming",
      "Identidad visual completa",
      "Sitio web",
      "Redes sociales iniciales",
      "Campaña de lanzamiento",
      "Kit comercial digital",
      "WhatsApp Business",
    ],
    for: "Nuevas empresas, emprendimientos, productos o unidades comerciales que van al mercado.",
  },
  {
    number: "06",
    title: "Proyecto Inmobiliario Digital",
    subtitle: "Para inmobiliarias, constructoras, urbanizaciones y proyectos de vivienda.",
    color: "#4653CE",
    emoji: "🏢",
    description:
      "Presentamos tu proyecto con el nivel visual y comercial que merece. Desde el branding hasta el CRM, todo orientado a captar prospectos calificados y cerrar ventas.",
    includes: [
      "Branding del proyecto",
      "Landing page del proyecto",
      "Brochure digital",
      "Campañas de leads",
      "CRM inmobiliario",
      "Contenidos visuales",
      "Video promocional",
      "Mejora de renders",
      "Seguimiento comercial automatizado",
    ],
    for: "Constructoras, inmobiliarias, urbanizaciones, lotizaciones y proyectos de vivienda.",
  },
  {
    number: "07",
    title: "Autoridad Institucional y Reputación",
    subtitle: "Para empresas, instituciones y marcas que necesitan visibilidad pública y confianza.",
    color: "#2F54FB",
    emoji: "🏛️",
    description:
      "Construimos la presencia pública e institucional que tu organización necesita para ser reconocida, respetada y elegida. Comunicación estratégica con vocería clara.",
    includes: [
      "Comunicación estratégica institucional",
      "Sitio web institucional",
      "Video corporativo",
      "Brochure ejecutivo",
      "Presentación institucional",
      "Contenido de autoridad",
      "Estrategia de vocería",
    ],
    for: "Empresas, fundaciones, gremios, asociaciones, instituciones culturales y marcas públicas.",
  },
];

export default function SolucionesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0d0520 0%, #1a0840 40%, #0a1a3a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(122,209,185,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(122,209,185,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-6">Soluciones integrales</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluciones integrales para negocios que quieren crecer, vender mejor y digitalizarse con inteligencia.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Cada solución combina estrategia, creatividad, tecnología, contenidos, publicidad e inteligencia artificial según el objetivo de tu empresa.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {solutions.map((sol) => (
            <div
              key={sol.number}
              className="rounded-3xl overflow-hidden"
              style={{
                border: `1px solid ${sol.color}18`,
                background: `${sol.color}04`,
              }}
            >
              <div className="p-7 md:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ background: `${sol.color}15` }}
                      >
                        {sol.emoji}
                      </div>
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: sol.color }}
                        >
                          Solución {sol.number}
                        </span>
                        <h2
                          className="text-xl md:text-2xl font-bold text-gray-900 mt-0.5"
                        >
                          {sol.title}
                        </h2>
                      </div>
                    </div>
                    <p
                      className="text-base font-medium mb-3"
                      style={{ color: sol.color }}
                    >
                      {sol.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {sol.description}
                    </p>
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        background: `${sol.color}08`,
                        border: `1px solid ${sol.color}15`,
                      }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                        Ideal para
                      </p>
                      <p className="text-sm text-gray-700">{sol.for}</p>
                    </div>
                  </div>

                  {/* Right: Includes */}
                  <div className="lg:w-72">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                      Esta solución incluye
                    </p>
                    <div className="space-y-2">
                      {sol.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: sol.color }}
                          />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, #0d0520 0%, #0a1a3a 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Elige la solución que necesita tu empresa o solicita un diagnóstico para definirla.
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Si no estás seguro de cuál necesitas, te ayudamos a identificarlo.
          </p>
          <Link href="/diagnostico" className="btn-teal">
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
