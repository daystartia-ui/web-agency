import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DaystartIA · Recepción con IA para clínicas",
  description:
    "Ayudamos a clínicas dentales, de estética y de fisioterapia a convertir llamadas perdidas en citas confirmadas, 24/7 y sin trabajo extra para el equipo. Pide tu auditoría gratuita.",
  openGraph: {
    title: "DaystartIA · Tu clínica nunca pierde una cita",
    description:
      "Recepción con IA que contesta llamadas y WhatsApp, agenda, recuerda citas y rellena cancelaciones.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Activa las animaciones de aparición solo si hay JavaScript */}
        {/* Si a los 3 s no se han activado, se muestra todo igualmente */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__reveal)document.documentElement.classList.remove('js')},3000)",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
