import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function standalonePlugin() {
  return {
    name: 'standalone-plugin',
    closeBundle() {
      const distAssetsDir = path.resolve(__dirname, 'dist/assets');
      if (!fs.existsSync(distAssetsDir)) return;

      const files = fs.readdirSync(distAssetsDir);
      const jsFile = files.find((f) => f.startsWith('index-') && f.endsWith('.js'));
      const cssFile = files.find((f) => f.startsWith('index-') && f.endsWith('.css'));
      const logoFile = files.find((f) => f.startsWith('logo-') && f.endsWith('.png'));

      if (!jsFile) return;

      const jsPath = path.join(distAssetsDir, jsFile);
      const content = fs.readFileSync(jsPath, 'utf-8');

      // Replace Vite's new URL(..., import.meta.url).href with window.__ASSET_BASE__ + filename
      const regex = /(?:""\+|\x27\x27\+)?new URL\(("([^"\\]|\\.)*"|\x27([^\x27\\]|\\.)*\x27),\s*import\.meta\.url\)\.href/g;
      const converted = content.replace(regex, '((window.__ASSET_BASE__||"./Frontend/dist/assets/")+ $1)');

      const standaloneJsPath = path.join(distAssetsDir, 'app-standalone.js');
      fs.writeFileSync(standaloneJsPath, converted, 'utf-8');

      // Update root index.html so it points to the latest css, js and logo
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

      // Update Frontend/dist/index.html so it also works if opened directly
      const distHtmlPath = path.resolve(__dirname, 'dist/index.html');
      const distHtml = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="JL Mobile, smartphones premium seleccionados para tu próximo upgrade." />
    <title>JL Mobile | Tecnología que se siente</title>
    <link rel="icon" type="image/png" href="./assets/${logoFile || 'logo.png'}" />
    <link rel="apple-touch-icon" href="./assets/${logoFile || 'logo.png'}" />
    ${cssFile ? `<link rel="stylesheet" href="./assets/${cssFile}" />` : ''}
    <script>
      window.__ASSET_BASE__ = './assets/';
    </script>
  </head>
  <body>
    <div id="app">
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0b0f19; color: #94a3b8; font-family: sans-serif;">
        <p>Cargando JL Mobile...</p>
      </div>
    </div>
    <script defer src="./assets/app-standalone.js"></script>
  </body>
</html>
`;
      fs.writeFileSync(distHtmlPath, distHtml, 'utf-8');

      // Update Frontend/index.html so Live Server on Frontend folder also works immediately
      const frontendHtmlPath = path.resolve(__dirname, 'index.html');
      const frontendHtml = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="JL Mobile, smartphones premium seleccionados para tu próximo upgrade." />
    <title>JL Mobile | Tecnología que se siente</title>
    <link rel="icon" type="image/png" href="./dist/assets/${logoFile || 'logo.png'}" />
    <link rel="apple-touch-icon" href="./dist/assets/${logoFile || 'logo.png'}" />
    ${cssFile ? `<link rel="stylesheet" href="./dist/assets/${cssFile}" />` : ''}
    <script>
      window.__ASSET_BASE__ = './dist/assets/';
    </script>
  </head>
  <body>
    <div id="app">
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0b0f19; color: #94a3b8; font-family: sans-serif;">
        <p>Cargando JL Mobile...</p>
      </div>
    </div>
    <script defer src="./dist/assets/app-standalone.js"></script>
    <script type="module" src="./src/js/main.js"></script>
  </body>
</html>
`;
      fs.writeFileSync(frontendHtmlPath, frontendHtml, 'utf-8');

      console.log('✓ Standalone bundle, root index.html, Frontend/index.html and dist/index.html updated successfully!');
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [standalonePlugin()]
});
