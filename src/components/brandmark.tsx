/**
 * Marca gráfica — reconstrucción vectorial del logotipo.
 *
 * Trazada a mano a partir de la captura que envió el cliente: infinito tribal
 * de trazo cónico, atravesado por una hoja vertical con barbas superiores.
 * Al usar `currentColor`, la marca se adapta al color del texto que la contiene.
 *
 * TODO(cliente): si aparece el archivo original (SVG o PNG a alta resolución),
 * conviene sustituir estos trazos por la geometría exacta.
 */
export function Brandmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Logotipo"
      className={className}
      fill="currentColor"
    >
      {/* Hoja vertical: punta superior, barbas y punta inferior. */}
      <path
        d="M100 8 106 46 111 62 100 82 89 62 94 46Z
           M100 192 106 158 111 142 100 122 89 142 94 158Z"
      />
      <path
        d="M78 30C82 46 86 56 94 66 88 62 80 56 74 46 71 40 69 34 78 30Z
           M122 30C118 46 114 56 106 66 112 62 120 56 126 46 129 40 131 34 122 30Z"
      />

      {/* Infinito de trazo cónico: contorno exterior menos el interior. */}
      <path
        fillRule="evenodd"
        d="M100 100C76 60 26 64 30 100 34 136 76 140 100 100Z
           M100 100C80 74 44 76 47 100 50 124 80 126 100 100Z
           M100 100C124 60 174 64 170 100 166 136 124 140 100 100Z
           M100 100C120 74 156 76 153 100 150 124 120 126 100 100Z"
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
