/**
 * Punto único de configuración de la marca.
 *
 * TODO(cliente): confirmar los valores marcados como PENDIENTE antes de publicar.
 * Todo el sitio lee de aquí; no hay datos de marca escritos a mano en los componentes.
 */
export const site = {
  /** PENDIENTE: nombre comercial definitivo de la línea deportiva. */
  name: "Inkfinity",
  /** Se muestra junto al nombre en el encabezado. */
  tagline: "Sportwear",
  /** PENDIENTE: dominio final, usado para SEO y datos estructurados. */
  url: "https://example.com",

  description:
    "Playeras deportivas de alto rendimiento: tela transpirable, corte atlético y sublimación que no se despinta. Pedidos por WhatsApp.",

  /**
   * PENDIENTE: número de WhatsApp en formato internacional, solo dígitos.
   * Ejemplo Costa Rica: 506 + 8 dígitos.
   */
  whatsapp: "50600000000",

  /** PENDIENTE: correo de contacto. */
  email: "hola@example.com",

  /** PENDIENTE: ciudad y país, usados en el pie de página y el SEO local. */
  location: {
    city: "San José",
    region: "San José",
    country: "Costa Rica",
    countryCode: "CR",
  },

  /** PENDIENTE: horario real de atención. */
  hours: "Lunes a sábado, 9:00 a 18:00",

  /** PENDIENTE: usuarios reales. Deja la cadena vacía para ocultar el enlace. */
  social: {
    instagram: "",
    tiktok: "",
    facebook: "",
  },

  /** Moneda mostrada en el catálogo. PENDIENTE: confirmar país. */
  currency: {
    symbol: "₡",
    code: "CRC",
    /** Separador de miles para el formato local. */
    locale: "es-CR",
  },

  /** Envíos: se muestra en el aviso bajo el precio. */
  shipping: {
    freeFrom: 3, // envío gratis a partir de esta cantidad de piezas
    note: "Envío a todo el país. Entrega en 3 a 5 días hábiles.",
  },
} as const;

export type Site = typeof site;
