import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grafizé | Agencia de Crecimiento Digital en Ecuador",
  description:
    "Grafizé es una agencia de crecimiento digital que integra estrategia, marca, marketing, publicidad, tecnología, contenidos e inteligencia artificial para convertir negocios en marcas visibles, vendibles y escalables.",
  keywords:
    "agencia de marketing digital en Ecuador, agencia de publicidad en Ecuador, transformación digital para empresas, inteligencia artificial para empresas, diseño web profesional, branding corporativo, marca personal, CRM para empresas",
  openGraph: {
    title: "Grafizé | Marcas visibles. Negocios vendibles. Empresas escalables.",
    description:
      "Estrategia, marketing, publicidad, tecnología e inteligencia artificial para empresas que quieren crecer.",
    url: "https://www.grafize.com",
    siteName: "Grafizé",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grafizé | Agencia de Crecimiento Digital",
    description:
      "Marcas visibles. Negocios vendibles. Empresas escalables.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
