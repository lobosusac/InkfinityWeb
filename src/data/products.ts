/**
 * Catálogo.
 *
 * TODO(cliente): reemplazar por los modelos, precios y fotos reales.
 * Mientras no haya fotografía, cada modelo se dibuja con la ilustración
 * vectorial de <GarmentArt />, usando la silueta y los colores definidos aquí.
 */

export const categories = [
  { slug: "todas", label: "Todas" },
  { slug: "camisetas", label: "Camisetas" },
  { slug: "playeras", label: "Playeras" },
  { slug: "hoodies", label: "Hoodies" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];
export type Garment = Exclude<CategorySlug, "todas">;

export type Product = {
  slug: string;
  name: string;
  /** La categoría define además qué silueta se dibuja. */
  category: Garment;
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
    slug: "volt",
    name: "Volt",
    category: "camisetas",
    price: 129,
    compareAt: 159,
    blurb: "Sin mangas, negra, con el infinito en amarillo voltio al pecho.",
    fabric: "Micro poliéster 145 g · secado rápido",
    sizes: SIZES,
    art: { body: "#12161f", sleeve: "#0b0e14", accent: "#e8ff2e" },
    badge: "Más vendida",
  },
  {
    slug: "hierro",
    name: "Hierro",
    category: "camisetas",
    price: 129,
    blurb: "Sin mangas en gris grafito, sisa amplia para hombro libre.",
    fabric: "Piqué deportivo 160 g · antibacterial",
    sizes: SIZES,
    art: { body: "#39404f", sleeve: "#272d39", accent: "#edf1f7" },
  },
  {
    slug: "eclipse",
    name: "Eclipse",
    category: "playeras",
    price: 149,
    blurb: "Negra sobre negra, corte atlético y costuras planas.",
    fabric: "Micro poliéster 145 g · secado rápido",
    sizes: SIZES,
    art: { body: "#141822", sleeve: "#0b0e14", accent: "#edf1f7" },
  },
  {
    slug: "hielo",
    name: "Hielo",
    category: "playeras",
    price: 159,
    blurb: "Manga corta con el estampado en azul neón, sublimación total.",
    fabric: "Micro poliéster 145 g · sublimación total",
    sizes: SIZES,
    art: { body: "#171d2b", sleeve: "#232c42", accent: "#2fd2ff" },
    badge: "Nueva",
  },
  {
    slug: "culture-fit",
    name: "Culture Fit",
    category: "hoodies",
    price: 299,
    compareAt: 349,
    blurb: "El hoodie de la línea: felpa perchada y capucha forrada.",
    fabric: "Felpa perchada 320 g · interior afelpado",
    sizes: SIZES,
    art: { body: "#10141d", sleeve: "#171d29", accent: "#e8ff2e" },
    badge: "Línea Culture Fit",
  },
  {
    slug: "boveda",
    name: "Bóveda",
    category: "hoodies",
    price: 279,
    blurb: "Hoodie gris jaspeado, bolsillo canguro y puños elásticos.",
    fabric: "Felpa perchada 320 g · algodón y poliéster",
    sizes: SIZES,
    art: { body: "#3b4250", sleeve: "#2b313d", accent: "#edf1f7" },
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
