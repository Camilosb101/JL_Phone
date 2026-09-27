// ============================================================
//  SERVICIO DE PRODUCTOS  (la única "puerta de datos")
// ============================================================
// Toda la página pide los productos AQUÍ y solo aquí.
// Ningún componente lee el array de productos directamente.
//
// ¿Por qué? Porque así, el día que conectes el backend, solo cambias
// este archivo (y config.js). El resto de la página no se toca.
//
// Según config.js:
//   - FUENTE_DE_DATOS = 'local' -> devuelve los productos del array local.
//   - FUENTE_DE_DATOS = 'api'   -> los pide a tu backend con fetch.
// ============================================================

import { FUENTE_DE_DATOS, API_URL } from '../config.js';
import { products as productosLocales } from '../data/products.js';

/**
 * Devuelve TODOS los productos de la tienda.
 * @returns {Promise<Array>} lista de productos
 */
export async function getAllProducts() {
  if (FUENTE_DE_DATOS === 'api') {
    // --- MODO BACKEND ---
    // Llama a tu API. Se espera que responda un array de productos en JSON.
    const respuesta = await fetch(`${API_URL}/products`);
    if (!respuesta.ok) {
      throw new Error(`El backend respondió con error: ${respuesta.status}`);
    }
    return await respuesta.json();
  }

  // --- MODO LOCAL (por defecto) ---
  // Devolvemos los productos del archivo local.
  return productosLocales;
}

/**
 * Devuelve UN producto por su id, o null si no existe.
 * @param {string} id - identificador del producto
 * @returns {Promise<Object|null>} el producto o null
 */
export async function getProductById(id) {
  if (FUENTE_DE_DATOS === 'api') {
    // --- MODO BACKEND ---
    const respuesta = await fetch(`${API_URL}/products/${id}`);
    if (respuesta.status === 404) {
      return null;
    }
    if (!respuesta.ok) {
      throw new Error(`El backend respondió con error: ${respuesta.status}`);
    }
    return await respuesta.json();
  }

  // --- MODO LOCAL (por defecto) ---
  const producto = productosLocales.find((p) => p.id === id);
  return producto ?? null;
}
