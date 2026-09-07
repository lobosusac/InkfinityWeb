import { waTeam } from "@/lib/whatsapp";
import { Brandmark } from "@/components/brandmark";
import { ButtonLink, Container, WhatsAppIcon } from "@/components/ui";

export function TeamCta() {
  return (
    <section id="equipos" className="relative overflow-hidden border-b border-line bg-surface py-20 sm:py-24">
      <Brandmark className="pointer-events-none absolute -left-20 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 text-bone/[0.03]" />

      <Container className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dim">Equipos</p>
          <h2 className="display text-4xl sm:text-5xl">
            Uniformes para
            <br />
            todo el equipo
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Desde 10 piezas: tu escudo, los colores del club, y nombres y números
            en la espalda. Te mandamos el diseño para aprobación antes de producir.
          </p>

          <ul className="mt-8 grid gap-2.5 text-sm text-muted sm:grid-cols-2">
            {[
              "Diseño personalizado incluido",
              "Nombres y números sublimados",
              "Precio por volumen",
              "Muestra digital antes de producir",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span aria-hidden="true" className="mt-1.5 text-bone/40">
                  ◆
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:justify-self-end">
          <ButtonLink
            href={waTeam()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Cotizar mi equipo
          </ButtonLink>
          <p className="mt-3 text-xs leading-relaxed text-dim">
            Respuesta el mismo día en horario de atención.
          </p>
        </div>
      </Container>
    </section>
  );
}
