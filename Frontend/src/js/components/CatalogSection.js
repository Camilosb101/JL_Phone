import { getAllProducts } from '../services/productService.js';
import { createProductCard } from './ProductCard.js';
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

export async function mountCatalogSection() {
  let currentFilter = 'all';
  let currentSort = 'featured';
  let currentSearch = '';
  // Al inicio solo mostramos los destacados; "Ver todos" muestra el resto.
  let mostrarTodos = false;

  // Cargamos los productos una sola vez desde la puerta de datos (productService).
  // A partir de aquí trabajamos con esta lista en memoria (filtrar, ordenar, buscar).
  let allProducts = [];
  try {
    allProducts = await getAllProducts();
  } catch (error) {
    console.error('No se pudieron cargar los productos:', error);
    allProducts = [];
  }

  const productGrid = document.getElementById('productGrid');
  const filterButtons = document.querySelectorAll('.filter-button[data-filter]');
  const sortSelect = document.getElementById('sortProducts');

  const renderProducts = (items, ocultos = 0) => {
    if (!productGrid) return;
    if (items.length === 0) {
      productGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="section-kicker justify-content-center"><span></span> Sin resultados</p>
          <h3 class="mb-3" style="font-family: var(--font-display);">No encontramos dispositivos para tu búsqueda.</h3>
          <p class="text-muted mb-4" style="font-size: 0.85rem;">Prueba buscando otra marca o modelo.</p>
          <button class="btn btn-outline-light" id="resetCatalogFilters" type="button" style="font-size: 0.76rem; font-weight: 800;">
            Ver todos los productos
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('resetCatalogFilters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentFilter = 'all';
          currentSearch = '';
          mostrarTodos = false;
          const searchInput = document.getElementById('navbarSearchInput');
          if (searchInput) searchInput.value = '';
          updateActiveFilterButton();
          getFilteredAndSorted();
        });
      }
      return;
    }

    const tarjetas = items.map(p => `
      <div class="col-12 col-md-6 col-xl-4">
        ${createProductCard(p)}
      </div>
    `).join('');

    // Si hay productos ocultos, mostramos un botón "Ver todos" al final.
    const verTodos = ocultos > 0 ? `
      <div class="col-12 text-center mt-4">
        <button class="btn btn-outline-light" id="verTodosBtn" type="button" style="font-size: 0.76rem; font-weight: 800;">
          Ver todos los productos (${ocultos} más)
        </button>
      </div>
    ` : '';

    productGrid.innerHTML = tarjetas + verTodos;

    const verTodosBtn = document.getElementById('verTodosBtn');
    if (verTodosBtn) {
      verTodosBtn.addEventListener('click', () => {
        mostrarTodos = true;
        getFilteredAndSorted();
      });
    }
  };

  const getFilteredAndSorted = () => {
    let filtered = allProducts;

    if (currentFilter !== 'all') {
      filtered = filtered.filter(p => p.brand === currentFilter);
    }

    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    let sorted = [...filtered];
    if (currentSort === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'featured') {
      // Destacados primero (los que tienen featured: true), manteniendo el orden original entre ellos.
      sorted.sort((a, b) => (b.featured === true) - (a.featured === true));
    }

    // Vista resumida: en la portada (filtro "Todos", sin búsqueda y sin "Ver todos")
    // mostramos los primeros 9 productos para llenar 3 filas completas (3 por fila).
    const LIMITE_PORTADA = 9;
    const vistaResumida = currentFilter === 'all' && !currentSearch && !mostrarTodos;
    if (vistaResumida && sorted.length > LIMITE_PORTADA) {
      const visibles = sorted.slice(0, LIMITE_PORTADA);
      renderProducts(visibles, sorted.length - LIMITE_PORTADA);
    } else {
      renderProducts(sorted, 0);
    }
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
      mostrarTodos = false;
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
    mostrarTodos = false;
    updateActiveFilterButton();
    getFilteredAndSorted();
  });

  eventBus.on('catalog:search', (query) => {
    currentSearch = query;
    getFilteredAndSorted();
  });

  if (productGrid) {
    // Tanto el botón "Ver más" como el clic en la tarjeta llevan al detalle.
    productGrid.addEventListener('click', (e) => {
      const productCard = e.target.closest('[data-product-id]');
      if (productCard?.dataset.productId) {
        router.navigate(`/producto/${productCard.dataset.productId}`);
      }
    });
  }
}
