/**
 * Marca gráfica — PLACEHOLDER.
 *
 * TODO(cliente): sustituir por el logotipo real. Lo ideal es el SVG original;
 * si solo hay PNG, que venga con fondo transparente y al menos 1000 px de ancho.
 * Al usar `currentColor`, la marca se adapta sola al color del texto que la contiene.
 */
export function Brandmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Logotipo"
      className={className}
      fill="none"
    >
      {/* Lanza vertical */}
      <path
        d="M100 14 L110 62 L100 78 L90 62 Z M100 186 L110 138 L100 122 L90 138 Z"
        fill="currentColor"
      />
      {/* Infinito */}
      <path
        d="M52 100 C52 66 88 66 100 100 C112 134 148 134 148 100 C148 66 112 66 100 100 C88 134 52 134 52 100 Z"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Marca gráfica + nombre, para el encabezado y el pie. */
export function Wordmark({
  name,
  tagline,
  className = "",
}: {
  name: string;
  tagline?: string;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Brandmark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="display text-xl tracking-wide">{name}</span>
        {tagline ? (
          <span className="text-[0.6rem] uppercase tracking-[0.28em] text-dim">
            {tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
