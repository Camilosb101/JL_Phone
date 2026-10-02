import logoImage from '../../assets/images/image.png';
import usadosIcon from '../../assets/images/usados-icon.png';
import iphoneIcon from '../../assets/images/iphone-icon-blanco.png';
import samsungIcon from '../../assets/images/sam-icon-azul.png';
import { getCartCount } from '../services/cartService.js';
import { eventBus } from '../core/EventBus.js';
import { router } from '../core/Router.js';

let isHeaderEventsBound = false;

export function renderHeader() {
  const isUsedDevicesPage = window.location.hash.replace(/^#/, '') === '/usados';

  return `
<header class="site-header${isUsedDevicesPage ? ' site-header--used-page' : ''}">
  <nav class="navbar" aria-label="Navegación principal">
    <div class="container position-relative d-flex justify-content-between align-items-center">
      <!-- Left side: Logo + Menú button -->
      <div class="d-flex align-items-center gap-3">
        <a class="navbar-brand brand-mark m-0" href="#/" aria-label="JL Mobile inicio">
          <img src="${logoImage}" alt="JL Mobile" />
        </a>
        <button class="menu-toggle-btn" type="button" data-action="toggle-menu" aria-expanded="false" aria-label="Abrir menú">
          <span class="menu-toggle-icon">☰</span>
          <span>Menú</span>
        </button>
      </div>

      <!-- Quick Nav Dropdown Panel (Compact, does not cover entire screen) -->
      <div id="quickNavMenu" class="quick-nav-menu d-none" role="dialog" aria-label="Menú principal">
        <div class="quick-nav-menu__header d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center gap-2">
            <span class="quick-nav-badge">☰</span>
            <strong class="quick-nav-title">MENÚ</strong>
          </div>
          <button class="icon-button icon-button--sm" type="button" data-action="close-menu" aria-label="Cerrar menú">×</button>
        </div>

        <div class="quick-nav-divider"></div>

        <div class="quick-nav-list">
          <button class="quick-nav-item" type="button" data-menu-action="trade-in">
            <span class="quick-nav-emoji">🔥</span>
            <span>Recibe tu Cel por Parte de Pago</span>
          </button>
          <button class="quick-nav-item" type="button" data-menu-action="used-devices">
            <img class="quick-nav-icon" src="${usadosIcon}" alt="" />
            <span>Equipos Usados / Seminuevos</span>
          </button>
          <button class="quick-nav-item" type="button" data-menu-action="catalog-apple">
            <img class="quick-nav-icon quick-nav-icon--iphone" src="${iphoneIcon}" alt="" />
            <span>Catálogo iPhone</span>
          </button>
          <button class="quick-nav-item" type="button" data-menu-action="catalog-samsung">
            <img class="quick-nav-icon" src="${samsungIcon}" alt="" />
            <span>Catálogo Samsung</span>
          </button>
        </div>

        <div class="quick-nav-divider"></div>

        <div class="quick-nav-list">
          <button class="quick-nav-item" type="button" data-menu-action="warranty">
            <span class="quick-nav-emoji">🛡️</span>
            <span>Garantía y Confianza</span>
          </button>
          <button class="quick-nav-item" type="button" data-menu-action="about">
            <span class="quick-nav-emoji">👥</span>
            <span>Sobre JL iPhone</span>
          </button>
          <button class="quick-nav-item" type="button" data-menu-action="location-social">
            <span class="quick-nav-emoji">📍</span>
            <span>Ubicación y Redes</span>
          </button>
        </div>

        <div class="quick-nav-divider"></div>

        <div class="quick-nav-footer">
          <button class="btn btn-whatsapp-menu w-100" type="button" data-menu-action="whatsapp-contact">
            <span class="quick-nav-emoji">💬</span> Hablar con un Asesor en WhatsApp
          </button>
        </div>
      </div>
      <div id="quickNavBackdrop" class="quick-nav-backdrop d-none" data-action="close-menu"></div>

      <!-- Center navigation links (desktop) -->
      <ul class="navbar-nav d-none d-lg-flex flex-row gap-4 m-0">
        <li class="nav-item"><a class="nav-link" href="#catalogo" data-nav-filter="Apple">iPhone</a></li>
        <li class="nav-item"><a class="nav-link" href="#catalogo" data-nav-filter="Samsung">Samsung</a></li>
        <li class="nav-item"><a class="nav-link" href="#/informacion">Plan Canje</a></li>
      </ul>

      <!-- Right actions: Search + Cart -->
      <div class="navbar-actions d-flex align-items-center gap-3">
        <div class="search-container d-none d-md-flex align-items-center">
          <span class="search-icon" aria-hidden="true">⌕</span>
          <input type="text" id="navbarSearchInput" class="search-input" placeholder="Buscar iPhone o Samsung..." aria-label="Buscar productos" />
        </div>
        <button class="cart-button" type="button" data-action="open-cart" aria-label="Abrir carrito">
          <span class="cart-button__label">Mi Lista</span> <span class="cart-count">0</span>
        </button>
      </div>
    </div>
  </nav>
  <div id="headerToast" class="header-toast d-none"></div>
</header>
  `;
}

function showHeaderToast(message) {
  const toast = document.getElementById('headerToast');
  if (toast) {
    toast.textContent = message;
    toast.classList.remove('d-none');
    setTimeout(() => {
      toast.classList.add('d-none');
    }, 3200);
  }
}

function closeQuickMenu() {
  const menu = document.getElementById('quickNavMenu');
  const backdrop = document.getElementById('quickNavBackdrop');
  if (menu) menu.classList.add('d-none');
  if (backdrop) backdrop.classList.add('d-none');
}

function updateNavScrollState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const progress = Math.min(window.scrollY / 180, 1);
  header.style.setProperty('--nav-scroll-progress', progress.toFixed(2));
}

export function mountHeader() {
  const countElement = document.querySelector('.cart-count');
  if (countElement) {
    countElement.textContent = getCartCount();
  }

  updateNavScrollState();

  if (isHeaderEventsBound) return;
  isHeaderEventsBound = true;

  window.addEventListener('scroll', updateNavScrollState, { passive: true });

  eventBus.on('cart:updated', ({ count }) => {
    const el = document.querySelector('.cart-count');
    if (el) el.textContent = count;
  });

  document.addEventListener('click', (e) => {
    const scrollTarget = e.target.closest('[data-scroll-target]');
    if (scrollTarget) {
      e.preventDefault();
      document.getElementById(scrollTarget.dataset.scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 1. Toggle Menu
    const menuToggle = e.target.closest('[data-action="toggle-menu"]');
    if (menuToggle) {
      const menu = document.getElementById('quickNavMenu');
      const backdrop = document.getElementById('quickNavBackdrop');
      if (menu && backdrop) {
        const isClosed = menu.classList.contains('d-none');
        if (isClosed) {
          menu.classList.remove('d-none');
          backdrop.classList.remove('d-none');
        } else {
          menu.classList.add('d-none');
          backdrop.classList.add('d-none');
        }
      }
      return;
    }

    // 2. Close Menu
    if (e.target.closest('[data-action="close-menu"]')) {
      closeQuickMenu();
      return;
    }

    // 3. Menu Item Actions
    const menuItem = e.target.closest('[data-menu-action]');
    if (menuItem) {
      const action = menuItem.dataset.menuAction;
      closeQuickMenu();

      if (action === 'catalog-apple') {
        if (window.location.hash !== '#/' && window.location.hash !== '') {
          router.navigate('#/');
        }
        setTimeout(() => {
          eventBus.emit('filter:brand', 'Apple');
          document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return;
      }

      if (action === 'catalog-samsung') {
        if (window.location.hash !== '#/' && window.location.hash !== '') {
          router.navigate('#/');
        }
        setTimeout(() => {
          eventBus.emit('filter:brand', 'Samsung');
          document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return;
      }

      if (action === 'trade-in') {
        if (window.location.hash !== '#/' && window.location.hash !== '') {
          router.navigate('#/');
        }
        setTimeout(() => {
          document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
          showHeaderToast('🔥 Plan Retoma: Recibimos tu celular iPhone o Samsung como parte de pago');
        }, 80);
        return;
      }

      if (action === 'used-devices') {
        router.navigate('/usados');
        return;
      }

      if (action === 'warranty' || action === 'about' || action === 'location-social') {
        if (window.location.hash !== '#/' && window.location.hash !== '') {
          router.navigate('#/');
        }
        setTimeout(() => {
          document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return;
      }

      if (action === 'whatsapp-contact') {
        showHeaderToast('💬 Asesoría comercial: Listo para enlazar directamente con la línea de WhatsApp JL');
        return;
      }
    }

    // 4. Toggle Search
    const searchToggle = e.target.closest('[data-action="toggle-search"]');
    if (searchToggle) {
      const searchInput = document.getElementById('navbarSearchInput');
      if (searchInput) {
        searchInput.classList.toggle('d-none');
        if (!searchInput.classList.contains('d-none')) {
          searchInput.focus();
        }
      }
      return;
    }

    const navFilter = e.target.closest('[data-nav-filter]');
    if (navFilter) {
      e.preventDefault();
      eventBus.emit('filter:brand', navFilter.dataset.navFilter);
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'navbarSearchInput') {
      const query = e.target.value.trim();
      if (window.location.hash.startsWith('#/producto')) {
        router.navigate('#/');
        setTimeout(() => {
          eventBus.emit('catalog:search', query);
          const catalogEl = document.getElementById('catalogo');
          if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        eventBus.emit('catalog:search', query);
        const catalogEl = document.getElementById('catalogo');
        if (catalogEl && query.length > 0) {
          catalogEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  });
}
