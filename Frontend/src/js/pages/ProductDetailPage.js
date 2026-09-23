import { products } from '../data/products.js';
import { addToCart } from '../services/cartService.js';
import { formatPrice } from '../utils/format.js';
import { renderHeader, mountHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderCartPanel, mountCartPanel } from '../components/CartPanel.js';

export function renderProductDetailPage(rootElement, params) {
  const product = products.find(p => p.id === params.id);

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

  rootElement.innerHTML = `
    ${renderHeader()}
    <main>
      <section class="section-padding" style="position:relative; z-index:1;">
        <div class="container">
          <a href="#/" class="btn btn-outline-light" style="margin-bottom:2rem; font-size:.76rem; font-weight:800;">← Volver al catálogo</a>
          <div class="row g-5 align-items-center">
            <div class="col-12 col-lg-6">
              <div class="product-card__image-wrap" style="height:450px; border-radius:8px; overflow:hidden;">
                <img class="product-card__image" src="${product.images[0]}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" />
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
                <p style="color:var(--color-text-muted); font-size:.72rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin-bottom:.5rem;">Colores</p>
                <div class="d-flex flex-wrap gap-2">
                  ${product.colors.map((c, i) => `<button class="filter-button ${i === 0 ? 'active' : ''}" type="button">${c}</button>`).join('')}
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

  // Storage/color selection (visual only)
  rootElement.querySelectorAll('.filter-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const group = e.target.closest('.d-flex');
      if (group) {
        group.querySelectorAll('.filter-button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  });
}
