import { site } from "@/config/site";
import { faqs } from "@/components/faq";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Catalog } from "@/components/catalog";
import { Benefits } from "@/components/benefits";
import { Process } from "@/components/process";
import { TeamCta } from "@/components/team-cta";
import { SizeGuide } from "@/components/size-guide";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

/**
 * Datos estructurados: ayudan a que Google muestre el negocio en búsquedas
 * locales y las preguntas frecuentes directamente en los resultados.
 */
function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SportingGoodsStore",
      name: site.name,
      description: site.description,
      url: site.url,
      telephone: `+${site.whatsapp}`,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.city,
        addressRegion: site.location.region,
        addressCountry: site.location.countryCode,
      },
      openingHours: site.hoursSchema,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <Hero />
        <Marquee />
        <Catalog />
        <Benefits />
        <Process />
        <TeamCta />
        <SizeGuide />
        <Testimonials />
        <Faq />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <StructuredData />
    </>
  );
}
