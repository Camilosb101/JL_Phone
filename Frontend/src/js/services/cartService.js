const cartItems = new Map();

export function addToCart(product) {
  const currentQuantity = cartItems.get(product.id)?.quantity ?? 0;
  cartItems.set(product.id, { product, quantity: currentQuantity + 1 });
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
