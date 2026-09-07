import { Container, SectionHeading } from "@/components/ui";

const steps = [
  {
    title: "Elegís el modelo",
    body: "Mirá el catálogo y quedate con el modelo y la talla. La guía de tallas está más abajo si tenés dudas.",
  },
  {
    title: "Nos escribís",
    body: "El botón manda un mensaje de WhatsApp ya redactado con el modelo y la talla. Confirmamos existencia y total.",
  },
  {
    title: "Te llega",
    body: "Coordinamos el pago y el envío. Entrega en 3 a 5 días hábiles a todo el país.",
  },
];

export function Process() {
  return (
    <section className="border-b border-line py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cómo se pide"
          title="Tres pasos, sin vueltas"
          align="center"
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="shard border border-line bg-surface/80 p-8 backdrop-blur transition-colors hover:border-ice/50">
              <span className="display block text-5xl text-volt/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-4 text-2xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
