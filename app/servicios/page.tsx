import type { Metadata } from "next";
import Link from "next/link";
import ServiceAreaAccordion from "@/components/pages/ServiceAreaAccordion";

export const metadata: Metadata = {
  title: "Servicios | Grafizé – Agencia de Crecimiento Digital",
  description:
    "Estrategia, branding, marketing, publicidad, presencia digital, CRM, automatización, inteligencia artificial y producción audiovisual para empresas que quieren crecer.",
};

const serviceAreas = [
  {
    number: "01",
    title: "Estrategia de crecimiento digital",
    color: "#490490",
    services: [
      "Diagnóstico integral de negocio",
      "Auditoría de presencia digital",
      "Propuesta de valor",
      "Posicionamiento de marca",
      "Estrategia comercial",
      "Estrategia de marketing",
      "Embudos de venta",
      "Plan de crecimiento digital",
    ],
  },
  {
    number: "02",
    title: "Branding e identidad corporativa",
    color: "#C03F79",
    services: [
      "Naming",
      "Logotipo",
      "Identidad visual",
      "Manual de marca",
      "Tono de comunicación",
      "Storytelling",
      "Brochure corporativo",
      "Presentación institucional",
      "Rebranding",
    ],
  },
  {
    number: "03",
    title: "Marca personal de autoridad",
    color: "#490490",
    services: [
      "Diagnóstico de marca personal",
      "Posicionamiento profesional",
      "Narrativa personal",
      "Biografía ejecutiva",
      "Optimización de LinkedIn",
      "Sitio web personal",
      "Fotografía profesional",
      "Videos de autoridad",
      "Plan de contenidos",
      "Reputación digital",
    ],
  },
  {
    number: "04",
    title: "Presencia digital profesional",
    color: "#365FE8",
    services: [
      "Sitios web corporativos",
      "Landing pages",
      "Tiendas en línea",
      "Catálogos digitales",
      "SEO básico",
      "Google Business Profile",
      "WhatsApp Business",
      "Correos corporativos",
      "Hosting y mantenimiento",
    ],
  },
  {
    number: "05",
    title: "Marketing, publicidad y captación",
    color: "#E37B5E",
    services: [
      "Meta Ads (Facebook e Instagram)",
      "Google Ads",
      "Campañas de leads",
      "Campañas de lanzamiento",
      "Creatividades publicitarias",
      "Copywriting",
      "Landing pages de conversión",
      "Reportes y optimización",
    ],
  },
  {
    number: "06",
    title: "Redes sociales y contenido estratégico",
    color: "#C03F79",
    services: [
      "Estrategia de contenidos",
      "Calendario editorial",
      "Diseño de publicaciones",
      "Reels",
      "Carruseles",
      "Copys y textos",
      "Contenido educativo",
      "Contenido promocional",
      "Contenido de autoridad",
    ],
  },
  {
    number: "07",
    title: "Producción de cine, audiovisual y storytelling visual",
    color: "#4653CE",
    services: [
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
    ],
  },
  {
    number: "08",
    title: "CRM, automatización e inteligencia artificial",
    color: "#7AD1B9",
    services: [
      "CRM comercial",
      "WhatsApp Business profesional",
      "Agentes IA de ventas",
      "Agentes IA de atención",
      "Automatización de respuestas",
      "Scripts comerciales",
      "Flujos de seguimiento",
      "Dashboards de gestión",
      "Capacitación del equipo",
    ],
  },
  {
    number: "09",
    title: "Transformación digital",
    color: "#2F54FB",
    services: [
      "Diagnóstico de madurez digital",
      "Digitalización de procesos",
      "Automatización de flujos",
      "Organización de bases de datos",
      "Implementación de herramientas",
      "Capacitación en IA",
      "Plan de transformación digital",
    ],
  },
  {
    number: "10",
    title: "Comunicación corporativa e institucional",
    color: "#490490",
    services: [
      "Comunicación interna",
      "Comunicación externa",
      "Redacción institucional",
      "Comunicados de prensa",
      "Discursos y presentaciones",
      "Manual de tono y estilo",
      "Vocería",
      "Comunicación de crisis",
    ],
  },
  {
    number: "11",
    title: "Servicios editoriales y contenidos especializados",
    color: "#E37B5E",
    services: [
      "Redacción de contenidos",
      "Corrección de estilo",
      "Edición",
      "Brochures",
      "Catálogos",
      "Libros institucionales",
      "Memorias",
      "Informes visuales",
      "Publicaciones",
      "Impresión",
    ],
  },
  {
    number: "12",
    title: "Capacitación empresarial",
    color: "#365FE8",
    services: [
      "Talleres de IA para empresas",
      "Talleres de marketing digital",
      "Marca personal",
      "Ventas digitales",
      "Transformación digital",
      "Comunicación efectiva",
      "Atención al cliente digital",
    ],
  },
];

export default function ServiciosPage() {
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
          <div className="section-label mb-6">Servicios</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Servicios para construir marcas, captar clientes y digitalizar empresas.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Integramos estrategia, diseño, marketing, publicidad, contenidos,
            tecnología e inteligencia artificial para resolver problemas reales de crecimiento.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreaAccordion areas={serviceAreas} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(73,4,144,0.06), rgba(54,95,232,0.06))",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿No sabes qué servicio necesita tu empresa?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Empecemos por un diagnóstico. Te ayudamos a identificar qué necesitas y cómo hacerlo.
          </p>
          <Link href="/diagnostico" className="btn-primary text-base px-8 py-4">
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
