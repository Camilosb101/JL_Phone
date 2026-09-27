// ============================================================
//  MAPA DE IMÁGENES LOCALES
// ============================================================
// Vite lee todas las imágenes de assets/images en tiempo de compilación.
// { eager: true } hace que las URLs queden disponibles de inmediato.
const modulos = import.meta.glob(
  '../../assets/images/**/*.{png,jpg,jpeg,webp}',
  { eager: true, query: '?url', import: 'default' }
);

const PREFIJO_BASE = '../../assets/images/';
const PREFIJO_IPHONE = '../../assets/images/Imagen_Iphone/';
const imagenes = {};

for (const rutaCompleta in modulos) {
  // Ruta relativa desde assets/images/ (ej. "Imagen_Samnsung/S24_Ultra/s24-ultra-alpha.png")
  const rutaDesdeAssets = rutaCompleta.replace(PREFIJO_BASE, '');
  imagenes[rutaDesdeAssets] = modulos[rutaCompleta];

  // Compatibilidad: también registrar sin prefijos como "Imagen_Iphone/", "Imagen_Samnsung/", "USAdos/"
  const parts = rutaDesdeAssets.split('/');
  if (parts.length > 1) {
    const sinPrefijo = parts.slice(1).join('/');
    imagenes[sinPrefijo] = modulos[rutaCompleta];
  }
}

/**
 * Devuelve la URL final de una imagen local a partir de su ruta.
 *
 * @param {string} ruta - ej. 'Iphone_16_128GB_5G/iphone16128gb-5g-negro.png' o 'Imagen_Samnsung/...'
 * @returns {string} URL lista para usar en un <img src="...">
 */
export function img(ruta) {
  if (!ruta) return '';
  const limpia = ruta.replace(/^(\.\.\/)+assets\/images\//, '').replace(/^\.\//, '');
  const url = imagenes[limpia] || imagenes[ruta];
  if (!url) {
    console.warn(`[imageMap] No se encontró la imagen: "${ruta}"`);
    return '';
  }
  return url;
}
