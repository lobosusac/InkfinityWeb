# Archivos de marca

## Material entregado por el cliente

- `LOGO INKFINITY.png` — el símbolo del infinito. Es una captura de pantalla de
  323 × 347 px con el fondo negro texturizado incrustado.
- `3.png` — el cartel de la línea Culture Fit, 1103 × 1426 px. De aquí sale casi
  toda la identidad: el eslogan «Break your limits», el nombre de la línea, la
  tipografía de pincel del nombre y la fotografía del atleta.

## Piezas derivadas, generadas a partir de lo anterior

| Archivo | Origen | Uso |
| --- | --- | --- |
| `logo.svg` | `LOGO INKFINITY.png` | El símbolo, en el encabezado, el pie y el pecho de cada prenda |
| `wordmark.svg` | recorte de `3.png` | El nombre «Inkfinity» en tipografía de pincel |
| `culture-fit.svg` | recorte de `3.png` | El rótulo de la línea, en la portada |
| `atleta.webp` | recorte de `3.png` | La fotografía de fondo de la portada |

Los tres SVG usan `currentColor`, así que heredan el color de donde se coloquen.
La geometría vive en `src/components/brandmark.tsx`, declarada una sola vez como
`<symbol>` y referenciada con `<use>`, para no repetir el trazado en cada uso.

## Cómo se generaron

El procedimiento es el mismo para las tres: aislar la figura clara del fondo
oscuro por umbral, ampliar antes de trazar —así los contornos salen curvos y no
escalonados— y vectorizar.

```bash
potrace marca.pbm --svg --alphamax 1.2 --opttolerance 0.15 --turdsize 120
```

## Si aparecen los originales

Todo esto se reconstruyó a partir de imágenes de baja resolución, así que los
filos más finos se redondearon. Con los archivos del diseñador (SVG, AI o EPS)
conviene regenerar `logo.svg`, `wordmark.svg`, `culture-fit.svg`,
`src/app/icon.svg` y las constantes de `src/components/brandmark.tsx`.
La foto del atleta en alta resolución también mejoraría la portada.
