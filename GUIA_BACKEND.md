# Guía: cómo conectar el backend a la tienda JL Mobile

Esta guía está pensada para que, aunque seas nuevo en programación, puedas
conectar la página con tu backend **cambiando lo mínimo posible**.

La página ya está preparada: hoy funciona con productos guardados en un archivo
local, y el día que tengas tu backend solo cambias **un archivo** para que
empiece a usar datos reales.

---

## 1. Cómo funciona la página hoy (modo local)

- Los productos de ejemplo viven en:
  `Frontend/src/js/data/products.js`
- Toda la página pide los productos a un solo lugar llamado **"la puerta de datos"**:
  `Frontend/src/js/services/productService.js`
- Ningún otro archivo lee los productos directamente. Eso es lo que hace fácil
  el cambio al backend.

Mientras no tengas backend, no tienes que tocar nada. La tienda funciona sola.

---

## 2. El único archivo que vas a cambiar: `config.js`

Ruta: `Frontend/src/js/config.js`

Ahí hay dos valores:

```js
export const FUENTE_DE_DATOS = 'local'; // 'local' | 'api'
export const API_URL = 'http://localhost:3000/api';
```

Para conectar el backend haces **solo dos cosas**:

1. Cambia `'local'` por `'api'`:
   ```js
   export const FUENTE_DE_DATOS = 'api';
   ```
2. Pon la dirección de tu backend en `API_URL`. Por ejemplo:
   - Mientras pruebas en tu computador: `'http://localhost:3000/api'`
   - Cuando ya esté publicado en internet: `'https://tu-dominio.com/api'`

Y listo. La página completa (catálogo, buscador, filtros y la página de detalle)
empezará a usar datos reales. **No tienes que tocar ningún otro archivo.**

---

## 3. Qué debe responder tu backend

La página espera dos direcciones (endpoints). Usa la dirección que pongas en
`API_URL` como base.

### a) Lista de todos los productos

- **Petición:** `GET {API_URL}/products`
- **Ejemplo:** `GET http://localhost:3000/api/products`
- **Debe responder:** un array (una lista) de productos en formato JSON.

### b) Un producto por su id

- **Petición:** `GET {API_URL}/products/:id`
- **Ejemplo:** `GET http://localhost:3000/api/products/iphone-15`
- **Debe responder:** un solo producto en formato JSON.
- Si el producto no existe, debe responder con código **404**.

---

## 4. Cómo debe verse cada producto (muy importante)

Para que la página muestre todo bien, cada producto que devuelva tu backend
debe tener **exactamente estos campos** (los mismos que ya usa el archivo local
`products.js`):

```json
{
  "id": "iphone-15",
  "brand": "Apple",
  "model": "iPhone 15",
  "name": "iPhone 15",
  "price": 1800000,
  "images": ["https://direccion-de-la-imagen.jpg"],
  "colors": ["Azul", "Verde", "Negro"],
  "storage": ["128 GB", "256 GB", "512 GB"],
  "description": "Una cámara increíble, USB-C y el diseño que siempre quisiste.",
  "specifications": {
    "pantalla": "6.1 pulgadas Super Retina XDR",
    "camara": "48 MP principal",
    "bateria": "Hasta 20 horas"
  },
  "category": "Apple",
  "stock": 12,
  "featured": false
}
```

Qué significa cada campo:

| Campo            | Qué es                                                        |
|------------------|--------------------------------------------------------------|
| `id`             | Identificador único (texto, sin espacios). No se puede repetir. |
| `brand`          | Marca. Se usa para filtrar: escribe `"Apple"` o `"Samsung"`. |
| `model`          | Modelo (aparece encima del nombre en la tarjeta).            |
| `name`           | Nombre que se ve en grande.                                  |
| `price`          | Precio, solo el número (sin puntos ni símbolo `$`).          |
| `images`         | Lista de direcciones de imágenes. Se muestra la primera.     |
| `colors`         | Lista de colores disponibles.                                |
| `storage`        | Lista de capacidades (ej. `"128 GB"`).                       |
| `description`    | Texto corto que describe el equipo.                          |
| `specifications` | Objeto con detalles (pantalla, cámara, batería, etc.).       |
| `category`       | Categoría (puedes usar la misma que `brand`).                |
| `stock`          | Cuántas unidades hay. Si es 5 o menos, aparece un aviso.     |
| `featured`       | `true` o `false`. Para marcar destacados.                    |

> Consejo: mantén los **mismos nombres de campos**. Si tu backend usa otros
> nombres (por ejemplo `precio` en vez de `price`), la página no los entenderá.
> Lo más fácil es que tu backend responda con estos mismos nombres.

---

## 5. Sobre las imágenes de los modelos

Tienes muchas imágenes guardadas en:
`Frontend/src/assets/images/Imagen_Iphone/...`

Para usarlas en el catálogo tienes dos caminos:

1. **Servir las imágenes desde tu backend** y poner esa dirección en el campo
   `images` de cada producto. Ejemplo:
   `"images": ["https://tu-dominio.com/imagenes/iphone-15-azul.jpg"]`

2. **Usar las imágenes del propio proyecto.** En ese caso conviene organizarlas
   y referenciarlas desde `products.js`. Si quieres hacer esto, avísame y te
   ayudo a conectarlas una por una con cada modelo.

---

## 6. Prueba rápida para saber si quedó bien conectado

1. Enciende tu backend.
2. Abre en el navegador: `http://localhost:3000/api/products`
   (cambia la dirección por la tuya). Debes ver la lista de productos en JSON.
3. En `config.js` pon `FUENTE_DE_DATOS = 'api'` y la `API_URL` correcta.
4. Corre la página:
   ```bash
   cd Frontend
   npm run dev
   ```
5. Si ves los productos en el catálogo, ¡quedó conectado!

---

## 7. Si algo no aparece

- Abre la consola del navegador (tecla **F12**, pestaña "Console").
- Si ves un error de "CORS", tu backend necesita **permitir peticiones** desde
  la dirección de la página. Es un ajuste que se hace en el backend.
- Si ves un error de conexión, revisa que el backend esté encendido y que la
  `API_URL` esté bien escrita.
