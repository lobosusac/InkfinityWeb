import { Container, SectionHeading } from "@/components/ui";

/**
 * Guía de tallas.
 * TODO(cliente): reemplazar por las medidas reales de las prendas.
 * Es la causa número uno de devoluciones y de preguntas repetidas por WhatsApp.
 */
const rows = [
  { size: "XS", chest: "88–92", length: "66", shoulder: "41" },
  { size: "S", chest: "92–98", length: "69", shoulder: "43" },
  { size: "M", chest: "98–104", length: "71", shoulder: "45" },
  { size: "L", chest: "104–110", length: "73", shoulder: "47" },
  { size: "XL", chest: "110–118", length: "75", shoulder: "49" },
  { size: "2XL", chest: "118–126", length: "77", shoulder: "51" },
];

export function SizeGuide() {
  return (
    <section id="tallas" className="border-b border-line py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <SectionHeading
          eyebrow="Tallas"
          title={
            <>
              Pedí la
              <br />
              talla correcta
            </>
          }
          intro="Medidas de camisetas y playeras en centímetros, tomadas sobre la prenda y no sobre el cuerpo. Los hoodies calzan una talla más holgados. Si estás entre dos tallas y querés holgura, subí una."
        />

        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[26rem] border-collapse text-sm">
            <caption className="sr-only">
              Medidas de la prenda por talla, en centímetros
            </caption>
            <thead>
              <tr className="bg-raised text-left">
                {["Talla", "Pecho (cm)", "Largo (cm)", "Hombro (cm)"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="border-b border-line px-4 py-3 text-[0.7rem] uppercase tracking-[0.15em] text-dim"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.size} className="border-b border-line/60 last:border-0">
                  <th scope="row" className="display px-4 py-3.5 text-left text-lg text-volt">
                    {r.size}
                  </th>
                  <td className="px-4 py-3.5 text-muted">{r.chest}</td>
                  <td className="px-4 py-3.5 text-muted">{r.length}</td>
                  <td className="px-4 py-3.5 text-muted">{r.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
