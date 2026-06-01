import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecosistema | Grafizé – Ágora-EC S. A.",
  description:
    "Grafizé forma parte del ecosistema de Ágora-EC S. A., que integra estrategia, marketing, audiovisual, editorial y capacitación.",
};

const brands = [
  {
    name: "Grafizé",
    role: "Agencia de crecimiento digital",
    color: "#490490",
    emoji: "⚡",
    description:
      "Unidad principal de marketing, publicidad, marca, estrategia, tecnología e inteligencia artificial. Grafizé es el motor de crecimiento digital del ecosistema.",
    capabilities: [
      "Estrategia digital",
      "Branding e identidad",
      "Marketing y publicidad",
      "Presencia web",
      "CRM y automatización",
      "Inteligencia artificial",
      "Marca personal",
      "Transformación digital",
    ],
  },
  {
    name: "Ficticia Films",
    role: "Producción cinematográfica y audiovisual",
    color: "#C03F79",
    emoji: "🎬",
    description:
      "Unidad audiovisual para producción cinematográfica, video corporativo, video publicitario, fotografía, storytelling visual y contenidos de alto impacto para marcas que quieren ser recordadas.",
    capabilities: [
      "Producción cinematográfica",
      "Video corporativo",
      "Video publicitario",
      "Fotografía profesional",
      "Reels y contenido",
      "Testimoniales",
      "Storytelling de marca",
      "Cobertura de eventos",
    ],
  },
  {
    name: "Premisa Editorial",
    role: "Contenidos editoriales e impresión",
    color: "#E37B5E",
    emoji: "📖",
    description:
      "Unidad editorial para redacción, corrección, edición, publicaciones, catálogos, brochures, libros institucionales, informes visuales e impresión de alta calidad.",
    capabilities: [
      "Redacción de contenidos",
      "Corrección de estilo",
      "Edición",
      "Brochures",
      "Catálogos",
      "Libros institucionales",
      "Informes visuales",
      "Impresión",
    ],
  },
  {
    name: "Cátedra Digital",
    role: "Capacitación empresarial y formación",
    color: "#365FE8",
    emoji: "🎓",
    description:
      "Unidad de capacitación para empresas y profesionales en marketing digital, inteligencia artificial, transformación digital, ventas, comunicación y marca personal.",
    capabilities: [
      "Talleres de IA",
      "Marketing digital",
      "Marca personal",
      "Ventas digitales",
      "Transformación digital",
      "Comunicación efectiva",
      "Atención digital",
    ],
  },
];

export default function EcosistemaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0118 0%, #0d1840 60%, #0a0118 100%)",
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
          <div className="section-label mb-6">Ecosistema</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Un ecosistema para construir, comunicar, producir, formar y escalar marcas.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Grafizé forma parte del ecosistema de Ágora-EC S. A., una estructura que permite integrar estrategia, marketing, publicidad, transformación digital, producción audiovisual, servicios editoriales y capacitación.
          </p>
        </div>
      </section>

      {/* Matrix */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Articulado por Ágora-EC S. A.
            </h2>
            <p className="text-gray-600">
              Empresa matriz y figura legal desde la cual se articulan proyectos, contratos y servicios.
            </p>
          </div>

          {/* Matrix box */}
          <div
            className="p-6 md:p-8 rounded-3xl text-center mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(93,93,93,0.06), rgba(93,93,93,0.03))",
              border: "1px solid rgba(93, 93, 93, 0.15)",
            }}
          >
            <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4" style={{ background: "rgba(93,93,93,0.1)" }}>
              🏛️
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ágora-EC S. A.</h3>
            <p className="text-gray-500">
              Empresa matriz · Figura legal · Contratos · Proyectos integrados · Facturación
            </p>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-gray-200" />
              <svg className="w-4 h-4 text-gray-300 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 16l-6-6h12z" />
              </svg>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mb-8 uppercase tracking-wider font-semibold">
            Unidades especializadas
          </p>
        </div>

        {/* Brand cards */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="p-7 rounded-3xl"
                style={{
                  background: `${brand.color}05`,
                  border: `1px solid ${brand.color}18`,
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${brand.color}15` }}
                  >
                    {brand.emoji}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: brand.color }}
                    >
                      {brand.name}
                    </h3>
                    <p className="text-sm text-gray-500">{brand.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {brand.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {brand.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${brand.color}10`,
                        color: brand.color,
                      }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, #0a0118 0%, #0d1840 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Una sola estrategia. Múltiples capacidades. Más posibilidades de crecimiento.
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Accede a todo el ecosistema desde un solo punto de contacto.
          </p>
          <Link href="/diagnostico" className="btn-teal">
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
