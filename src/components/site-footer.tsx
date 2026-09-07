import { site } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { Wordmark } from "@/components/brandmark";
import { Container, WhatsAppIcon } from "@/components/ui";

const socialLabels = {
  instagram: "Instagram",
  tiktok: "TikTok",
  facebook: "Facebook",
} as const;

const socialUrls = {
  instagram: (u: string) => `https://instagram.com/${u}`,
  tiktok: (u: string) => `https://tiktok.com/@${u}`,
  facebook: (u: string) => `https://facebook.com/${u}`,
} as const;

export function SiteFooter() {
  const socials = (
    Object.entries(site.social) as [keyof typeof socialLabels, string][]
  ).filter(([, user]) => user.length > 0);

  return (
    <footer className="py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark tagline={site.tagline} />
            <p className="mt-4 max-w-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.25em] text-dim">
              Contacto
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={waGeneral()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-bone"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-bone">
                  {site.email}
                </a>
              </li>
              <li>
                {site.location.city}, {site.location.country}
              </li>
              <li>{site.hours}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.25em] text-dim">
              Secciones
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {[
                ["#catalogo", "Catálogo"],
                ["#calidad", "Calidad"],
                ["#equipos", "Equipos"],
                ["#tallas", "Tallas"],
                ["#faq", "Preguntas"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-bone">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {socials.length > 0 ? (
              <ul className="mt-6 flex gap-4 text-sm text-muted">
                {socials.map(([key, user]) => (
                  <li key={key}>
                    <a
                      href={socialUrls[key](user)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-bone"
                    >
                      {socialLabels[key]}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-7 text-xs text-dim">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
