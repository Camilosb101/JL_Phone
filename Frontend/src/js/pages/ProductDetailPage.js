import { getProductById } from '../services/productService.js';
import { addToCart } from '../services/cartService.js';
import { formatPrice } from '../utils/format.js';
import { renderHeader, mountHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderCartPanel, mountCartPanel } from '../components/CartPanel.js';

export async function renderProductDetailPage(rootElement, params) {
  // Pedimos el producto a la puerta de datos (productService).
  let product = null;
  try {
    product = await getProductById(params.id);
  } catch (error) {
    console.error('No se pudo cargar el producto:', error);
    product = null;
  }

  if (!product) {
    rootElement.innerHTML = `
      ${renderHeader()}
      <main class="container section-padding" style="text-align:center;">
        <h2>Producto no encontrado</h2>
        <p class="hero-lede">El producto que buscas no existe.</p>
        <a class="btn btn-primary-brand" href="#/">Volver al inicio <span>↗</span></a>
      </main>
      ${renderFooter()}
      ${renderCartPanel()}
    `;
    mountHeader();
    mountCartPanel();
    return;
  }

  // Lista de colores con imagen. Si el producto no trae colorOptions (formato
  // viejo), armamos una lista básica usando la imagen principal, para no romper.
  const colorOptions = Array.isArray(product.colorOptions) && product.colorOptions.length > 0
    ? product.colorOptions
    : (product.colors ?? []).map((nombre) => ({
        name: nombre,
        hex: '#9a9a9a',
        image: product.images[0]
      }));

  rootElement.innerHTML = `
    ${renderHeader()}
    <main>
      <section style="position:relative; z-index:1; padding:2rem 0 4rem;">
        <div class="container">
          <a href="#/" class="btn btn-outline-light" style="margin-bottom:1.25rem; font-size:.76rem; font-weight:800;">← Volver al catálogo</a>
          <div class="row g-5 align-items-start">
            <div class="col-12 col-lg-6">
              <div class="product-card__image-wrap" style="height:clamp(340px, 45vw, 480px); border-radius:20px; overflow:hidden; background:radial-gradient(circle at 50% 50%, #ffffff 0%, #f4f5f8 60%, #e6e8ee 100%); padding:clamp(1.5rem, 3.5vw, 2.5rem); box-shadow:0 12px 32px rgba(0,0,0,0.18); border:1px solid rgba(255,255,255,0.06);">
                <img id="detailMainImage" class="product-card__image" src="${product.images[0]}" alt="${product.name}" style="width:100%; height:100%; object-fit:contain; filter:drop-shadow(0 20px 32px rgba(0,0,0,0.18)); transition:opacity .25s ease, transform .35s ease;" />
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <p class="section-kicker"><span></span> ${product.brand}</p>
              <h1 style="font-size:clamp(2.5rem,5vw,4rem); margin-bottom:1rem;">${product.name}</h1>
              <p class="hero-lede" style="max-width:100%;">${product.description}</p>
              <span class="product-card__price" style="font-size:1.8rem; display:block; margin:1.5rem 0;">${formatPrice(product.price)}</span>

              <div style="margin-bottom:2rem;">
                <p style="color:var(--color-text-muted); font-size:.72rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin-bottom:.5rem;">Almacenamiento</p>
                <div class="d-flex flex-wrap gap-2">
                  ${product.storage.map((s, i) => `<button class="filter-button ${i === 0 ? 'active' : ''}" type="button">${s}</button>`).join('')}
                </div>
              </div>

              <div style="margin-bottom:2rem;">
                <p style="color:var(--color-text-muted); font-size:.72rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin-bottom:.5rem;">
                  Color: <span id="selectedColorName" style="color:var(--color-text);">${colorOptions[0]?.name ?? ''}</span>
                </p>
                <div class="d-flex flex-wrap gap-3 align-items-center" id="colorSwatches">
                  ${colorOptions.map((c, i) => `
                    <button
                      class="color-swatch ${i === 0 ? 'active' : ''}"
                      type="button"
                      data-color-image="${c.image}"
                      data-color-name="${c.name}"
                      style="--swatch-color: ${c.hex}; background-color: ${c.hex};"
                      title="${c.name}"
                      aria-label="Ver en color ${c.name}"
                    ></button>
                  `).join('')}
                </div>
              </div>

              <div style="margin-bottom:2rem; padding:1.5rem; border:1px solid var(--border-subtle); background:var(--color-surface);">
                <p style="color:var(--color-text); font-size:.8rem; font-weight:700; margin-bottom:1rem;">Especificaciones</p>
                ${Object.entries(product.specifications).map(([key, value]) => `
                  <div class="d-flex justify-content-between" style="padding:.5rem 0; border-bottom:1px solid var(--border-subtle); font-size:.78rem;">
                    <span style="color:var(--color-text-muted); text-transform:capitalize;">${key}</span>
                    <span style="color:var(--color-text);">${value}</span>
                  </div>
                `).join('')}
              </div>

              <div class="d-flex gap-3">
                <button class="btn btn-primary-brand" type="button" id="addToCartDetail" style="flex:1;">
                  Añadir al carrito <span>＋</span>
                </button>
                <button class="btn btn-outline-light" type="button" data-action="open-cart" style="padding: 0.95rem 1.35rem; font-size: 0.76rem; font-weight: 800;">
                  Ver Carrito
                </button>
              </div>
              ${product.stock <= 5 ? `<p style="color:#ff6b6b; font-size:.72rem; margin-top:.75rem;">⚡ Solo quedan ${product.stock} unidades</p>` : ''}
            </div>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
    ${renderCartPanel()}
  `;

  mountHeader();
  mountCartPanel();

  // Bind add to cart
  const addBtn = document.querySelector('#addToCartDetail');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      addToCart(product);
      addBtn.textContent = 'Añadido ✓';
      setTimeout(() => { addBtn.innerHTML = 'Añadir al carrito <span>＋</span>'; }, 1100);
    });
  }

  // Selección de almacenamiento (solo visual: marca cuál está activo)
  rootElement.querySelectorAll('.filter-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const group = e.target.closest('.d-flex');
      if (group) {
        group.querySelectorAll('.filter-button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  });

  // Selección de COLOR: al hacer clic en un círculo, cambia la imagen grande
  // al color elegido, en tiempo real.
  const mainImage = document.getElementById('detailMainImage');
  const colorNameLabel = document.getElementById('selectedColorName');
  rootElement.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      const nuevaImagen = swatch.dataset.colorImage;
      const nombreColor = swatch.dataset.colorName;

      // Cambiamos la imagen con un pequeño desvanecido suave.
      if (mainImage && nuevaImagen) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
          mainImage.src = nuevaImagen;
          mainImage.alt = `${product.name} - ${nombreColor}`;
          mainImage.style.opacity = '1';
        }, 150);
      }

      // Actualizamos el nombre del color mostrado.
      if (colorNameLabel && nombreColor) {
        colorNameLabel.textContent = nombreColor;
      }

      // Marcamos visualmente el círculo activo.
      rootElement.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
    });
  });
}
