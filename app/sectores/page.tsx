import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sectores | Grafizé – Soluciones digitales por industria",
  description:
    "Soluciones digitales especializadas para educación, salud, servicios profesionales, inmobiliaria, turismo, cultura e instituciones.",
};

const sectors = [
  {
    title: "Educación",
    subtitle: "Colegios, institutos, academias y centros de formación",
    color: "#365FE8",
    emoji: "🎓",
    description:
      "Ayudamos a colegios, institutos, academias y centros de formación a captar estudiantes, mejorar su comunicación, fortalecer reputación y ordenar sus procesos de admisión.",
    challenge:
      "La captación de estudiantes es competitiva. Las instituciones educativas necesitan mostrar su propuesta de valor con claridad, confianza y mensajes que lleguen a padres, jóvenes y adultos en los canales correctos.",
    services: [
      "Campañas de matrícula y admisiones",
      "Sitio web institucional",
      "CRM de admisiones",
      "WhatsApp Business",
      "Videos institucionales",
      "Redes sociales estratégicas",
      "Marca educativa",
    ],
    keyWords: "Marketing educativo · Captación de estudiantes · Reputación institucional",
  },
  {
    title: "Salud, bienestar y estética",
    subtitle: "Clínicas, consultorios y centros de bienestar",
    color: "#7AD1B9",
    emoji: "⚕️",
    description:
      "Ayudamos a clínicas, consultorios y centros de bienestar a construir confianza, autoridad profesional y canales de captación de citas.",
    challenge:
      "En salud y bienestar, la confianza lo es todo. La persona que busca un médico, dentista o terapeuta investiga antes de contactar. Tu presencia digital debe transmitir autoridad, profesionalismo y cercanía.",
    services: [
      "Web profesional médica o de bienestar",
      "Campañas de captación de citas",
      "Marca médica o de bienestar",
      "Contenido educativo",
      "Testimoniales profesionales",
      "WhatsApp Business",
      "Automatización de atención",
    ],
    keyWords: "Marketing médico · Captación de citas · Confianza profesional",
  },
  {
    title: "Servicios profesionales",
    subtitle: "Abogados, arquitectos, consultores y asesores",
    color: "#490490",
    emoji: "💼",
    description:
      "Ayudamos a abogados, arquitectos, consultores, asesores y profesionales independientes a convertir su experiencia en autoridad y oportunidades comerciales.",
    challenge:
      "La diferencia entre un profesional que consigue clientes de calidad y uno que lucha por ellos suele estar en su marca personal, presencia digital y reputación. Tu experiencia merece una comunicación a la altura.",
    services: [
      "Marca personal estratégica",
      "Web profesional",
      "Optimización de LinkedIn",
      "Presentación comercial",
      "Videos de autoridad",
      "Campañas de captación",
      "Reputación digital",
    ],
    keyWords: "Marca personal · Autoridad profesional · Captación de clientes",
  },
  {
    title: "Inmobiliaria y construcción",
    subtitle: "Constructoras, inmobiliarias y proyectos de vivienda",
    color: "#E37B5E",
    emoji: "🏢",
    description:
      "Ayudamos a inmobiliarias, constructoras, urbanizaciones y lotizaciones a presentar mejor sus proyectos, captar prospectos y ordenar el seguimiento comercial.",
    challenge:
      "Vender un inmueble es un proceso largo. La primera impresión digital, la calidad visual del material y la capacidad de captar y nutrir prospectos son decisivos para cerrar ventas en plazos razonables.",
    services: [
      "Branding del proyecto",
      "Landing page optimizada",
      "Campañas de leads",
      "CRM inmobiliario",
      "Brochure digital",
      "Video promocional",
      "Mejora de renders",
      "Recorridos virtuales",
    ],
    keyWords: "Marketing inmobiliario · Captación de prospectos · CRM inmobiliario",
  },
  {
    title: "Turismo, gastronomía y experiencias",
    subtitle: "Hoteles, restaurantes, agencias y operadores turísticos",
    color: "#C03F79",
    emoji: "✈️",
    description:
      "Ayudamos a hoteles, restaurantes, agencias y operadores turísticos a mejorar su presencia digital, captar reservas y construir deseo visual.",
    challenge:
      "El sector turístico y gastronómico vive en la imagen y la experiencia. El cliente decide con los ojos antes de tomar acción. Una presencia digital atractiva, con contenido visual de calidad y canales de reserva activos, hace la diferencia.",
    services: [
      "Sitio web con sistema de reservas",
      "Fotografía y video profesional",
      "Redes sociales con contenido visual",
      "Campañas digitales",
      "Marca de experiencia",
      "Automatización de atención",
    ],
    keyWords: "Marketing turístico · Captación de reservas · Contenido visual",
  },
  {
    title: "Cultura, libros, cine e instituciones",
    subtitle: "Editoriales, productoras, festivales e instituciones culturales",
    color: "#4653CE",
    emoji: "🎭",
    description:
      "Ayudamos a proyectos culturales, editoriales, productoras, festivales e instituciones a comunicar con claridad, valor simbólico y presencia profesional.",
    challenge:
      "Los proyectos culturales tienen valor, propósito y comunidad. Pero muchas veces la comunicación no está a la altura del proyecto. Una estrategia digital bien ejecutada amplifica el alcance, construye audiencia y genera sostenibilidad.",
    services: [
      "Comunicación institucional",
      "Diseño y contenidos",
      "Sitio web cultural",
      "Campañas digitales",
      "Video de presentación",
      "Publicaciones y libros",
      "Estrategia cultural digital",
    ],
    keyWords: "Comunicación cultural · Estrategia editorial · Instituciones culturales",
  },
];

export default function SectoresPage() {
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
          <div className="section-label mb-6">Sectores</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluciones digitales para sectores donde la confianza, la imagen y la captación son decisivas.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Grafizé se enfoca en sectores con potencial de crecimiento, necesidad de reputación y capacidad de inversión en soluciones digitales.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sectors.map((sector, i) => (
            <div
              key={sector.title}
              className="rounded-3xl overflow-hidden"
              style={{
                border: `1px solid ${sector.color}18`,
                background: i % 2 === 0 ? "white" : `${sector.color}04`,
              }}
            >
              <div className="p-7 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Left: Header + Description */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                        style={{ background: `${sector.color}15` }}
                      >
                        {sector.emoji}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {sector.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">{sector.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {sector.description}
                    </p>
                    <div
                      className="p-5 rounded-2xl"
                      style={{
                        background: `${sector.color}06`,
                        border: `1px solid ${sector.color}12`,
                      }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        El desafío del sector
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {sector.challenge}
                      </p>
                    </div>
                    <p
                      className="text-xs mt-4 font-medium"
                      style={{ color: sector.color + "80" }}
                    >
                      {sector.keyWords}
                    </p>
                  </div>

                  {/* Right: Services */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                      Servicios clave
                    </p>
                    <div className="space-y-2">
                      {sector.services.map((s) => (
                        <div key={s} className="flex items-center gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: sector.color }}
                          />
                          <span className="text-sm text-gray-700">{s}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/diagnostico"
                        className="btn-outline text-sm px-5 py-2.5 w-full text-center"
                        style={{ color: sector.color, borderColor: sector.color }}
                      >
                        Solicitar diagnóstico
                      </Link>
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
          background: "linear-gradient(135deg, #490490 0%, #365FE8 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            ¿Tu sector no está en la lista?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Trabajamos con cualquier empresa que necesite crecer en el entorno digital. Cuéntanos tu caso.
          </p>
          <Link href="/diagnostico" className="btn-teal">
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
