import { waGeneral } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui";

/**
 * Botón flotante de WhatsApp.
 *
 * Presente en toda la página: el visitante decide comprar en momentos
 * impredecibles del scroll, y el canal de pedido debe estar siempre a un toque.
 */
export function WhatsAppFab() {
  return (
    <a
      href={waGeneral()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-action text-action-ink shadow-lg shadow-black/50 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
