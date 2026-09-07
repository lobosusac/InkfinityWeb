import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Playeras deportivas`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "playeras deportivas",
    "camisetas deportivas",
    "uniformes deportivos",
    "jerseys personalizados",
    site.location.country,
  ],
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Playeras deportivas`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Playeras deportivas`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        {/* Salto al contenido, para navegación por teclado y lectores de pantalla. */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-bone focus:px-4 focus:py-2 focus:text-black"
        >
          Saltar al contenido
        </a>
        <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
