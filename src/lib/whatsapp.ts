import { site } from "@/config/site";

/**
 * Construye un enlace de WhatsApp con el mensaje ya redactado.
 *
 * La clave de conversión está aquí: el cliente no tiene que escribir nada,
 * solo pulsar enviar. Cada botón del sitio precarga su propio contexto.
 */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Mensaje para el botón general de contacto. */
export function waGeneral(): string {
  return waLink(
    `Hola ${site.name}, vengo de la página web y quiero información sobre las camisetas, playeras y hoodies.`,
  );
}

/** Mensaje para pedir un modelo concreto, con talla y cantidad. */
export function waProduct(opts: {
  product: string;
  size?: string;
  quantity?: number;
}): string {
  const lines = [
    `Hola ${site.name}, quiero pedir esta prenda:`,
    ``,
    `• Modelo: ${opts.product}`,
    `• Talla: ${opts.size ?? "por definir"}`,
    `• Cantidad: ${opts.quantity ?? 1}`,
    ``,
    `¿Me confirman disponibilidad y total?`,
  ];
  return waLink(lines.join("\n"));
}

/** Mensaje para cotización de equipos y pedidos por volumen. */
export function waTeam(): string {
  const lines = [
    `Hola ${site.name}, quiero cotizar ropa para mi gimnasio o equipo.`,
    ``,
    `• Cantidad aproximada:`,
    `• Tipo de prenda (camiseta, playera o hoodie):`,
    `• ¿Llevan logotipo y nombres?:`,
    `• ¿Para cuándo los necesito?:`,
  ];
  return waLink(lines.join("\n"));
}
