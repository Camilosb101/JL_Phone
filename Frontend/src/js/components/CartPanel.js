import { getCartItems, getCartTotal, removeFromCart, addToCart, deleteItemFromCart, clearCart } from '../services/cartService.js';
import { formatPrice } from '../utils/format.js';
import { eventBus } from '../core/EventBus.js';

let isCartEventsBound = false;

export function renderCartPanel() {
  return `
    <aside id="cartPanel" class="cart-panel" aria-label="Carrito de compra"></aside>
    <div class="cart-backdrop" data-action="close-cart"></div>
  `;
}

export function updateCartPanelUI() {
  const cartPanel = document.getElementById('cartPanel');
  if (!cartPanel) return;

  const items = getCartItems();

  if (items.length === 0) {
    cartPanel.innerHTML = `
      <div class="cart-panel__header">
        <div>
          <p class="section-kicker"><span></span> Tu selección</p>
          <h2>Tu carrito</h2>
        </div>
        <button class="icon-button" type="button" data-action="close-cart" aria-label="Cerrar carrito">×</button>
      </div>
      <div class="cart-panel__items">
        <div class="cart-empty">
          <span>＋</span>
          <p>Tu selección está esperando.</p>
          <small>Añade un dispositivo para verlo aquí.</small>
        </div>
      </div>
    `;
    return;
  }

  const itemsHtml = items.map(item => `
    <div class="cart-item" data-product-id="${item.product.id}">
      <img src="${item.product.images[0]}" alt="${item.product.name}" />
      <div class="cart-item__info">
        <strong>${item.product.name}</strong>
        <span class="cart-item__unit-price">${formatPrice(item.product.price)} c/u</span>
        <div class="cart-item__qty-controls mt-2 d-flex align-items-center gap-2">
          <button class="icon-button icon-button--sm" type="button" data-action="decrease-cart" data-product-id="${item.product.id}" aria-label="Disminuir cantidad">−</button>
          <span class="cart-item__qty-val">${item.quantity}</span>
          <button class="icon-button icon-button--sm" type="button" data-action="increase-cart" data-product-id="${item.product.id}" aria-label="Aumentar cantidad">＋</button>
        </div>
      </div>
      <div class="d-flex flex-column align-items-end justify-content-between h-100 py-1">
        <button class="icon-button icon-button--sm text-muted" type="button" data-action="delete-cart-item" data-product-id="${item.product.id}" aria-label="Eliminar producto" title="Eliminar">×</button>
        <b>${formatPrice(item.product.price * item.quantity)}</b>
      </div>
    </div>
  `).join('');

  cartPanel.innerHTML = `
    <div class="cart-panel__header">
      <div>
        <p class="section-kicker"><span></span> Tu selección</p>
        <h2>Tu carrito</h2>
      </div>
      <button class="icon-button" type="button" data-action="close-cart" aria-label="Cerrar carrito">×</button>
    </div>
    <div class="cart-panel__items">
      ${itemsHtml}
    </div>
    <div class="cart-panel__footer">
      <div class="d-flex justify-content-between align-items-baseline mb-2">
        <span>Total estimado</span>
        <strong>${formatPrice(getCartTotal())}</strong>
      </div>
      <div id="checkoutNotice" class="checkout-notice d-none mb-3">
        <p class="mb-1"><strong>✓ Resumen de compra generado</strong></p>
        <small class="text-muted">Modo diseño activo. El resumen está listo para enlazarse con WhatsApp o pasarela en la siguiente etapa comercial.</small>
      </div>
      <button class="btn btn-primary-brand w-100 mb-2" type="button" data-action="checkout-demo">
        Continuar con la compra <span>↗</span>
      </button>
      <button class="btn btn-link text-muted w-100 py-1" type="button" data-action="clear-cart" style="font-size: 0.72rem; text-decoration: none;">
        Vaciar carrito
      </button>
    </div>
  `;
}

export function mountCartPanel() {
  updateCartPanelUI();

  // Ensure listeners are only bound once globally across SPA page transitions
  if (isCartEventsBound) return;
  isCartEventsBound = true;

  eventBus.on('cart:updated', () => {
    updateCartPanelUI();
  });

  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-action="open-cart"]');
    if (openBtn) {
      updateCartPanelUI();
      document.body.classList.add('cart-open');
      return;
    }

    const closeBtn = e.target.closest('[data-action="close-cart"]');
    if (closeBtn) {
      document.body.classList.remove('cart-open');
      return;
    }

    const increaseBtn = e.target.closest('[data-action="increase-cart"]');
    if (increaseBtn) {
      const productId = increaseBtn.dataset.productId;
      const item = getCartItems().find(i => i.product.id === productId);
      if (item) {
        addToCart(item.product);
      }
      return;
    }

    const decreaseBtn = e.target.closest('[data-action="decrease-cart"]');
    if (decreaseBtn) {
      const productId = decreaseBtn.dataset.productId;
      removeFromCart(productId);
      return;
    }

    const deleteBtn = e.target.closest('[data-action="delete-cart-item"]');
    if (deleteBtn) {
      const productId = deleteBtn.dataset.productId;
      deleteItemFromCart(productId);
      return;
    }

    const clearBtn = e.target.closest('[data-action="clear-cart"]');
    if (clearBtn) {
      clearCart();
      return;
    }

    const checkoutBtn = e.target.closest('[data-action="checkout-demo"]');
    if (checkoutBtn) {
      const notice = document.getElementById('checkoutNotice');
      if (notice) {
        notice.classList.remove('d-none');
        checkoutBtn.textContent = 'Pedido confirmado ✓';
        setTimeout(() => {
          checkoutBtn.innerHTML = 'Continuar con la compra <span>↗</span>';
        }, 2500);
      }
      return;
    }
  });
}
