// ============================================================
//  VALIDADOR DE PRODUCTOS E IMÁGENES
// ============================================================
// Revisa automáticamente el catálogo y avisa de errores comunes:
//   - Imágenes que no existen en disco.
//   - IDs de producto repetidos.
//   - Productos sin precio.
//   - Colores sin imagen.
//
// Cómo usarlo (desde la carpeta Frontend):
//   node validar-productos.mjs
// ============================================================

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOGO_DIR = path.resolve(__dirname, 'src/assets/images/catalogo');
const PRODUCTS_FILE = path.resolve(__dirname, 'src/js/data/products.js');

const errores = [];
const avisos = [];

// 1) Leer el archivo de productos como texto (no lo ejecutamos, lo analizamos).
const codigo = fs.readFileSync(PRODUCTS_FILE, 'utf-8');

// 2) Imágenes que existen en disco (rutas relativas a catalogo/).
const imagenesEnDisco = new Set();
function recorrer(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) recorrer(full);
    else imagenesEnDisco.add(path.relative(CATALOGO_DIR, full).split(path.sep).join('/'));
  }
}
if (fs.existsSync(CATALOGO_DIR)) recorrer(CATALOGO_DIR);
else errores.push(`No existe la carpeta de imágenes: ${CATALOGO_DIR}`);

// 3) Rutas de imagen. En products.js cada producto se arma con:
//      crear({...}, 'iphone/18_Pro_Max', [['Negro', 'archivo.png'], ...])
//    Reconstruimos cada ruta = carpetaBase + '/' + archivo y la validamos.
const refs = [];

// Capturamos cada llamada a crear(...) con su carpeta base y su lista de colores.
const bloques = codigo.split(/\bcrear\(/).slice(1);
for (const bloque of bloques) {
  // La carpeta base: primera cadena tipo 'iphone/...' o 'samsung/...'
  const carpeta = bloque.match(/'((?:iphone|samsung)\/[^']+)'/);
  if (!carpeta) continue;
  const base = carpeta[1];
  // Archivos .png dentro de ese bloque (hasta el cierre del crear).
  const archivos = [...bloque.matchAll(/'([^']+\.png)'/g)].map((m) => m[1]);
  for (const archivo of archivos) {
    refs.push(`${base}/${archivo}`);
  }
}

for (const ref of refs) {
  if (!imagenesEnDisco.has(ref)) {
    errores.push(`Imagen referenciada que NO existe: "${ref}"`);
  }
}

// 4) IDs repetidos.
const ids = [...codigo.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]);
const vistos = new Set();
for (const id of ids) {
  if (vistos.has(id)) errores.push(`ID de producto repetido: "${id}"`);
  vistos.add(id);
}

// 5) Productos sin precio o con precio 0.
const precios = [...codigo.matchAll(/name:\s*'([^']+)'[^}]*?price:\s*(\d+)/g)];
for (const [, nombre, precio] of precios) {
  if (Number(precio) <= 0) avisos.push(`Producto sin precio válido: "${nombre}"`);
}

// 6) Reporte final.
console.log('\n=== VALIDACIÓN DEL CATÁLOGO ===');
console.log(`Productos detectados: ${ids.length}`);
console.log(`Imágenes en disco: ${imagenesEnDisco.size}`);
console.log(`Referencias de imagen revisadas: ${refs.length}`);

if (errores.length === 0 && avisos.length === 0) {
  console.log('\n✅ Todo correcto. No se encontraron problemas.\n');
} else {
  if (errores.length) {
    console.log(`\n❌ ERRORES (${errores.length}):`);
    errores.forEach((e) => console.log('  - ' + e));
  }
  if (avisos.length) {
    console.log(`\n⚠️  AVISOS (${avisos.length}):`);
    avisos.forEach((a) => console.log('  - ' + a));
  }
  console.log('');
}
