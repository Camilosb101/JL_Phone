import appleBackgroundImage from '../../assets/images/image-removebg-preview.png';
import samsungBackgroundImage from '../../assets/images/Samgungs.png';
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
      <p class="section-kicker"><span></span> La nueva generación, aquí</p>
      <h1>Tu próximo<br /><em>smartphone</em><br />empieza aquí.</h1>
      <p class="hero-lede">Tecnología premium seleccionada para quienes no se conforman con lo de siempre.</p>
      <div class="hero-actions d-flex flex-wrap align-items-center gap-3">
        <a class="btn btn-primary-brand" href="#catalogo">Explorar catálogo <span>↘</span></a>
        <span class="hero-note"><span class="status-dot"></span> Respuesta inmediata 24/7</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-glow"></div>
      <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1100&q=90" alt="Smartphone premium" />
      <div class="hero-spec hero-spec--top"><span>01</span><strong>Colección<br />Pro</strong></div>
      <div class="hero-spec hero-spec--bottom"><strong>Diseñado<br />para destacar</strong><span>↗</span></div>
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
