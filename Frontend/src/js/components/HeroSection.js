import appleBackgroundImage from '../../assets/images/image-removebg-preview.png';
import samsungBackgroundImage from '../../assets/images/samsung-logo.png';
import heroImage from '../../assets/images/iphone-18-promax-cereza.png';
import { eventBus } from '../core/EventBus.js';

export function renderHeroSection() {
  return `
<div class="brand-background" aria-hidden="true">
  <img class="brand-background__apple" src="${appleBackgroundImage}" alt="" />
  <img class="brand-background__samsung" src="${samsungBackgroundImage}" alt="" />
</div>
<section id="inicio" class="hero-section">
  <div class="hero-grid container">
    <div class="hero-copy">
      <p class="section-kicker"><span></span> Equipos 100% garantizados</p>
      <h1>Tu próximo<br /><em>smartphone</em><br />empieza aquí.</h1>
      <p class="hero-lede">Estrena iPhone o Samsung hoy. Recibimos tu celular usado como parte de pago y te asesoramos sin letra pequeña.</p>
      <div class="hero-actions d-flex flex-wrap align-items-center gap-3">
        <a class="btn btn-primary-brand" href="#/" data-scroll-target="catalogo">Ver catálogo iPhone &amp; Samsung <span>↘</span></a>
        <span class="hero-note"><span class="status-dot whatsapp-status" aria-hidden="true">◉</span> Respuesta inmediata 24/7</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-glow"></div>
      <img src="${heroImage}" alt="iPhone 18 Pro Max Dark Cherry" />
      <a class="hero-spec hero-spec--top" href="#/producto/iphone-18-pro-max" aria-label="Ver detalles del iPhone 18 Pro Max"><span>01</span><strong>Colección<br />Pro</strong></a>
      <a class="hero-spec hero-spec--bottom" href="#/producto/iphone-18-pro-max"><strong>Ver iPhone 18 Pro<br />Max</strong><span>↗</span></a>
    </div>
  </div>
  <div class="hero-marquee">
    <button class="hero-brand-button" type="button" data-filter="Apple">APPLE</button>
    <i></i>
    <button class="hero-brand-button" type="button" data-filter="Samsung">SAMSUNG</button>
    <i></i>
    <span>PREMIUM TECH</span>
  </div>
</section>
  `;
}

export function mountHeroSection() {
  const buttons = document.querySelectorAll('.hero-brand-button[data-filter]');
  buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const brand = event.target.dataset.filter;
      eventBus.emit('filter:brand', brand);
      
      const catalogSection = document.getElementById('catalogo');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = 'catalogo';
      }
    });
  });
}
