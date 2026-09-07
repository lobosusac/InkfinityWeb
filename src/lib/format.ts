import { site } from "@/config/site";

/** Formatea un precio con el símbolo y la separación de miles de la configuración. */
export function formatPrice(amount: number): string {
  const digits = new Intl.NumberFormat(site.currency.locale, {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${site.currency.symbol}${digits}`;
}
