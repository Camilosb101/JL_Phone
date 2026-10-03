// ============================================================
//  SERVICIO DE WHATSAPP
// ============================================================
// Un solo lugar para abrir WhatsApp con un mensaje. Lo usan los
// botones "Lo quiero" de los productos y el botón del Plan Canje.
//
// El número se configura en config.js (WHATSAPP_NUMERO).
// Si todavía no hay número, se avisa amablemente en vez de romper.
// ============================================================

import { WHATSAPP_NUMERO } from '../config.js';
import { formatPrice } from '../utils/format.js';

/**
 * Abre WhatsApp (app o web) con un mensaje ya escrito.
 * @param {string} mensaje - texto del mensaje (sin codificar).
 * @returns {boolean} true si abrió WhatsApp, false si falta el número.
 */
export function abrirWhatsApp(mensaje) {
  if (!WHATSAPP_NUMERO) {
    alert('El WhatsApp estará disponible muy pronto. ¡Gracias por tu interés!');
    return false;
  }
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank', 'noopener');
  return true;
}

/**
 * Abre WhatsApp con el interés por UN producto.
 * @param {Object} product - el producto.
 * @param {Object} [opciones] - { color, almacenamiento } elegidos (opcional).
 */
export function pedirProductoPorWhatsApp(product, opciones = {}) {
  const color = opciones.color || product.colors?.[0] || '';
  const almacenamiento = opciones.almacenamiento || product.storage?.[0] || '';

  const detalles = [
    `*${product.name}*`,
    almacenamiento ? `Almacenamiento: ${almacenamiento}` : '',
    color ? `Color: ${color}` : '',
    product.price ? `Precio: ${formatPrice(product.price)}` : ''
  ].filter(Boolean).join('\n');

  const mensaje = `¡Hola JL Phone! 🙌 Estoy interesado en este equipo:\n\n${detalles}\n\n¿Me das más información?`;
  abrirWhatsApp(mensaje);
}
