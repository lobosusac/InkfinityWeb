/**
 * Cinta de atributos en movimiento.
 * Se detiene cuando el sistema pide movimiento reducido (ver globals.css).
 */
const items = [
  "Break your limits",
  "Secado rápido",
  "Corte atlético",
  "Felpa perchada 320 g",
  "Costuras planas",
  "Sublimación total",
  "Tallas XS a 2XL",
  "Envío a todo el país",
];

export function Marquee() {
  const strip = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/80 py-3 backdrop-blur">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap">
        {strip.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-xs uppercase tracking-[0.28em] text-muted"
          >
            {item}
            <span aria-hidden="true" className="text-volt/60">
              ◆
            </span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
