import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================
//  PLUGIN "STANDALONE" (para abrir la página con Live Server)
// ============================================================
// ¿Para qué sirve? Tú abres la tienda con Live Server desde el
// index.html de la RAÍZ del proyecto. Live Server solo sirve
// archivos; no compila ni entiende los módulos de código.
//
// Por eso, después de cada "npm run build", este plugin:
//   1. Toma el JavaScript ya compilado por Vite.
//   2. Ajusta cómo encuentra las imágenes (usando window.__ASSET_BASE__).
//   3. Lo guarda como "app-standalone.js".
//   4. Reescribe el index.html de la raíz para que cargue ese archivo.
//
// RESULTADO: puedes abrir el index.html de la raíz con Live Server
// y la tienda funciona, sin necesidad de un servidor especial.
//
// IMPORTANTE: cada vez que cambies el código (JS, CSS o productos),
// debes correr "npm run build" para ver los cambios en Live Server.
// ============================================================
function standalonePlugin() {
  return {
    name: 'standalone-plugin',
    // closeBundle se ejecuta al terminar "npm run build".
    closeBundle() {
      const distAssetsDir = path.resolve(__dirname, 'dist/assets');
      if (!fs.existsSync(distAssetsDir)) return;

      // Vite genera archivos con nombres únicos (ej. index-a1b2c3.js).
      // Buscamos los recién generados para el JS, el CSS y el logo.
      const files = fs.readdirSync(distAssetsDir);
      const jsFile = files.find((f) => f.startsWith('index-') && f.endsWith('.js'));
      const cssFile = files.find((f) => f.startsWith('index-') && f.endsWith('.css'));
      const logoFile = files.find((f) => f.startsWith('favicon-') && f.endsWith('.png'));

      if (!jsFile) return;

      // 1) Tomamos el JS compilado y reemplazamos la forma en que Vite
      //    busca las imágenes por una variable global (window.__ASSET_BASE__),
      //    que sí funciona al abrir el archivo con Live Server.
      const jsPath = path.join(distAssetsDir, jsFile);
      const content = fs.readFileSync(jsPath, 'utf-8');
      const regex = /(?:""\+|\x27\x27\+)?new URL\(("([^"\\]|\\.)*"|\x27([^\x27\\]|\\.)*\x27),\s*import\.meta\.url\)\.href/g;
      const converted = content.replace(regex, '((window.__ASSET_BASE__||"./Frontend/dist/assets/")+ $1)');

      // 2) Lo guardamos como app-standalone.js
      const standaloneJsPath = path.join(distAssetsDir, 'app-standalone.js');
      fs.writeFileSync(standaloneJsPath, converted, 'utf-8');

      // 3) Reescribimos el index.html de la RAÍZ del proyecto (el que abres
      //    con Live Server) para que apunte al CSS, logo y app-standalone.js
      //    recién generados.
      const rootHtmlPath = path.resolve(__dirname, '../index.html');
      const rootHtml = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="JL Mobile, smartphones premium seleccionados para tu próximo upgrade." />
    <title>JL Mobile | Tecnología que se siente</title>
    <link rel="icon" type="image/png" href="./Frontend/dist/assets/${logoFile || 'logo.png'}" />
    <link rel="apple-touch-icon" href="./Frontend/dist/assets/${logoFile || 'logo.png'}" />
    ${cssFile ? `<link rel="stylesheet" href="./Frontend/dist/assets/${cssFile}" />` : ''}
    <script>
      window.__ASSET_BASE__ = './Frontend/dist/assets/';
    </script>
  </head>
  <body>
    <div id="app">
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0b0f19; color: #94a3b8; font-family: sans-serif;">
        <p>Cargando JL Mobile...</p>
      </div>
    </div>
    <script defer src="./Frontend/dist/assets/app-standalone.js"></script>
  </body>
</html>
`;
      fs.writeFileSync(rootHtmlPath, rootHtml, 'utf-8');

      console.log('✓ Listo: index.html de la raíz actualizado. Ábrelo con Live Server.');
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [standalonePlugin()]
});
