import appleBackgroundImage from '../../assets/images/image-removebg-preview.png';
import samsungBackgroundImage from '../../assets/images/samsung-logo.png';
import atencionImage from '../../assets/images/Plan-canje.jpeg';
import { renderHeader, mountHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export function renderAboutPage(rootElement) {
  rootElement.innerHTML = `
    ${renderHeader()}
    <div class="brand-background" aria-hidden="true">
      <img class="brand-background__apple" src="${appleBackgroundImage}" alt="" />
      <img class="brand-background__samsung" src="${samsungBackgroundImage}" alt="" />
    </div>
    <main class="about-page">
      <section class="about-hero section-padding">
        <div class="container about-hero__grid">
          <div class="about-hero__copy">
            <a href="#/" class="btn btn-outline-light about-back">← Volver al inicio</a>
            <p class="section-kicker"><span></span> SOBRE JL PHONE</p>
            <h1>Tu próximo smartphone con <em>respaldo real</em> y trato personal en Bogotá.</h1>
            <p class="about-hero__lead">En JL Phone / JL Mobile transformamos la compra de tecnología en una experiencia transparente, segura y sin sorpresas.</p>
            <p class="about-hero__body">Explora lo último de Apple y Samsung desde nuestra vitrina digital, con atención presencial para que elijas y revises tu equipo con tranquilidad.</p>
            <a class="btn btn-primary-brand about-hero__cta" href="#catalogo">Explorar equipos <span>↘</span></a>
          </div>
          <figure class="about-hero__image">
            <img src="${atencionImage}" alt="Atención personal para elegir y revisar un smartphone en Bogotá" />
            <figcaption>Atención cercana. Decisiones informadas. Compra presencial.</figcaption>
          </figure>
        </div>
      </section>

      <section class="about-story section-padding" aria-labelledby="aboutStoryTitle">
        <div class="container about-story__grid">
          <div>
            <p class="section-kicker"><span></span> QUIÉNES SOMOS</p>
            <h2 id="aboutStoryTitle">Tecnología elegida con <em>tranquilidad.</em></h2>
          </div>
          <div class="about-story__text">
            <p>Nacimos para resolver uno de los mayores temores al comprar un celular: la incertidumbre. Combinamos la agilidad de un catálogo en línea con la seguridad de la atención presencial.</p>
            <p>En nuestra plataforma eliges modelo, capacidad y color. En nuestro punto de atención en Bogotá revisas el equipo en mano, verificas su estado y cierras tu compra con asesoría humana especializada.</p>
          </div>
        </div>
      </section>

      <section class="about-pillars section-padding" aria-labelledby="aboutPillarsTitle">
        <div class="container">
          <div class="about-section-heading">
            <div>
              <p class="section-kicker"><span></span> NUESTRO RESPALDO</p>
              <h2 id="aboutPillarsTitle">Pilares de <em>confianza.</em></h2>
            </div>
            <p>Claridad en cada equipo y acompañamiento en cada paso.</p>
          </div>
          <div class="about-pillar-grid">
            <article class="about-pillar">
              <span class="about-pillar__number">01</span>
              <h3>Catálogo seleccionado de última generación</h3>
              <p>Referencias de Apple y Samsung, desde las líneas Pro y Ultra hasta opciones para el día a día, con especificaciones técnicas claras.</p>
            </article>
            <article class="about-pillar">
              <span class="about-pillar__number">02</span>
              <h3>Seminuevos certificados y transparentes</h3>
              <p>Indicamos la salud de batería, capacidad y estado estético. Los equipos pasan por revisión técnica y cuentan con garantía comercial y respaldo de IMEI legal de por vida.</p>
            </article>
            <article class="about-pillar">
              <span class="about-pillar__number">03</span>
              <h3>Plan Canje ágil</h3>
              <p>Recibimos tu dispositivo como parte de pago tras una valoración técnica justa y presencial, para facilitar el cambio a un equipo nuevo o seminuevo.</p>
            </article>
            <article class="about-pillar">
              <span class="about-pillar__number">04</span>
              <h3>Atención cara a cara en Bogotá</h3>
              <p>Coordinamos contigo, resolvemos tus dudas y te recibimos personalmente para la entrega e inspección física del equipo.</p>
            </article>
          </div>
          <p class="about-guarantee-note">Los equipos seminuevos cuentan con 6 meses de garantía comercial. La condición específica se confirma para cada unidad antes de la compra.</p>
        </div>
      </section>

      <section class="about-process section-padding" aria-labelledby="aboutProcessTitle">
        <div class="container">
          <p class="section-kicker"><span></span> ASÍ TRABAJAMOS</p>
          <h2 id="aboutProcessTitle">Tres pasos para estrenar.</h2>
          <ol class="about-process__steps">
            <li>
              <span>01</span>
              <div>
                <h3>Explora en la web</h3>
                <p>Selecciona el smartphone que buscas y revisa las opciones de capacidad y color.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Contáctanos por WhatsApp</h3>
                <p>Confirmamos precio final y disponibilidad inmediata, resolvemos tus dudas y coordinamos tu cita.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Revisa y estrena en Bogotá</h3>
                <p>Prueba el equipo en persona y, si haces Plan Canje, entrega tu celular anterior como parte de pago.</p>
              </div>
            </li>
          </ol>
          <a class="btn btn-primary-brand" href="#catalogo">Ver catálogo <span>↗</span></a>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;

  mountHeader();
}