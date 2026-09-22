import { getCartItems, getCartTotal, removeFromCart } from '../services/cartService.js';
import { formatPrice } from '../utils/format.js';
import { eventBus } from '../core/EventBus.js';

export function renderCartPanel() {
  return `
<aside id="cartPanel" class="cart-panel" aria-label="Carrito de compra"></aside>
<div class="cart-backdrop" data-action="close-cart"></div>
  `;
}

export function mountCartPanel() {
  const cartPanel = document.getElementById('cartPanel');
  
  const updateCartPanel = () => {
    if (!cartPanel) return;
    
    const items = getCartItems();
    
    if (items.length === 0) {
      cartPanel.innerHTML = `
        <div class="cart-panel__header">
          <div><p class="section-kicker"><span></span> Tu selección</p><h2>Tu carrito</h2></div>
          <button class="icon-button" type="button" data-action="close-cart" aria-label="Cerrar carrito">×</button>
        </div>
        <div class="cart-empty">
          <span>＋</span>
          <p>Tu selección está esperando.</p>
          <small>Añade un dispositivo para verlo aquí.</small>
        </div>
      `;
    } else {
      const itemsHtml = items.map(item => `
        <div class="cart-item">
          <img src="\${item.product.images[0]}" alt="\${item.product.name}" />
          <div>
            <strong>\${item.product.name}</strong>
            <span>\${item.quantity} × \${formatPrice(item.product.price)}</span>
          </div>
          <div class="d-flex flex-column align-items-end gap-1">
            <b>\${formatPrice(item.product.price * item.quantity)}</b>
            <button class="icon-button icon-button--sm" type="button" data-action="remove-from-cart" data-product-id="\${item.product.id}" aria-label="Quitar \${item.product.name}">−</button>
          </div>
        </div>
      `).join('');

      cartPanel.innerHTML = `
        <div class="cart-panel__header">
          <div><p class="section-kicker"><span></span> Tu selección</p><h2>Tu carrito</h2></div>
          <button class="icon-button" type="button" data-action="close-cart" aria-label="Cerrar carrito">×</button>
        </div>
        <div class="cart-panel__items">
          \${itemsHtml}
        </div>
        <div class="cart-panel__footer">
          <div><span>Total estimado</span><strong>\${formatPrice(getCartTotal())}</strong></div>
          <button class="btn btn-primary-brand w-100" type="button">Continuar con la compra <span>↗</span></button>
        </div>
      `;
    }
  };

  eventBus.on('cart:updated', updateCartPanel);
  updateCartPanel(); // Initial render

  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-action="open-cart"]');
    if (openBtn) {
      updateCartPanel();
      document.body.classList.add('cart-open');
    }

    const closeBtn = e.target.closest('[data-action="close-cart"]');
    if (closeBtn) {
      document.body.classList.remove('cart-open');
    }

    const removeBtn = e.target.closest('[data-action="remove-from-cart"]');
    if (removeBtn) {
      const productId = removeBtn.dataset.productId;
      removeFromCart(productId);
      updateCartPanel();
    }
  });
}
