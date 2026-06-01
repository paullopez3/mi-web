import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos | Grafizé – Ideas y estrategias para crecer",
  description:
    "Artículos, guías y estrategias sobre marketing digital, inteligencia artificial, transformación digital, marca personal y crecimiento empresarial.",
};

const categories = [
  { label: "Marketing y publicidad", color: "#490490" },
  { label: "Inteligencia artificial", color: "#365FE8" },
  { label: "Transformación digital", color: "#2F54FB" },
  { label: "Marca personal", color: "#C03F79" },
  { label: "Sitios web y conversión", color: "#4653CE" },
  { label: "Inmobiliaria", color: "#E37B5E" },
  { label: "Educación digital", color: "#365FE8" },
  { label: "Comunicación corporativa", color: "#490490" },
  { label: "Producción audiovisual", color: "#C03F79" },
];

const articles = [
  {
    title: "Cómo saber si tu empresa necesita una transformación digital",
    excerpt:
      "La transformación digital no es solo tecnología. Es una forma nueva de operar, comunicar y vender. Te damos las señales que indican que es momento de actuar.",
    category: "Transformación digital",
    color: "#2F54FB",
    readTime: "6 min",
    featured: true,
  },
  {
    title: "Por qué una página web no basta para vender más",
    excerpt:
      "Tener web no es tener presencia digital. Una web efectiva es parte de un sistema. Te explicamos qué más necesitas para convertir visitas en clientes.",
    category: "Sitios web y conversión",
    color: "#4653CE",
    readTime: "5 min",
    featured: true,
  },
  {
    title: "Qué debe tener una campaña digital para captar clientes reales",
    excerpt:
      "Las campañas que funcionan no son las que más gastan. Son las que tienen estrategia, mensaje correcto, audiencia definida y embudo de conversión.",
    category: "Marketing y publicidad",
    color: "#490490",
    readTime: "7 min",
    featured: false,
  },
  {
    title: "Cómo usar inteligencia artificial en ventas y atención al cliente",
    excerpt:
      "Los agentes IA no reemplazan a tu equipo. Lo potencian. Te mostramos cómo implementar IA en tu proceso comercial sin complicaciones.",
    category: "Inteligencia artificial",
    color: "#365FE8",
    readTime: "8 min",
    featured: false,
  },
  {
    title: "Marca personal: por qué los profesionales también necesitan estrategia",
    excerpt:
      "Tu nombre es tu marca. Si no la cuidas, el mercado la define por ti. Te explicamos cómo construir autoridad profesional con estrategia.",
    category: "Marca personal",
    color: "#C03F79",
    readTime: "6 min",
    featured: false,
  },
  {
    title: "Marketing digital para inmobiliarias: cómo captar prospectos de calidad",
    excerpt:
      "El cliente inmobiliario investiga durante meses antes de contactar. Una estrategia digital bien ejecutada te pone en su lista corta desde el inicio.",
    category: "Inmobiliaria",
    color: "#E37B5E",
    readTime: "7 min",
    featured: false,
  },
  {
    title: "Campañas de matrícula: cómo captar estudiantes para colegios e institutos",
    excerpt:
      "La temporada de matrículas es corta y competitiva. Estas son las estrategias digitales que marcan la diferencia en captación educativa.",
    category: "Educación digital",
    color: "#365FE8",
    readTime: "6 min",
    featured: false,
  },
  {
    title: "Cómo convertir WhatsApp Business en una herramienta comercial",
    excerpt:
      "WhatsApp es el canal más usado en Ecuador. Pero pocos lo usan estratégicamente. Te mostramos cómo transformarlo en una máquina de ventas.",
    category: "Marketing y publicidad",
    color: "#490490",
    readTime: "5 min",
    featured: false,
  },
  {
    title: "Qué es un CRM y por qué tu empresa lo necesita",
    excerpt:
      "Si todavía gestionas tus contactos en Excel o en la memoria, estás perdiendo oportunidades. Un CRM bien implementado cambia las reglas del juego.",
    category: "Transformación digital",
    color: "#2F54FB",
    readTime: "5 min",
    featured: false,
  },
  {
    title: "Producción audiovisual con calidad de cine para marcas que quieren ser recordadas",
    excerpt:
      "El video de tu marca no es solo contenido. Es la primera impresión que muchos tendrán de ti. La calidad visual construye o destruye percepción de valor.",
    category: "Producción audiovisual",
    color: "#C03F79",
    readTime: "6 min",
    featured: false,
  },
];

export default function RecursosPage() {
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
          <div className="section-label mb-6">Recursos</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ideas, estrategias y herramientas para empresas que quieren crecer.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Marketing digital, inteligencia artificial, transformación digital, marca personal, estrategia y crecimiento.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: "#490490" }}>
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.label}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {articles.filter((a) => a.featured).map((article) => (
              <div
                key={article.title}
                className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: `1px solid ${article.color}18`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                {/* Article image placeholder */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${article.color}20 0%, ${article.color}10 100%)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-6xl opacity-20"
                      style={{ color: article.color }}
                    >
                      ✦
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: article.color,
                        color: "white",
                      }}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#490490] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.readTime} de lectura</span>
                    <span
                      className="text-xs font-semibold flex items-center gap-1"
                      style={{ color: article.color }}
                    >
                      Leer artículo
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rest of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.filter((a) => !a.featured).map((article) => (
              <div
                key={article.title}
                className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 p-5"
                style={{
                  border: `1px solid ${article.color}12`,
                  background: `${article.color}04`,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: `${article.color}15`,
                      color: article.color,
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#490490] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(73,4,144,0.06), rgba(54,95,232,0.06))",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Prefieres que te ayudemos directamente?
          </h2>
          <p className="text-gray-600 mb-8">
            Un diagnóstico vale más que mil artículos. Hablemos de tu caso específico.
          </p>
          <Link href="/diagnostico" className="btn-primary">
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
