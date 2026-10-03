import { formatPrice } from '../utils/format.js';

export function createProductCard(product) {
  const displayStorage = product.storage?.find((storage) => {
    const prices = product.pricesByStorage?.[storage];
    return typeof prices === 'number'
      || (prices && Object.values(prices).some((price) => typeof price === 'number'));
  }) ?? product.storage[0];

  return `
    <article class="product-card h-100" data-product-id="${product.id}">
      <div class="product-card__image-wrap">
        <span class="product-card__brand">${product.brand}</span>
        <img class="product-card__image" src="${product.images[0]}" alt="${product.name}" />
        <span class="icon-button product-card__quick-view" aria-hidden="true">↗</span>
      </div>
      <div class="product-card__body d-flex flex-column">
        <div class="d-flex justify-content-between gap-3 align-items-start">
          <div>
            <p class="product-card__eyebrow mb-1">${product.model}</p>
            <h3 class="product-card__title">${product.name}</h3>
          </div>
          <span class="product-card__price">${formatPrice(product.price)}</span>
        </div>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__meta mt-auto">
          <span>▱ ${displayStorage}</span>
          <span>● ${product.colors.join(', ')}</span>
          ${product.isUsed ? `<span>▣ ${product.specifications.bateria}</span>` : ''}
        </div>
        <button class="btn btn-outline-light product-card__button mt-4" type="button" data-action="ver-mas">
          Ver más <span>↗</span>
        </button>
      </div>
    </article>
  `;
}
