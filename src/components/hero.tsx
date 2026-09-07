import { site } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { Brandmark } from "@/components/brandmark";
import { ButtonLink, Container, WhatsAppIcon } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Marca gigante de fondo, apenas visible: da profundidad sin competir con el texto. */}
      <Brandmark className="pointer-events-none absolute -right-24 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 text-bone/[0.035]" />

      <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <p className="mb-5 inline-block border border-line px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.25em] text-muted">
            Hecho para entrenar duro
          </p>

          <h1 className="display text-6xl sm:text-7xl lg:text-8xl">
            Playeras que
            <br />
            aguantan
            <br />
            <span className="text-muted">tu ritmo</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted">
            Tela transpirable de secado rápido, corte atlético y estampado
            sublimado que no se cuartea ni se despinta. Pedís por WhatsApp y te
            llega a la puerta.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={waGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir por WhatsApp
            </ButtonLink>
            <ButtonLink href="#catalogo" variant="ghost" size="lg">
              Ver catálogo
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
            {[
              { k: "Tallas", v: "XS a 2XL" },
              { k: "Entrega", v: "3 a 5 días" },
              { k: "Equipos", v: "Desde 10" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-dim">
                  {s.k}
                </dt>
                <dd className="display mt-1.5 text-xl">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-square border border-line bg-surface p-14">
            <Brandmark className="h-full w-full text-bone" />
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-dim">
            {site.name} — {site.location.country}
          </p>
        </div>
      </Container>
    </section>
  );
}
