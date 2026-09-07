import type { Garment, Product } from "@/data/products";
import { MARCA_ID } from "@/components/brandmark";

/**
 * Ilustración vectorial de cada prenda.
 *
 * Sustituye a la fotografía mientras no exista el catálogo fotográfico real.
 * Es deliberadamente esquemática: comunica la prenda sin fingir ser una foto.
 * Cada categoría tiene su silueta, para que la diferencia entre una camiseta
 * sin mangas, una playera y un hoodie se lea de un vistazo en la cuadrícula.
 */

type Art = Product["art"];

function Marca({ y = 112, size = 76, color }: { y?: number; size?: number; color: string }) {
  return (
    <use
      href={`#${MARCA_ID}`}
      x={150 - size / 2}
      y={y}
      width={size}
      height={size}
      style={{ color }}
    />
  );
}

function Camiseta({ art }: { art: Art }) {
  return (
    <>
      {/* Sin mangas: la sisa entra hacia el centro, que es lo que distingue de
          un vistazo una camiseta de tirantes de una playera de manga corta. */}
      <path
        d="M104 30 L130 22 A28 28 0 0 0 170 22 L196 30
           C193 74 206 112 224 146 L228 320 L72 320 L76 146
           C94 112 107 74 104 30 Z"
        fill={art.body}
      />
      <path
        d="M130 22 A28 28 0 0 0 170 22"
        stroke={art.accent}
        strokeWidth="3.5"
        fill="none"
        opacity="0.4"
      />
      <Marca color={art.accent} y={118} size={72} />
      <path d="M78 308 L222 308" stroke={art.accent} strokeWidth="2" opacity="0.2" />
    </>
  );
}

function Playera({ art }: { art: Art }) {
  return (
    <>
      <path
        d="M100 18 L20 72 L52 150 L88 128 Z M200 18 L280 72 L248 150 L212 128 Z"
        fill={art.sleeve}
      />
      <path
        d="M100 18 L124 27 A30 30 0 0 0 176 27 L200 18 L212 128 L220 322 L80 322 L88 128 Z"
        fill={art.body}
      />
      <path
        d="M124 27 A30 30 0 0 0 176 27"
        stroke={art.accent}
        strokeWidth="3.5"
        fill="none"
        opacity="0.4"
      />
      <Marca color={art.accent} />
      <path d="M80 310 L220 310" stroke={art.accent} strokeWidth="2" opacity="0.2" />
    </>
  );
}

function Hoodie({ art }: { art: Art }) {
  return (
    <>
      {/* La capucha es un casquete macizo detrás de los hombros: el cuerpo tapa
          su mitad inferior, así que solo asoma la cúpula. */}
      <path d="M96 108 C96 24 204 24 204 108 Z" fill={art.sleeve} />
      <path
        d="M108 104 C108 44 192 44 192 104 Z"
        fill={art.body}
        opacity="0.65"
      />

      {/* Mangas largas, rematadas en puño. */}
      <path d="M106 64 L48 88 L28 232 L88 244 L94 148 Z" fill={art.sleeve} />
      <path d="M194 64 L252 88 L272 232 L212 244 L206 148 Z" fill={art.sleeve} />
      <path d="M28 232 L88 244 L84 274 L24 262 Z" fill={art.body} />
      <path d="M272 232 L212 244 L216 274 L276 262 Z" fill={art.body} />

      {/* Cuerpo, con elástico inferior. */}
      <path
        d="M106 64 C128 84 172 84 194 64 L206 148 L212 290 L88 290 L94 148 Z"
        fill={art.body}
      />
      <path d="M88 290 L212 290 L214 312 L86 312 Z" fill={art.sleeve} />

      {/* Boca de la capucha y cordones. */}
      <path
        d="M118 70 C132 96 168 96 182 70 C168 82 132 82 118 70 Z"
        fill={art.accent}
        opacity="0.45"
      />
      <path
        d="M136 84 L133 132 M164 84 L167 132"
        stroke={art.accent}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.8"
      />

      <Marca color={art.accent} y={140} size={62} />

      {/* Bolsillo canguro. */}
      <path
        d="M108 216 L192 216 L198 262 Q150 270 102 262 Z"
        fill="none"
        stroke={art.accent}
        strokeWidth="2.5"
        opacity="0.3"
      />
    </>
  );
}

// Las claves son las mismas que los slugs de categoría, de modo que la
// categoría de un producto decide su silueta sin ninguna tabla intermedia.
const siluetas = {
  camisetas: Camiseta,
  playeras: Playera,
  hoodies: Hoodie,
} as const;

export function GarmentArt({
  garment,
  art,
  className = "",
}: {
  garment: Garment;
  art: Art;
  className?: string;
}) {
  const Silueta = siluetas[garment];
  return (
    <svg
      viewBox="0 0 300 340"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <Silueta art={art} />
    </svg>
  );
}
