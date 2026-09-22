import { products } from '../data/products.js';
import { createProductCard } from './ProductCard.js';
import { addToCart } from '../services/cartService.js';
import { eventBus } from '../core/EventBus.js';
import { router } from '../core/Router.js';

export function renderCatalogSection() {
  return `
<section id="catalogo" class="catalog-section section-padding">
  <div class="container">
    <div class="section-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4">
      <div>
        <p class="section-kicker"><span></span> La selección JL</p>
        <h2>Encuentra tu<br /><em>mejor versión.</em></h2>
      </div>
      <div class="catalog-tools d-flex flex-wrap gap-2" role="group" aria-label="Filtrar catálogo">
        <button class="filter-button active" type="button" data-filter="all">Todos</button>
        <button class="filter-button" type="button" data-filter="Apple">Apple</button>
        <button class="filter-button" type="button" data-filter="Samsung">Samsung</button>
        <label class="visually-hidden" for="sortProducts">Ordenar productos</label>
        <select id="sortProducts" class="sort-select">
          <option value="featured">Destacados</option>
          <option value="price-asc">Precio: menor</option>
          <option value="price-desc">Precio: mayor</option>
        </select>
      </div>
    </div>
    <div class="row g-4 mt-2" id="productGrid"></div>
  </div>
</section>
  `;
}

export function mountCatalogSection() {
  let currentFilter = 'all';
  let currentSort = 'featured';

  const productGrid = document.getElementById('productGrid');
  const filterButtons = document.querySelectorAll('.filter-button[data-filter]');
  const sortSelect = document.getElementById('sortProducts');

  const renderProducts = (items) => {
    if (!productGrid) return;
    productGrid.innerHTML = items.map(p => `<div class="col-12 col-md-6 col-xl-4">${createProductCard(p)}</div>`).join('');
  };

  const getFilteredAndSorted = () => {
    let filtered = products;
    if (currentFilter !== 'all') {
      filtered = products.filter(p => p.brand === currentFilter);
    }
    
    let sorted = [...filtered];
    if (currentSort === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    }
    
    renderProducts(sorted);
  };

  const updateActiveFilterButton = () => {
    filterButtons.forEach(btn => {
      if (btn.dataset.filter === currentFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  getFilteredAndSorted();

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentFilter = e.target.dataset.filter;
      updateActiveFilterButton();
      getFilteredAndSorted();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      getFilteredAndSorted();
    });
  }

  eventBus.on('filter:brand', (brand) => {
    currentFilter = brand;
    updateActiveFilterButton();
    getFilteredAndSorted();
  });

  if (productGrid) {
    productGrid.addEventListener('click', (e) => {
      const addToCartBtn = e.target.closest('[data-action="add-to-cart"]');
      if (addToCartBtn) {
        const productCard = addToCartBtn.closest('[data-product-id]');
        if (productCard) {
          const productId = parseInt(productCard.dataset.productId, 10) || productCard.dataset.productId;
          const product = products.find(p => p.id == productId);
          if (product) {
            addToCart(product);
            const originalText = addToCartBtn.innerHTML;
            addToCartBtn.innerHTML = 'Añadido ✓';
            setTimeout(() => {
              addToCartBtn.innerHTML = originalText;
            }, 1100);
          }
        }
        return;
      }

      const quickViewBtn = e.target.closest('[data-action="quick-view"]');
      if (quickViewBtn) {
        const productCard = quickViewBtn.closest('[data-product-id]');
        if (productCard) {
          const productId = productCard.dataset.productId;
          router.navigate(`/producto/${productId}`);
        }
      }
    });
  }
}
