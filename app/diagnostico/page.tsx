import type { Metadata } from "next";
import DiagnosticoForm from "@/components/pages/DiagnosticoForm";

export const metadata: Metadata = {
  title: "Solicitar Diagnóstico | Grafizé",
  description:
    "Solicita tu diagnóstico gratuito de crecimiento digital. Analizaremos tu marca, presencia digital y oportunidades para proponerte una ruta clara.",
};

export default function DiagnosticoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label mx-auto w-fit mb-6">Diagnóstico gratuito</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Solicita tu diagnóstico inicial de crecimiento digital.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Analizaremos tu marca, tu presencia digital, tus canales comerciales y tus
            oportunidades de mejora para proponerte una ruta clara de crecimiento.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                ¿Qué incluye el diagnóstico?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Este diagnóstico es el primer paso para entender qué necesita tu empresa:
                una mejor marca, una web más efectiva, campañas de captación, CRM,
                automatización, inteligencia artificial, contenidos, producción audiovisual
                o una estrategia integral.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Análisis de tu presencia digital actual",
                  "Evaluación de tu comunicación y mensaje",
                  "Diagnóstico de canales de captación",
                  "Identificación de oportunidades clave",
                  "Propuesta de ruta de acción",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(73, 4, 144, 0.1)" }}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="#490490"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact options */}
              <div
                className="p-5 rounded-2xl mb-6"
                style={{
                  background: "rgba(73, 4, 144, 0.04)",
                  border: "1px solid rgba(73, 4, 144, 0.1)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  También puedes contactarnos por
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/593992564376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#490490] transition-colors"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(37, 211, 102, 0.1)" }}
                    >
                      <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    +593 99 256 4376
                  </a>
                  <a
                    href="mailto:info@grafize.com"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#490490] transition-colors"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(73, 4, 144, 0.08)" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="#490490"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    info@grafize.com
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Síguenos
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Instagram", href: "https://www.instagram.com/agenciagrafize" },
                    { label: "Facebook", href: "https://www.facebook.com/grafize" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/company/grafize/" },
                    { label: "YouTube", href: "https://www.youtube.com/@grafize" },
                    { label: "TikTok", href: "https://www.tiktok.com/@grafize" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 bg-gray-100 hover:bg-[#490490] hover:text-white transition-all"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <DiagnosticoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
