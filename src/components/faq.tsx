import { Container, SectionHeading } from "@/components/ui";

/** TODO(cliente): ajustar las respuestas a las políticas reales del negocio. */
export const faqs = [
  {
    q: "¿Cómo hago un pedido?",
    a: "Elegís el modelo y la talla en el catálogo y pulsás el botón de WhatsApp. El mensaje se escribe solo con lo que elegiste; nosotros confirmamos existencias y el total.",
  },
  {
    q: "¿Cuánto tarda la entrega?",
    a: "Entre 3 y 5 días hábiles a todo el país una vez confirmado el pago. Los pedidos de equipos con personalización tardan un poco más según la cantidad.",
  },
  {
    q: "¿Puedo cambiar la talla si no me queda?",
    a: "Sí, dentro de los primeros días después de recibirla y siempre que la prenda esté sin usar y con su empaque. Escribinos por WhatsApp y coordinamos el cambio.",
  },
  {
    q: "¿El estampado se despinta con los lavados?",
    a: "No. Es sublimación: la tinta se integra a la fibra en vez de quedar pegada encima, así que no se cuartea ni se desprende. Lavar del revés y con agua fría alarga aún más la vida de la prenda.",
  },
  {
    q: "¿Hacen prendas personalizadas para gimnasios?",
    a: "Sí, desde 10 piezas, con tu logotipo y los nombres de cada quien. Trabajamos con gimnasios, boxes y equipos. Te enviamos una muestra digital para aprobación antes de producir.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Coordinamos el pago directamente por WhatsApp al confirmar el pedido.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-line py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <SectionHeading
          eyebrow="Preguntas"
          title={
            <>
              Antes de
              <br />
              que preguntes
            </>
          }
        />

        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold marker:content-none">
                {f.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-volt transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
