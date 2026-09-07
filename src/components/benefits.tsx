import { Container, SectionHeading } from "@/components/ui";

const benefits = [
  {
    title: "Tela que respira",
    body: "Micro poliéster de secado rápido: saca el sudor a la superficie y se seca mientras entrenás, en vez de quedarse pesada y pegada al cuerpo.",
  },
  {
    title: "Corte atlético real",
    body: "Patronaje pensado para moverse. Hombro libre, largo que no se sube en el arranque y caída que no estorba en la carrera.",
  },
  {
    title: "Estampado sublimado",
    body: "El diseño se integra a la fibra, no se pega encima. No se cuartea, no se despinta y no se siente al tacto, lavada tras lavada.",
  },
  {
    title: "Costuras planas",
    body: "Sin roce en axilas ni costados. La diferencia se nota justo cuando la sesión se alarga y todo lo demás empieza a molestar.",
  },
];

export function Benefits() {
  return (
    <section id="calidad" className="border-b border-line py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Por qué esta y no otra"
          title={
            <>
              La diferencia
              <br />
              está en la tela
            </>
          }
          intro="Una playera deportiva barata se delata a los veinte minutos. Estas son las cuatro cosas en las que no cedemos."
        />

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {benefits.map((b, i) => (
            <article key={b.title} className="bg-black p-8 sm:p-10">
              <span className="display text-sm text-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-3 text-2xl">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{b.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
