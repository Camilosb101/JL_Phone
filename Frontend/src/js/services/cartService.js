import { eventBus } from '../core/EventBus.js';

const STORAGE_KEY = 'jl-mobile-cart';
let cartItems = new Map();

function saveToStorage() {
  const data = [...cartItems.entries()];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      cartItems = new Map(data);
    }
  } catch {
    cartItems = new Map();
  }
}

export function addToCart(product) {
  const currentQuantity = cartItems.get(product.id)?.quantity ?? 0;
  cartItems.set(product.id, { product, quantity: currentQuantity + 1 });
  saveToStorage();
  eventBus.emit('cart:updated', { items: getCartItems(), count: getCartCount(), total: getCartTotal() });
}

export function removeFromCart(productId) {
  const item = cartItems.get(productId);
  if (!item) return;

  if (item.quantity > 1) {
    cartItems.set(productId, { ...item, quantity: item.quantity - 1 });
  } else {
    cartItems.delete(productId);
  }

  saveToStorage();
  eventBus.emit('cart:updated', { items: getCartItems(), count: getCartCount(), total: getCartTotal() });
}

export function deleteItemFromCart(productId) {
  if (cartItems.has(productId)) {
    cartItems.delete(productId);
    saveToStorage();
    eventBus.emit('cart:updated', { items: getCartItems(), count: getCartCount(), total: getCartTotal() });
  }
}

export function clearCart() {
  cartItems.clear();
  saveToStorage();
  eventBus.emit('cart:updated', { items: [], count: 0, total: 0 });
}

export function getCartItems() {
  return [...cartItems.values()];
}

export function getCartCount() {
  return [...cartItems.values()].reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal() {
  return [...cartItems.values()].reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export function initCart() {
  loadFromStorage();
}
