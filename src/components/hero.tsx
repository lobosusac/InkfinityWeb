import Image from "next/image";
import atleta from "../../public/brand/atleta.webp";
import { site } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { CultureFitMark } from "@/components/brandmark";
import { ButtonLink, Container, WhatsAppIcon } from "@/components/ui";

/**
 * La foto del atleta, con el fondo negro del original disuelto en la página.
 *
 * El degradado de máscara evita el corte rectangular: la figura aparece como si
 * emergiera de la oscuridad, en vez de estar pegada dentro de un recuadro.
 */
function Atleta() {
  return (
    <figure className="relative">
      {/* Luz fría por detrás: separa la figura del fondo y le da volumen. */}
      <div
        aria-hidden="true"
        className="absolute -inset-16 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, color-mix(in srgb, var(--hielo) 26%, transparent) 0%, transparent 62%)",
        }}
      />
      {/* Reflejo cálido desde abajo, del lado de la barra. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, color-mix(in srgb, var(--voltio) 16%, transparent) 0%, transparent 68%)",
        }}
      />
      {/*
        La foto lleva su propio canal alfa: el fondo negro del original ya viene
        recortado por luminancia y con los cantos difuminados, así que la figura
        emerge del fondo sin recuadro y sin depender de máscaras en CSS —que al
        crear contexto de apilamiento anulaban el modo de fusión.
      */}
      <Image
        src={atleta}
        alt="Atleta levantando peso muerto con una barra cargada"
        priority
        placeholder="blur"
        sizes="(min-width: 640px) 45vw, 100vw"
        className="relative w-full"
      />
    </figure>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container className="relative py-16 sm:py-20 lg:py-24">
        {/*
          En pantallas pequeñas el orden del documento manda: rótulo, titular,
          foto y luego el resto. A partir de `sm` la foto salta a su propia
          columna y queda a la par del titular, que es donde la fuerza de la
          imagen acompaña a la frase en vez de competir con ella.
        */}
        <div className="grid gap-10 sm:grid-cols-[1.05fr_0.95fr] sm:gap-10 lg:gap-16">
          <div className="sm:col-start-1 sm:row-start-1 sm:self-end">
            <CultureFitMark className="w-52 text-ice texto-neon-hielo sm:w-60 lg:w-72" />

            <h1 className="display cromo mt-6 text-6xl sm:text-7xl lg:text-8xl">
              Break
              <br />
              your
              <br />
              limits
            </h1>
          </div>

          <div className="sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-center">
            <Atleta />
          </div>

          <div className="sm:col-start-1 sm:row-start-2 sm:self-start">
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              Camisetas, playeras y hoodies para entrenar de verdad. Tela
              transpirable, corte atlético y estampado que aguanta los lavados
              que le pongás. Pedís por WhatsApp y te llega a la puerta.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
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

            <p className="mt-7 text-[0.7rem] uppercase tracking-[0.4em] text-volt">
              {site.tagline} — {site.location.country}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
