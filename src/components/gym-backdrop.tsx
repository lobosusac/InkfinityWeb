/**
 * Ambiente de gimnasio: las capas de fondo que viven detrás de toda la página.
 *
 * Se construye por capas en lugar de con una fotografía, porque una foto de
 * fondo compite con el texto y pesa. Aquí el ambiente lo dan dos focos de neón
 * en esquinas opuestas, la rejilla del piso en perspectiva y un viñeteado que
 * cierra los bordes. Todo fijo y sin capturar el ratón, así que no interfiere
 * con el contenido ni con el desplazamiento.
 */
export function GymBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Focos de neón en esquinas opuestas: voltio arriba a la izquierda, hielo a la derecha. */}
      <div
        className="absolute -left-40 -top-40 h-[46rem] w-[46rem] rounded-full opacity-[0.16]"
        style={{
          background:
            "radial-gradient(circle, var(--voltio) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute -right-52 top-[18rem] h-[52rem] w-[52rem] rounded-full opacity-[0.20]"
        style={{
          background: "radial-gradient(circle, var(--hielo) 0%, transparent 68%)",
        }}
      />

      {/* Tubos de neón verticales, insinuando las luces de las paredes. */}
      <div className="neon-voltio absolute left-0 top-1/4 h-64 w-px bg-volt/70" />
      <div className="neon-hielo absolute right-0 top-1/2 h-80 w-px bg-ice/70" />

      {/* Piso: la rejilla en perspectiva se desvanece hacia el horizonte. */}
      <div className="piso-rejilla absolute bottom-0 left-0 h-[52vh] w-full opacity-70" />

      {/* Viñeteado, para que el contenido quede siempre sobre lo más oscuro. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 20%, var(--noche) 92%)",
        }}
      />

      {/* Grano fino: quita el aspecto plano de los degradados. */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
