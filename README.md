# Inkfinity Sportwear — página de ventas

Landing de ventas con catálogo para la ropa de entrenamiento de Inkfinity:
camisetas, playeras y hoodies. Los pedidos se cierran por WhatsApp: cada botón
abre un mensaje ya redactado con el modelo y la talla que el visitante eligió,
para que solo tenga que pulsar enviar.

Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4.
La página se genera de forma estática, así que se puede publicar en cualquier
hosting de sitios estáticos.

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:3000
```

Otros comandos:

```bash
npm run build      # compilación de producción
npm run start      # sirve la compilación de producción
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir archivos
```

## Qué hay que completar antes de publicar

Todo el contenido variable vive en dos archivos. Busca `PENDIENTE` y `TODO(cliente)`.

| Archivo | Qué contiene |
| --- | --- |
| `src/config/site.ts` | Nombre, dominio, **número de WhatsApp**, correo, ubicación, horario, redes, moneda y envíos |
| `src/data/products.ts` | Modelos del catálogo: nombre, categoría, precio, tela, tallas y colores. La categoría (camisetas, playeras, hoodies) decide además qué silueta se dibuja |

Ya confirmado: el negocio opera en Guatemala, los precios van en quetzales y
los pedidos entran al WhatsApp +502 5969 5599.

Pendientes conocidos:

- [ ] **Modelos, precios y fotografía reales.** Los seis modelos del catálogo son de ejemplo.
- [ ] Dirección y horario reales, más el correo de contacto.
- [ ] Dominio final, para el SEO y los datos estructurados.
- [ ] Medidas reales en la guía de tallas (`src/components/size-guide.tsx`).
- [ ] Reseñas reales, o quitar la sección de testimonios (`src/components/testimonials.tsx`). Los testimonios inventados hacen más daño que no tener ninguno.
- [ ] Logotipo original. La marca actual está vectorizada a partir de una captura
      de 323 px (ver `public/brand/LEEME.md`); un SVG de diseñador daría filos
      más limpios.

## Decisiones de diseño

- **Gimnasio de noche.** El fondo es un negro azulado, no un gris neutro: el
  azul lo emparenta con la luz fría de un gimnasio a oscuras. El ambiente se
  construye por capas en `src/components/gym-backdrop.tsx` —dos focos de neón en
  esquinas opuestas, la rejilla del piso en perspectiva, viñeteado y grano— en
  lugar de con una fotografía de fondo, que competiría con el texto y pesaría.
- **Cada color significa una sola cosa.** Amarillo voltio: la acción, todo lo que
  lleva a pedir por WhatsApp. Azul hielo: el acento frío, destellos y datos
  secundarios. Cromado: los titulares, con el brillo de una barra olímpica.
- **La identidad sale del material del cliente**, no de suposiciones: el eslogan,
  el nombre de la línea, la tipografía de pincel y la foto de portada se
  extrajeron del cartel que entregó. Ver `public/brand/LEEME.md`.
- **Sin fotografía de producto inventada.** Mientras no haya catálogo
  fotográfico, cada prenda se dibuja con una silueta vectorial propia según su
  categoría (`src/components/garment-art.tsx`), de modo que la diferencia entre
  una camiseta sin mangas, una playera y un hoodie se lee de un vistazo.
- **Toda la paleta y la tipografía** se definen como variables en
  `src/app/globals.css`. Recolorear el sitio es cambiar ese bloque.

## Estructura

```
src/
  app/           layout, página, sitemap, robots, icono
  components/    secciones de la página y primitivas de interfaz
  config/site.ts configuración de marca
  data/          catálogo
  lib/           formato de precios y enlaces de WhatsApp
```
