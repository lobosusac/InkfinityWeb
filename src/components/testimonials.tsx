import { Container, SectionHeading } from "@/components/ui";

/**
 * TODO(cliente): sustituir por reseñas reales, con nombre y, si se puede, foto.
 * Los testimonios inventados se notan y hacen más daño que no tener ninguno,
 * así que esta sección debe quedar fuera del sitio hasta que haya reseñas de verdad.
 */
const quotes = [
  {
    quote:
      "Las pedimos para todo el equipo y llegaron antes de lo prometido. La tela no pesa nada cuando uno suda.",
    name: "Nombre Apellido",
    role: "Capitán, equipo pendiente",
  },
  {
    quote:
      "Llevo meses entrenando con la misma y sigue igual. El estampado no se ha movido ni un poco.",
    name: "Nombre Apellido",
    role: "Cliente pendiente",
  },
  {
    quote:
      "Escribí por WhatsApp un martes y el viernes ya la tenía puesta. Así de simple.",
    name: "Nombre Apellido",
    role: "Cliente pendiente",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-line py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Clientes" title="Lo que dicen" />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.quote} className="flex flex-col border border-line bg-surface p-8">
              <blockquote className="flex-1 text-lg leading-relaxed">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <span className="block text-sm font-semibold">{q.name}</span>
                <span className="block text-xs uppercase tracking-[0.15em] text-dim">
                  {q.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
