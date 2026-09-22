import logoImage from '../../assets/images/image-removebg-preview .png';
import { getCartCount } from '../services/cartService.js';
import { eventBus } from '../core/EventBus.js';

export function renderHeader() {
  return `
<header class="site-header">
  <nav class="navbar navbar-expand-lg" aria-label="Navegación principal">
    <div class="container">
      <a class="navbar-brand brand-mark" href="#/" aria-label="JL Mobile inicio"><img src="${logoImage}" alt="JL Mobile" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Abrir menú">Menú</button>
      <div class="collapse navbar-collapse" id="mainNavigation">
        <ul class="navbar-nav mx-auto gap-lg-4">
          <li class="nav-item"><a class="nav-link active" href="#/">Inicio</a></li>
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
  `;
}

export function mountHeader() {
  const updateCount = () => {
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
      countElement.textContent = getCartCount();
    }
  };

  eventBus.on('cart:updated', updateCount);
  updateCount();
}
