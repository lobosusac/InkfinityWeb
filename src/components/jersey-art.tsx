import type { Product } from "@/data/products";
import { BRANDMARK_ID } from "@/components/brandmark";

/**
 * Ilustración vectorial de la playera.
 *
 * Sustituye a la fotografía mientras no exista el catálogo fotográfico real.
 * Es deliberadamente esquemática: comunica el producto sin fingir ser una foto.
 */
export function JerseyArt({
  art,
  className = "",
}: {
  art: Product["art"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 340"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      {/* Mangas */}
      <path
        d="M100 18 L20 72 L52 150 L88 128 Z M200 18 L280 72 L248 150 L212 128 Z"
        fill={art.sleeve}
      />
      {/* Cuerpo */}
      <path
        d="M100 18 L124 27 A30 30 0 0 0 176 27 L200 18 L212 128 L220 322 L80 322 L88 128 Z"
        fill={art.body}
      />
      {/* Cuello: costilla fina siguiendo exactamente la línea del escote */}
      <path
        d="M124 27 A30 30 0 0 0 176 27"
        stroke={art.accent}
        strokeWidth="3.5"
        fill="none"
        opacity="0.35"
      />
      {/* Marca al centro del pecho: referencia al símbolo, sin duplicar el trazado */}
      <use
        href={`#${BRANDMARK_ID}`}
        x="112"
        y="112"
        width="76"
        height="76"
        style={{ color: art.accent }}
      />

      {/* Costura inferior */}
      <path d="M80 310 L220 310" stroke={art.accent} strokeWidth="2" opacity="0.25" />
    </svg>
  );
}
