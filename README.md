# Inkfinity Sportwear — página de ventas

Landing de ventas con catálogo para playeras deportivas. Los pedidos se cierran
por WhatsApp: cada botón abre un mensaje ya redactado con el modelo y la talla
que el visitante eligió, para que solo tenga que pulsar enviar.

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
| `src/data/products.ts` | Modelos del catálogo: nombre, categoría, precio, tela, tallas y colores |

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

- **Marca monocromática**, tomada del logotipo: negro profundo, blanco hueso y
  grises. El único color saturado de todo el sitio es el verde de WhatsApp, y
  está reservado exclusivamente a los botones de pedido, de modo que el color
  señala siempre la misma acción.
- **Sin fotografía inventada.** Mientras no haya catálogo fotográfico, cada
  modelo se dibuja con una ilustración vectorial (`src/components/jersey-art.tsx`)
  que comunica el producto sin fingir ser una foto.
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
