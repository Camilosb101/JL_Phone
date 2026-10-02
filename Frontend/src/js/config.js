// ============================================================
//  CONFIGURACIÓN GLOBAL DE LA TIENDA
// ============================================================
// Este es el ÚNICO lugar donde configuras cómo la página obtiene
// los datos. No necesitas tocar nada más en el resto del proyecto.
//
//  - FUENTE_DE_DATOS = 'local'  -> usa los productos de src/js/data/products.js
//                                  (ideal mientras no tienes backend)
//  - FUENTE_DE_DATOS = 'api'    -> pide los productos a tu backend real
//                                  usando la dirección de API_URL
//
// Cuando tengas el backend listo:
//   1. Cambia FUENTE_DE_DATOS a 'api'
//   2. Pon la dirección de tu backend en API_URL
//   3. Listo. La página completa funcionará con datos reales.
// ============================================================

export const FUENTE_DE_DATOS = 'local'; // 'local' | 'api'

// Dirección base de tu backend. Ejemplos:
//   'http://localhost:3000/api'   (mientras desarrollas en tu PC)
//   'https://mi-tienda.com/api'   (cuando ya esté publicado en internet)
export const API_URL = 'http://localhost:3000/api';

// ============================================================
//  WHATSAPP
// ============================================================
// Número de WhatsApp del negocio para recibir pedidos y consultas.
// Formato internacional SIN espacios, SIN "+" y SIN guiones.
// Ejemplo Colombia: 57 + número => '573001234567'
//
// MIENTRAS NO TENGAS EL NÚMERO: déjalo vacío (''). Los botones
// mostrarán un aviso amable de "próximamente" en vez de romperse.
// Cuando tengas el número, ponlo aquí y TODO queda conectado solo.
export const WHATSAPP_NUMERO = '';
