import type { Product } from "@/data/products";

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
      {/* Marca al centro del pecho */}
      <g transform="translate(150 150) scale(0.34) translate(-100 -100)">
        <path
          d="M100 14 L110 62 L100 78 L90 62 Z M100 186 L110 138 L100 122 L90 138 Z"
          fill={art.accent}
        />
        <path
          d="M52 100 C52 66 88 66 100 100 C112 134 148 134 148 100 C148 66 112 66 100 100 C88 134 52 134 52 100 Z"
          stroke={art.accent}
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {/* Costura inferior */}
      <path d="M80 310 L220 310" stroke={art.accent} strokeWidth="2" opacity="0.25" />
    </svg>
  );
}
