import Image from "next/image";
import atleta from "../../public/brand/atleta.webp";
import { site } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { CultureFitMark } from "@/components/brandmark";
import { ButtonLink, Container, WhatsAppIcon } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* La foto ocupa la mitad derecha y se disuelve hacia el texto, de modo
          que el titular nunca compite con el cuerpo del atleta. */}
      <div className="absolute inset-0">
        <Image
          src={atleta}
          alt="Atleta levantando peso muerto"
          priority
          placeholder="blur"
          sizes="100vw"
          className="h-full w-full object-cover object-[65%_center] opacity-60 lg:object-[75%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20 lg:via-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        {/* Luz de neón rasante sobre la figura. */}
        <div
          className="absolute inset-y-0 right-0 w-2/3"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, color-mix(in srgb, var(--hielo) 22%, transparent) 0%, transparent 62%)",
          }}
        />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <CultureFitMark className="h-8 w-52 text-ice texto-neon-hielo sm:h-10 sm:w-64" />

          <h1 className="display cromo mt-7 text-7xl sm:text-8xl lg:text-9xl">
            Break
            <br />
            your
            <br />
            limits
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
            Camisetas, playeras y hoodies para entrenar de verdad. Tela
            transpirable, corte atlético y estampado que aguanta los lavados que
            le pongás. Pedís por WhatsApp y te llega a la puerta.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={waGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="neon-voltio"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir por WhatsApp
            </ButtonLink>
            <ButtonLink href="#catalogo" variant="ghost" size="lg">
              Ver catálogo
            </ButtonLink>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
            {[
              { k: "Tallas", v: "XS a 2XL" },
              { k: "Entrega", v: "3 a 5 días" },
              { k: "Equipos", v: "Desde 10" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-dim">
                  {s.k}
                </dt>
                <dd className="display mt-1.5 text-xl text-bone">{s.v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-[0.7rem] uppercase tracking-[0.4em] text-volt">
            {site.tagline} — {site.location.country}
          </p>
        </div>
      </Container>
    </section>
  );
}
