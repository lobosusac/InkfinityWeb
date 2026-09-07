/**
 * Catálogo.
 *
 * TODO(cliente): reemplazar por los modelos, precios y fotos reales.
 * Mientras no haya fotografía, cada modelo se dibuja con la ilustración
 * vectorial de <JerseyArt />, usando los colores definidos aquí.
 */

export const categories = [
  { slug: "todas", label: "Todas" },
  { slug: "futbol", label: "Fútbol" },
  { slug: "training", label: "Training" },
  { slug: "running", label: "Running" },
  { slug: "equipos", label: "Equipos" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type Product = {
  slug: string;
  name: string;
  category: Exclude<CategorySlug, "todas">;
  price: number;
  /** Precio anterior, para mostrar el descuento. Omitir si no aplica. */
  compareAt?: number;
  blurb: string;
  fabric: string;
  sizes: string[];
  /** Colores de la ilustración: cuerpo, mangas y detalle. */
  art: { body: string; sleeve: string; accent: string };
  badge?: string;
};

export const SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

export const products: Product[] = [
  {
    slug: "eclipse",
    name: "Eclipse",
    category: "futbol",
    price: 149,
    compareAt: 189,
    blurb: "Negra sobre negra, con el infinito al centro del pecho.",
    fabric: "Micro poliéster 145 g · secado rápido",
    sizes: SIZES,
    art: { body: "#141418", sleeve: "#0b0b0e", accent: "#f6f6f4" },
    badge: "Más vendida",
  },
  {
    slug: "hueso",
    name: "Hueso",
    category: "training",
    price: 139,
    blurb: "Blanco hueso, corte atlético y costuras planas.",
    fabric: "Piqué deportivo 160 g · antibacterial",
    sizes: SIZES,
    art: { body: "#e9e9e4", sleeve: "#cfcfc8", accent: "#0b0b0e" },
  },
  {
    slug: "tribal",
    name: "Tribal",
    category: "futbol",
    price: 169,
    blurb: "Sublimación total con el patrón tribal de la marca.",
    fabric: "Micro poliéster 145 g · sublimación total",
    sizes: SIZES,
    art: { body: "#1c1c22", sleeve: "#2b2b34", accent: "#f6f6f4" },
    badge: "Nueva",
  },
  {
    slug: "acero",
    name: "Acero",
    category: "running",
    price: 139,
    blurb: "Gris grafito ultraligera, pensada para kilómetros largos.",
    fabric: "Poliéster perforado 120 g · máxima ventilación",
    sizes: SIZES,
    art: { body: "#3a3a44", sleeve: "#22222a", accent: "#f6f6f4" },
  },
  {
    slug: "contra",
    name: "Contra",
    category: "training",
    price: 159,
    blurb: "Cuerpo negro con mangas en contraste y detalle blanco.",
    fabric: "Micro poliéster 145 g · secado rápido",
    sizes: SIZES,
    art: { body: "#0f0f13", sleeve: "#e9e9e4", accent: "#f6f6f4" },
  },
  {
    slug: "legado",
    name: "Legado",
    category: "equipos",
    price: 129,
    blurb: "Base para uniformes: tu escudo, nombres y números incluidos.",
    fabric: "Micro poliéster 145 g · personalización completa",
    sizes: SIZES,
    art: { body: "#16161b", sleeve: "#16161b", accent: "#8f8f98" },
    badge: "Desde 10 piezas",
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
