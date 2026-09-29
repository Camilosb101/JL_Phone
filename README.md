# JL Mobile

Tienda de celulares (iPhone y Samsung) hecha con JavaScript, Vite y Bootstrap.

## Cómo ver la página (con Live Server)

Tú abres la tienda con **Live Server** desde el archivo `index.html` de la
raíz del proyecto. Para que funcione y muestre tus últimos cambios:

### 1. La primera vez (instalar)

Desde la carpeta `Frontend`:

```bash
npm install
```

### 2. Cada vez que cambies el código

Después de modificar cualquier cosa (productos, estilos, imágenes, textos),
genera la versión que lee Live Server. Desde la carpeta `Frontend`:

```bash
npm run build
```

### 3. Abrir la página

Haz clic derecho en el `index.html` de la **raíz** del proyecto y elige
"Open with Live Server".

> IMPORTANTE: si cambias algo y NO lo ves reflejado en la página, es porque
> falta correr `npm run build`. Ese paso vuelve a generar el archivo que Live
> Server necesita. Es el error más común, tenlo presente.

## Conectar el backend

Cuando tengas tu backend, la conexión es muy sencilla. Todo está explicado
paso a paso en el archivo **GUIA_BACKEND.md**.

## Estructura rápida

- `Frontend/src/js/data/products.js` — los productos de ejemplo (temporales).
- `Frontend/src/js/config.js` — dónde eliges datos locales o backend.
- `Frontend/src/assets/images/` — imágenes de los productos.
- `Frontend/vite.config.js` — configuración de compilación (comentada en español).
