# Archivos de marca

- `LOGO INKFINITY.png` — el archivo que envió el cliente. Es una captura de
  pantalla: 323 × 347 px, con el fondo negro texturizado incrustado. Se conserva
  como origen de la vectorización.
- `logo.svg` — la marca vectorizada a partir de ese PNG, sin fondo. Usa
  `currentColor`, así que hereda el color de donde se coloque.

La geometría vive en `src/components/brandmark.tsx`, declarada una sola vez
como `<symbol>` y referenciada con `<use>` desde el encabezado, el pie, la
portada y el estampado del pecho de las playeras.

## Cómo se generó

```bash
# Se amplía 6× y se suaviza antes de umbralizar, para que los contornos salgan
# curvos en vez de escalonados; luego potrace traza el mapa de bits.
potrace marca.pbm --svg --alphamax 1.2 --opttolerance 0.15 --turdsize 120
```

## Si aparece el original

Un SVG de diseñador siempre será mejor que esta reconstrucción: la captura
partía de 323 px, así que los filos más finos se redondearon un poco. Con el
archivo original hay que volver a generar `logo.svg`, `src/app/icon.svg` y la
constante `PATH` de `src/components/brandmark.tsx`.
