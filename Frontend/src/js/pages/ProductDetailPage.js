import { getProductById, getRelatedProducts } from '../services/productService.js';
import { pedirProductoPorWhatsApp } from '../services/whatsappService.js';
import { formatPrice } from '../utils/format.js';
import { renderHeader, mountHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export async function renderProductDetailPage(rootElement, params) {
  // Pedimos el producto a la puerta de datos (productService).
  let product = null;
  try {
    product = await getProductById(params.id);
  } catch (error) {
    console.error('No se pudo cargar el producto:', error);
    product = null;
  }

  if (!product) {
    rootElement.innerHTML = `
      ${renderHeader()}
      <main class="container section-padding" style="text-align:center;">
        <h2>Producto no encontrado</h2>
        <p class="hero-lede">El producto que buscas no existe.</p>
        <a class="btn btn-primary-brand" href="#/">Volver al inicio <span>↗</span></a>
      </main>
      ${renderFooter()}
    `;
    mountHeader();
    return;
  }

  let relatedProducts = [];
  try {
    relatedProducts = await getRelatedProducts(product);
  } catch (error) {
    console.error('No se pudieron cargar los productos recomendados:', error);
  }

  // Lista de colores con imagen. Si el producto no trae colorOptions (formato
  // viejo), armamos una lista básica usando la imagen principal, para no romper.
  const colorOptions = Array.isArray(product.colorOptions) && product.colorOptions.length > 0
    ? product.colorOptions
    : (product.colors ?? []).map((nombre) => ({
        name: nombre,
        hex: '#9a9a9a',
        image: product.images[0]
      }));
  const getStoragePrice = (storage, color) => {
    if (!product.pricesByStorage) return product.price;
    const storagePrices = product.pricesByStorage[storage];
    const price = typeof storagePrices === 'number' ? storagePrices : storagePrices?.[color];
    return typeof price === 'number' ? price : null;
  };
  const storageHasPrices = (storage) => {
    const storagePrices = product.pricesByStorage?.[storage];
    return typeof storagePrices === 'number'
      || (storagePrices && Object.values(storagePrices).some((price) => typeof price === 'number'));
  };
  let selectedStorage = product.storage?.find(storageHasPrices) ?? product.storage?.[0] ?? '';
  let selectedColorName = colorOptions.find((color) => getStoragePrice(selectedStorage, color.name) !== null)?.name
    ?? colorOptions[0]?.name
    ?? product.colors?.[0]
    ?? '';
  const selectedColorOption = colorOptions.find((color) => color.name === selectedColorName);
  let selectedStoragePrice = getStoragePrice(selectedStorage, selectedColorName);

  rootElement.innerHTML = `
    ${renderHeader()}
    <main>
      <section style="position:relative; z-index:1; padding:2rem 0 4rem;">
        <div class="container">
          <a href="#/" class="btn btn-outline-light" style="margin-bottom:1.25rem; font-size:.76rem; font-weight:800;">← Volver al catálogo</a>
          <div class="row g-5 align-items-start product-detail-layout">
            <div class="col-12 col-lg-6 order-1 order-lg-1 product-detail__photo">
              <div class="product-card__image-wrap" style="height:clamp(340px, 45vw, 480px); border-radius:20px; overflow:hidden; background:radial-gradient(circle at 50% 50%, #ffffff 0%, #f4f5f8 60%, #e6e8ee 100%); padding:clamp(1.5rem, 3.5vw, 2.5rem); box-shadow:0 12px 32px rgba(0,0,0,0.18); border:1px solid rgba(255,255,255,0.06);">
                <img id="detailMainImage" class="product-card__image" src="${selectedColorOption?.image ?? product.images[0]}" alt="${product.name} - ${selectedColorName}" style="width:100%; height:100%; object-fit:contain; filter:drop-shadow(0 20px 32px rgba(0,0,0,0.18)); transition:opacity .25s ease, transform .35s ease;" />
              </div>
            </div>
            <div class="col-12 col-lg-6 order-2 order-lg-2 product-detail__info">
              <div class="product-detail__intro">
              <p class="section-kicker"><span></span> ${product.brand}</p>
              <h1 style="font-size:clamp(2.5rem,5vw,4rem); margin-bottom:1rem;">${product.name}</h1>
              <p class="hero-lede" style="max-width:100%;">${product.description}</p>
              </div>

              <div class="product-detail__price">
                <span id="detailPrice" class="product-card__price" aria-live="polite" style="font-size:1.8rem; display:block; margin:0;">${selectedStoragePrice === null ? 'Precio no registrado' : formatPrice(selectedStoragePrice)}</span>
              </div>

              <div class="product-detail__storage" style="margin-bottom:2rem;">
                <p style="color:var(--color-text-muted); font-size:.72rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin-bottom:.5rem;">Almacenamiento</p>
                <div class="d-flex flex-wrap gap-2">
                  ${product.storage.map((storage, i) => {
                    const hasPrice = !product.pricesByStorage || storageHasPrices(storage);
                    return `<button class="filter-button ${storage === selectedStorage ? 'active' : ''}" type="button" data-storage="${storage}" ${hasPrice ? '' : 'disabled title="Precio no registrado"'}>${storage}</button>`;
                  }).join('')}
                </div>
              </div>

              <div class="product-detail__colors" style="margin-bottom:2rem;">
                <p style="color:var(--color-text-muted); font-size:.72rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin-bottom:.5rem;">
                  Color: <span id="selectedColorName" style="color:var(--color-text);">${selectedColorName}</span>
                </p>
                <div class="d-flex flex-wrap gap-3 align-items-center" id="colorSwatches">
                  ${colorOptions.map((c) => `
                    <button
                      class="color-swatch ${c.name === selectedColorName ? 'active' : ''}"
                      type="button"
                      data-color-image="${c.image}"
                      data-color-name="${c.name}"
                      style="--swatch-color: ${c.hex}; background-color: ${c.hex};"
                      title="${c.name}"
                      aria-label="Ver en color ${c.name}"
                    ></button>
                  `).join('')}
                </div>
              </div>

              <div class="product-detail__specifications" style="margin-bottom:2rem; padding:1.5rem; border:1px solid var(--border-subtle); background:var(--color-surface);">
                <p style="color:var(--color-text); font-size:.8rem; font-weight:700; margin-bottom:1rem;">Especificaciones</p>
                ${Object.entries(product.specifications).map(([key, value]) => `
                  <div class="d-flex justify-content-between" style="padding:.5rem 0; border-bottom:1px solid var(--border-subtle); font-size:.78rem;">
                    <span style="color:var(--color-text-muted); text-transform:capitalize;">${key}</span>
                    <span style="color:var(--color-text);">${value}</span>
                  </div>
                `).join('')}
              </div>

              <div class="product-detail__actions d-flex gap-3">
                <button class="btn btn-primary-brand" type="button" id="quieroDetail" style="flex:1;">
                  Lo quiero / Solicitar info <span>↗</span>
                </button>
                ${product.stock <= 5 ? `<p class="product-detail__stock">⚡ Solo quedan ${product.stock} unidades</p>` : ''}
              </div>
            </div>

            ${Array.isArray(product.features) && product.features.length > 0 ? `
              <div class="col-12 col-lg-6 order-3 order-lg-3 product-detail__features">
                <div style="padding:1.25rem 1.25rem 1rem; border:1px solid var(--border-subtle); background:rgba(255,255,255,0.03); border-radius:16px;">
                  <p style="color:var(--color-text); font-size:.75rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin-bottom:0.9rem;">Características</p>
                  <ul style="margin:0; padding-left:1.1rem; color:var(--color-text); font-size:.8rem; line-height:1.8; list-style: disc;">
                    ${product.features.map((feature) => {
                      const labelMatch = feature.match(/^([^:]+):\s*(.*)$/);
                      if (!labelMatch) return `<li>${feature}</li>`;
                      const [, label, value] = labelMatch;
                      return `<li><strong style="font-weight:800; color:#ffffff;">${label}:</strong> ${value}</li>`;
                    }).join('')}
                  </ul>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </section>
      ${relatedProducts.length ? `
        <section class="related-products" aria-labelledby="relatedProductsTitle">
          <div class="container">
            <div class="related-products__header">
              <h2 id="relatedProductsTitle">También te puede interesar</h2>
              <div class="related-products__controls">
                <button class="icon-button" type="button" data-related-scroll="-1" aria-label="Ver recomendados anteriores" title="Desplazar a la izquierda">←</button>
                <button class="icon-button" type="button" data-related-scroll="1" aria-label="Ver más recomendados" title="Desplazar a la derecha">→</button>
              </div>
            </div>
            <div class="related-products__track" id="relatedProductsTrack" tabindex="0" aria-label="Productos recomendados">
              ${relatedProducts.map((related) => `
                <a class="related-product" href="#/producto/${encodeURIComponent(related.id)}" aria-label="Ver ${related.name}">
                  <span class="related-product__image-wrap">
                    <img src="${related.images?.[0] ?? ''}" alt="" loading="lazy" />
                  </span>
                  <span class="related-product__name">${related.name}</span>
                </a>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}
    </main>
    ${renderFooter()}
  `;

  mountHeader();

  const relatedTrack = rootElement.querySelector('#relatedProductsTrack');
  rootElement.querySelectorAll('[data-related-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!relatedTrack) return;
      const direction = Number(button.dataset.relatedScroll);
      const distance = relatedTrack.clientWidth * 0.8 * direction;
      relatedTrack.scrollBy({ left: distance, behavior: 'smooth' });
    });
  });

  // Botón "Lo quiero por WhatsApp": envía el producto con el color y
  // almacenamiento que estén seleccionados en ese momento.
  const addBtn = document.querySelector('#quieroDetail');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const selectedColor = rootElement.querySelector('.color-swatch.active');
      const colorName = selectedColor?.dataset.colorName ?? product.colors?.[0] ?? '';
      pedirProductoPorWhatsApp(product, {
        color: colorName,
        almacenamiento: selectedStorage
      });
    });
  }

  const detailPrice = rootElement.querySelector('#detailPrice');
  rootElement.querySelectorAll('.filter-button[data-storage]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedStorage = button.dataset.storage;
      selectedStoragePrice = getStoragePrice(selectedStorage, selectedColorName);
      rootElement.querySelectorAll('.filter-button[data-storage]').forEach((option) => {
        option.classList.toggle('active', option === button);
      });
      if (detailPrice) {
        detailPrice.textContent = selectedStoragePrice === null ? 'Precio por confirmar' : formatPrice(selectedStoragePrice);
      }
    });
  });

  // Selección de COLOR: al hacer clic en un círculo, cambia la imagen grande
  // al color elegido, en tiempo real.
  const mainImage = document.getElementById('detailMainImage');
  const colorNameLabel = document.getElementById('selectedColorName');
  let imageTransitionTimeout;
  rootElement.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      const nuevaImagen = swatch.dataset.colorImage;
      const nombreColor = swatch.dataset.colorName;

      // Cambiamos la imagen con un pequeño desvanecido suave.
      if (mainImage && nuevaImagen) {
        clearTimeout(imageTransitionTimeout);
        mainImage.style.opacity = '0';
        imageTransitionTimeout = setTimeout(() => {
          mainImage.src = nuevaImagen;
          mainImage.alt = `${product.name} - ${nombreColor}`;
          mainImage.style.opacity = '1';
        }, 150);
      }

      // Actualizamos el nombre del color mostrado.
      if (colorNameLabel && nombreColor) {
        colorNameLabel.textContent = nombreColor;
      }

      if (nombreColor) {
        selectedColorName = nombreColor;
        selectedStoragePrice = getStoragePrice(selectedStorage, selectedColorName);
        if (detailPrice) {
          detailPrice.textContent = selectedStoragePrice === null ? 'Precio no registrado' : formatPrice(selectedStoragePrice);
        }
      }

      // Marcamos visualmente el círculo activo.
      rootElement.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
    });
  });
}
