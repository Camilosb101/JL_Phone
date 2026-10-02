import appleBackgroundImage from '../../assets/images/image-removebg-preview.png';
import samsungBackgroundImage from '../../assets/images/samsung-logo.png';
import casoCanjeImage from '../../assets/images/Plan-canje.jpeg';
import { renderHeader, mountHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderCartPanel, mountCartPanel } from '../components/CartPanel.js';

export function renderInfoPage(rootElement) {
  rootElement.innerHTML = `
    ${renderHeader()}
    <div class="brand-background" aria-hidden="true">
      <img class="brand-background__apple" src="${appleBackgroundImage}" alt="" />
      <img class="brand-background__samsung" src="${samsungBackgroundImage}" alt="" />
    </div>
    <main class="info-page">
      <section class="info-page__intro section-padding">
        <div class="container">
          <a href="#/" class="btn btn-outline-light info-page__back">← Volver al inicio</a>
          <p class="section-kicker"><span></span> MÁS INFORMACIÓN JL MOBILE</p>
          <h1>Compra con<br /><em>confianza.</em></h1>
          <p class="hero-lede">Te acompañamos para que elijas el equipo correcto, conozcas su estado y recibas una atención clara antes, durante y después de tu compra.</p>
        </div>
      </section>
      <!-- Cómo funciona el Plan Canje + casos de éxito (cuadros alternados) -->
      <section class="info-page__cases section-padding">
        <div class="container">
          <p class="section-kicker"><span></span> CÓMO FUNCIONA EL PLAN CANJE</p>
          <h2 class="info-cases__title">Entrega tu celular,<br /><em>paga solo la diferencia.</em></h2>

          <!-- Cuadro 1: texto izquierda / foto derecha -->
          <article class="case-row">
            <div class="case-row__text">
              <span class="case-row__tag">Paso 1 · Cotización</span>
              <h3>Valoramos tu equipo actual</h3>
              <p>Nos muestras tu celular, revisamos su modelo, capacidad y estado, y te damos una valoración justa y transparente en el momento, sin compromisos.</p>
            </div>
            <div class="case-row__media">
              <img src="${casoCanjeImage}" alt="Cliente cotizando su equipo en JL Mobile" />
            </div>
          </article>

          <!-- Cuadro 2: texto derecha / foto izquierda -->
          <article class="case-row case-row--reverse">
            <div class="case-row__text">
              <span class="case-row__tag">Paso 2 · Tu nuevo equipo</span>
              <h3>Eliges el que quieres llevar</h3>
              <p>Escoges tu nuevo iPhone o Samsung de nuestro catálogo. Tu equipo anterior se toma como parte de pago y solo abonas el saldo restante.</p>
            </div>
            <div class="case-row__media">
              <img src="${casoCanjeImage}" alt="Cliente eligiendo su nuevo smartphone" />
            </div>
          </article>

          <!-- Cuadro 3: texto izquierda / foto derecha -->
          <article class="case-row">
            <div class="case-row__text">
              <span class="case-row__tag">Caso de éxito</span>
              <h3>Clientes felices, entregas seguras</h3>
              <p>Cada canje se concreta de forma presencial en Bogotá, con revisión del equipo y acompañamiento. Así cerramos cada venta con total confianza.</p>
            </div>
            <div class="case-row__media">
              <img src="${casoCanjeImage}" alt="Caso de venta exitosa en JL Mobile" />
            </div>
          </article>
        </div>
      </section>

      <section class="info-page__content section-padding">
        <div class="container">
          <div class="info-grid">
            <article class="info-card">
              <span class="info-card__number">01</span>
              <h2>Equipos verificados</h2>
              <p>Revisamos cada dispositivo y te mostramos sus características reales, capacidad, color y disponibilidad antes de cerrar la compra.</p>
            </article>
            <article class="info-card">
              <span class="info-card__number">02</span>
              <h2>Asesoría humana</h2>
              <p>Te ayudamos a comparar iPhone y Samsung según tu presupuesto y el uso que le das a tu celular, sin letra pequeña.</p>
            </article>
            <article class="info-card">
              <span class="info-card__number">03</span>
              <h2>Plan Canje presencial</h2>
              <p>Valoramos tu equipo actual en Bogotá y lo recibimos como parte de pago. Solo cancelas la diferencia de tu nuevo smartphone.</p>
            </article>
            <article class="info-card">
              <span class="info-card__number">04</span>
              <h2>Compra segura</h2>
              <p>La entrega y el pago se realizan de manera presencial, con revisión del equipo y acompañamiento de nuestro equipo.</p>
            </article>
          </div>
          <div class="info-page__brands">
            <span>ELIGE TU PRÓXIMO EQUIPO</span>
            <strong>Apple <i></i> Samsung</strong>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
    ${renderCartPanel()}
  `;

  mountHeader();
  mountCartPanel();
}