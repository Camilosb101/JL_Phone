import 'bootstrap';
import '../css/main.css';
import { products } from './data/products.js';
import { createProductCard } from './components/productCard.js';
import { addToCart, getCartCount, getCartItems, getCartTotal } from './services/cartService.js';
import { formatPrice } from './utils/format.js';
import logoImage from '../assets/images/Gemini_Generated_Image_ov1q8qov1q8qov1q-Photoroom.png';

const app = document.querySelector('#app');

function renderApp() {
  app.innerHTML = `
    <header class="site-header">
      <nav class="navbar navbar-expand-lg" aria-label="Navegación principal">
        <div class="container">
          <a class="navbar-brand brand-mark" href="#inicio" aria-label="JL Mobile inicio"><img src="${logoImage}" alt="JL Mobile" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Abrir menú">Menú</button>
          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav mx-auto gap-lg-4">
              <li class="nav-item"><a class="nav-link active" href="#inicio">Inicio</a></li>
              <li class="nav-item"><a class="nav-link" href="#catalogo">Catálogo</a></li>
              <li class="nav-item"><a class="nav-link" href="#experiencia">Nuestra selección</a></li>
            </ul>
            <div class="navbar-actions d-flex align-items-center gap-2">
              <button class="icon-button" type="button" data-action="focus-search" aria-label="Buscar productos" title="Buscar">⌕</button>
              <button class="cart-button" type="button" data-action="open-cart" aria-label="Abrir carrito">Bag <span class="cart-count">0</span></button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section id="inicio" class="hero-section">
        <div class="hero-grid container">
          <div class="hero-copy">
            <p class="section-kicker"><span></span> La nueva generación, aquí</p>
            <h1>Tu próximo<br /><em>smartphone</em><br />empieza aquí.</h1>
            <p class="hero-lede">Tecnología premium seleccionada para quienes no se conforman con lo de siempre.</p>
            <div class="hero-actions d-flex flex-wrap align-items-center gap-3">
              <a class="btn btn-primary-brand" href="#catalogo">Explorar catálogo <span>↘</span></a>
              <span class="hero-note"><span class="status-dot"></span> Envío seguro 24/48h</span>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-glow"></div>
            <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1100&q=90" alt="Smartphone premium" />
            <div class="hero-spec hero-spec--top"><span>01</span><strong>Colección<br />Pro</strong></div>
            <div class="hero-spec hero-spec--bottom"><strong>Diseñado<br />para destacar</strong><span>↗</span></div>
          </div>
        </div>
        <div class="hero-marquee" aria-hidden="true"><span>APPLE</span><i></i><span>SAMSUNG</span><i></i><span>PREMIUM TECH</span><i></i><img src="${logoImage}" alt="" /></div>
      </section>
      <section id="catalogo" class="catalog-section section-padding">
        <div class="container">
          <div class="section-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4">
            <div><p class="section-kicker"><span></span> La selección JL</p><h2>Encuentra tu<br /><em>mejor versión.</em></h2></div>
            <div class="catalog-tools d-flex flex-wrap gap-2" role="group" aria-label="Filtrar catálogo">
              <button class="filter-button active" type="button" data-filter="all">Todos</button>
              <button class="filter-button" type="button" data-filter="Apple">Apple</button>
              <button class="filter-button" type="button" data-filter="Samsung">Samsung</button>
              <label class="visually-hidden" for="sortProducts">Ordenar productos</label><select id="sortProducts" class="sort-select"><option value="featured">Destacados</option><option value="price-asc">Precio: menor</option><option value="price-desc">Precio: mayor</option></select>
            </div>
          </div>
          <div class="row g-4 mt-2" id="productGrid"></div>
        </div>
      </section>
      <section id="experiencia" class="experience-section section-padding"><div class="container"><div class="experience-panel"><div><p class="section-kicker"><span></span> La diferencia JL</p><h2>Compra con<br /><em>otra perspectiva.</em></h2></div><div class="experience-list"><div><span>01</span><p><strong>Selección honesta</strong><br />Solo lo que realmente merece tu atención.</p></div><div><span>02</span><p><strong>Asesoría humana</strong><br />Te ayudamos a elegir sin letra pequeña.</p></div><div><span>03</span><p><strong>Entrega cuidada</strong><br />Tu nuevo dispositivo llega como debe.</p></div></div></div></div></section>
    </main>
    <footer class="site-footer"><div class="container d-flex flex-column flex-md-row justify-content-between gap-3"><span class="brand-mark"><img src="${logoImage}" alt="JL Mobile" /></span><small>© 2024 JL Mobile. Tecnología que se siente.</small><span class="footer-status"><i class="bi bi-circle-fill"></i> Atención online</span></div></footer>
    <aside id="cartPanel" class="cart-panel" aria-label="Carrito de compra"></aside>
    <div class="cart-backdrop" data-action="close-cart"></div>
  `;
  renderProducts(products);
  bindInteractions();
}

function renderProducts(items) {
  const productGrid = document.querySelector('#productGrid');
  productGrid.innerHTML = items.map((product) => `<div class="col-12 col-md-6 col-xl-4">${createProductCard(product)}</div>`).join('');
}

function updateCartCount() {
  document.querySelector('.cart-count').textContent = getCartCount();
}

function openCart() {
  const items = getCartItems();
  const cartPanel = document.querySelector('#cartPanel');
  cartPanel.innerHTML = `
    <div class="cart-panel__header"><div><p class="section-kicker"><span></span> Tu selección</p><h2>Tu carrito</h2></div><button class="icon-button" type="button" data-action="close-cart" aria-label="Cerrar carrito">×</button></div>
    <div class="cart-panel__items">${items.length ? items.map(({ product, quantity }) => `<div class="cart-item"><img src="${product.images[0]}" alt="${product.name}" /><div><strong>${product.name}</strong><span>${quantity} × ${formatPrice(product.price)}</span></div><b>${formatPrice(product.price * quantity)}</b></div>`).join('') : '<div class="cart-empty"><span>＋</span><p>Tu selección está esperando.</p><small>Añade un dispositivo para verlo aquí.</small></div>'}</div>
    <div class="cart-panel__footer"><div><span>Total estimado</span><strong>${formatPrice(getCartTotal())}</strong></div><button class="btn btn-primary-brand w-100" type="button" ${items.length ? '' : 'disabled'}>Continuar con la compra <span>↗</span></button></div>
  `;
  document.body.classList.add('cart-open');
}

function bindInteractions() {
  document.addEventListener('click', (event) => {
    const filterButton = event.target.closest('[data-filter]');
    if (filterButton) {
      document.querySelectorAll('[data-filter]').forEach((button) => button.classList.remove('active'));
      filterButton.classList.add('active');
      const filteredProducts = filterButton.dataset.filter === 'all' ? products : products.filter((product) => product.brand === filterButton.dataset.filter);
      renderProducts(filteredProducts);
      return;
    }
    const actionTarget = event.target.closest('[data-action]');
    if (!actionTarget) return;
    if (actionTarget.dataset.action === 'add-to-cart') {
      const product = products.find((item) => item.id === actionTarget.closest('[data-product-id]').dataset.productId);
      addToCart(product);
      updateCartCount();
      actionTarget.textContent = 'Añadido ✓';
      setTimeout(() => { actionTarget.innerHTML = 'Añadir al carrito <span>＋</span>'; }, 1100);
    }
    if (actionTarget.dataset.action === 'open-cart') openCart();
    if (actionTarget.dataset.action === 'close-cart') document.body.classList.remove('cart-open');
  });

  document.querySelector('.sort-select').addEventListener('change', (event) => {
    const sortedProducts = [...products].sort((first, second) => event.target.value === 'price-asc' ? first.price - second.price : second.price - first.price);
    renderProducts(event.target.value === 'featured' ? products : sortedProducts);
  });
}

renderApp();
