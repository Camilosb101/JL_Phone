import { renderHeader, mountHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderCartPanel, mountCartPanel } from '../components/CartPanel.js';
import { createProductCard } from '../components/ProductCard.js';
import { addToCart } from '../services/cartService.js';
import { usedProducts } from '../data/usedProducts.js';
import { router } from '../core/Router.js';
import appleBackgroundImage from '../../assets/images/image-removebg-preview.png';
import samsungBackgroundImage from '../../assets/images/samsung-logo.png';
import usadosIcon from '../../assets/images/usados-icon.png';

export function renderUsedDevicesPage(rootElement) {
  // Si no hay equipos usados, mostramos un mensaje en vez de la rejilla.
  const productosHtml = usedProducts.length > 0
    ? `<div class="row g-4 mt-2" id="usedProductGrid">
        ${usedProducts.map((product) => `
          <div class="col-12 col-md-6 col-xl-4">
            ${createProductCard(product)}
          </div>
        `).join('')}
      </div>`
    : `<p class="used-catalog-empty">Por ahora no tenemos equipos usados disponibles. ¡Vuelve pronto o escríbenos para avisarte cuando lleguen!</p>`;

  rootElement.innerHTML = `
    <div class="brand-background" aria-hidden="true">
      <img class="brand-background__apple" src="${appleBackgroundImage}" alt="" />
      <img class="brand-background__samsung" src="${samsungBackgroundImage}" alt="" />
    </div>
    ${renderHeader()}
    <main class="used-catalog-page">
      <section class="used-catalog-intro section-padding">
        <div class="container">
          <a href="#/" class="btn btn-outline-light used-catalog-back">← Volver al inicio</a>
          <div class="used-catalog-intro__grid">
            <div class="used-catalog-intro__text">
              <p class="section-kicker"><span></span> Selección seminueva JL</p>
              <h1>Equipos usados<br /><em>y seminuevos.</em></h1>
              <p class="hero-lede">Todos nuestros equipos cuentan con <strong>6 meses de garantía</strong>, batería con el porcentaje exacto especificado en el producto e <strong>IMEI garantizado de por vida</strong> para tu total tranquilidad y libre registro.</p>
            </div>
            <div class="used-catalog-intro__media">
              <img src="${usadosIcon}" alt="Equipos usados y seminuevos JL" />
            </div>
          </div>
        </div>
      </section>
      <section class="catalog-section section-padding used-catalog-products">
        <div class="container">
          ${productosHtml}
          <p class="used-catalog-legal-note">Garantizamos la total legalidad y legitimidad de cada equipo comercializado. Ningún dispositivo proviene de actividades ilícitas ni de dudosa procedencia, asegurando un registro e IMEI 100% verificados y garantizados de por vida.</p>
        </div>
      </section>
    </main>
    ${renderFooter()}
    ${renderCartPanel()}
  `;

  mountHeader();
  mountCartPanel();

  const productGrid = document.getElementById('usedProductGrid');
  productGrid?.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-action="add-to-cart"]');
    if (addButton) {
      event.stopPropagation();
      const card = addButton.closest('[data-product-id]');
      const product = usedProducts.find((item) => item.id === card?.dataset.productId);
      if (product) {
        addToCart(product);
        const originalText = addButton.innerHTML;
        addButton.innerHTML = 'Añadido ✓';
        setTimeout(() => { addButton.innerHTML = originalText; }, 1100);
      }
      return;
    }

    const card = event.target.closest('[data-product-id]');
    if (card?.dataset.productId) router.navigate(`/producto/${card.dataset.productId}`);
  });
}
