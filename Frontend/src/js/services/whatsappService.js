// ============================================================
//  SERVICIO DE WHATSAPP
// ============================================================
// Un solo lugar para abrir WhatsApp con un mensaje. Lo usan el
// carrito (checkout) y el botón del Plan Canje.
//
// El número se configura en config.js (WHATSAPP_NUMERO).
// Si todavía no hay número, se avisa amablemente en vez de romper.
// ============================================================

import { WHATSAPP_NUMERO } from '../config.js';

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
 * Arma el mensaje de pedido a partir de los items del carrito.
 * @param {Array} items - lista de { product, quantity }.
 * @param {number} total - total del pedido.
 * @param {Function} formatPrice - función para formatear precios.
 * @returns {string} mensaje listo para enviar.
 */
export function construirMensajePedido(items, total, formatPrice) {
  const lineas = items.map((item, i) => {
    const p = item.product;
    const color = p.colors?.[0] ? ` | Color: ${p.colors[0]}` : '';
    const almacenamiento = p.storage?.[0] ? ` | ${p.storage[0]}` : '';
    return `${i + 1}. ${p.name}${almacenamiento}${color} x${item.quantity} — ${formatPrice(p.price * item.quantity)}`;
  });

  return [
    '¡Hola JL Phone! 🙌 Quiero hacer este pedido:',
    '',
    ...lineas,
    '',
    `Total estimado: ${formatPrice(total)}`,
    '',
    '¿Me ayudan a concretarlo?'
  ].join('\n');
}
