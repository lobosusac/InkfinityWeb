/**
 * Cinta de atributos en movimiento.
 * Se detiene cuando el sistema pide movimiento reducido (ver globals.css).
 */
const items = [
  "Secado rápido",
  "Corte atlético",
  "Sublimación total",
  "Costuras planas",
  "Antibacterial",
  "Tallas XS a 2XL",
  "Envío nacional",
];

export function Marquee() {
  const strip = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-line bg-surface py-3">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap">
        {strip.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-xs uppercase tracking-[0.28em] text-dim"
          >
            {item}
            <span aria-hidden="true" className="text-bone/25">
              ◆
            </span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
