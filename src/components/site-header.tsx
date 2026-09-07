"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { Wordmark } from "@/components/brandmark";
import { ButtonLink, Container, WhatsAppIcon } from "@/components/ui";

const nav = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#calidad", label: "Calidad" },
  { href: "#equipos", label: "Equipos" },
  { href: "#tallas", label: "Tallas" },
  { href: "#faq", label: "Preguntas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-bone" onClick={() => setOpen(false)}>
          <Wordmark tagline={site.tagline} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-volt"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink
              href={waGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              <WhatsAppIcon />
              Pedir ahora
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="border border-line p-2 text-bone lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <nav id="menu-movil" className="border-t border-line bg-surface lg:hidden" aria-label="Principal móvil">
          <Container className="flex flex-col py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3.5 text-sm text-muted last:border-0 hover:text-bone"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
