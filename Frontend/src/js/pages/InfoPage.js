import appleBackgroundImage from '../../assets/images/image-removebg-preview.png';
import samsungBackgroundImage from '../../assets/images/samsung-logo.png';
import historiaClientesImage from '../../../../Gemini_Generated_Image_gb29cxgb29cxgb29.jpeg';
import clientesImage from '../../../../Gemini_Generated_Image_qcdl8rqcdl8rqcdl.jpeg';
import confianzaImage from '../../../../Gemini_Generated_Image_t0mt37t0mt37t0mt.jpeg';
import comunidadImage from '../../../../Gemini_Generated_Image_vghzrvvghzrvvghz.jpeg';
import { renderHeader, mountHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

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
      <section class="info-page__cases section-padding">
        <div class="container">
          <p class="section-kicker"><span></span> PLAN CANJE JL PHONE</p>
          <h2 class="info-cases__title">Plan Canje: <em>tu equipo actual es dinero</em></h2>
          <p class="info-cases__lead">Actualizar tu smartphone nunca fue tan sencillo. Evaluamos tu dispositivo usado como parte de pago para adquirir tu siguiente equipo nuevo o seminuevo. Recibes una cotización y reduces el saldo de tu inversión tecnológica.</p>
          <p class="section-kicker info-cases__steps-kicker"><span></span> CÓMO FUNCIONA NUESTRA ATENCIÓN</p>

          <article class="case-row">
            <div class="case-row__text">
              <span class="case-row__tag">PASO 1 · COMPRA CONFIABLE Y TRANSPARENTE</span>
              <h3>Clientes reales, historias reales</h3>
              <p>Más que vender celulares, hacemos parte de tus mejores momentos. Cada foto refleja la tranquilidad de recibir tecnología 100% original, con asesoría personalizada desde la primera consulta, precios justos y la seguridad de que tu inversión está protegida de inicio a fin.</p>
            </div>
            <div class="case-row__media">
              <img src="${historiaClientesImage}" alt="Clientes compartiendo sus experiencias con JL Phone" />
            </div>
          </article>

          <article class="case-row case-row--reverse">
            <div class="case-row__text">
              <span class="case-row__tag">PASO 2 · ASESORÍA PERSONALIZADA</span>
              <h3>Atención personalizada y trato directo por WhatsApp</h3>
              <p>Nada de respuestas automáticas frías. Un asesor real te guía paso a paso: resolvemos todas tus dudas técnicas, te enviamos fotos o videos reales del equipo antes del envío y cotizamos tu Plan Canje al instante para que compres con total tranquilidad.</p>
            </div>
            <div class="case-row__media">
              <img src="${clientesImage}" alt="Clientes probando y usando sus smartphones" />
            </div>
          </article>

          <article class="case-row">
            <div class="case-row__text">
              <span class="case-row__tag">PASO 3 · ENTREGA PRESENCIAL Y REVISIÓN EN BOGOTÁ</span>
              <h3>Toca, prueba y verifica tu iPhone antes de pagar</h3>
              <p>Cero misterios. Agendamos una cita en un lugar seguro de Bogotá para que tengas el equipo en tus manos. Enciéndelo, revisa las cámaras, la batería y la pantalla, y comprueba su originalidad técnica. Solo cuando estés 100% satisfecho y tranquilo, concretamos la venta. Tu seguridad y confianza están primero.</p>
            </div>
            <div class="case-row__media">
              <img src="${confianzaImage}" alt="Cliente revisando su iPhone durante una entrega presencial en Bogotá" />
            </div>
          </article>

          <article class="case-row case-row--reverse">
            <div class="case-row__text">
              <span class="case-row__tag">PASO 4 · GARANTÍA Y RESPALDO POSTVENTA</span>
              <h3>Tu tranquilidad continúa después de la entrega</h3>
              <p>Nuestra relación no termina con la entrega del celular. Cuentas con garantía real por escrito y soporte continuo para resolver dudas, configurar tu equipo o transferir tus datos. Te brindamos acompañamiento total para que disfrutes de tu compra con la seguridad de tener un respaldo siempre a tu alcance.</p>
            </div>
            <div class="case-row__media">
              <img src="${comunidadImage}" alt="Cliente satisfecho con su equipo y el respaldo de JL Phone" />
            </div>
          </article>
        </div>
      </section>

      <section class="info-page__guarantee section-padding" aria-labelledby="guaranteeTitle">
        <div class="container">
          <div class="guarantee-intro">
            <p class="section-kicker"><span></span> RESPALDO JL PHONE</p>
            <h2 id="guaranteeTitle">Garantía, Confianza y <em>Respaldo JL Phone</em></h2>
            <p class="guarantee-intro__lead">Tu próximo smartphone, con la confianza y el respaldo que buscas en Bogotá.</p>
            <p class="guarantee-intro__copy">En JL Phone / JL Mobile transformamos la compra de tecnología móvil en una experiencia directa, transparente y segura. Nuestra web es una vitrina digital para explorar equipos de alta gama y seminuevos; te acompañamos con asesoría personalizada y concretamos cada compra de manera presencial.</p>
          </div>

          <div class="guarantee-points">
            <article class="guarantee-point">
              <span class="guarantee-point__index">01</span>
              <h3>Revisa antes de decidir</h3>
              <p>Creemos en el trato humano y en la tranquilidad de ver, probar y validar tu equipo antes o durante la entrega.</p>
            </article>
            <article class="guarantee-point">
              <span class="guarantee-point__index">02</span>
              <h3>Compra clara y presencial</h3>
              <p>Confirmamos contigo el modelo, capacidad, color, estado y precio del equipo antes de cerrar la compra en Bogotá.</p>
            </article>
            <article class="guarantee-point">
              <span class="guarantee-point__index">03</span>
              <h3>Garantía según tu equipo</h3>
              <p>La vigencia, cobertura y condiciones aplicables pueden variar según el dispositivo. Te las informamos antes de confirmar la compra.</p>
            </article>
          </div>
          <p class="guarantee-note">La disponibilidad, el estado y las condiciones de garantía se confirman con un asesor para el equipo específico que elijas.</p>

          <div class="catalog-promise">
            <div class="catalog-promise__intro">
              <p class="section-kicker"><span></span> NUESTRA SELECCIÓN</p>
              <h3>Catálogo exclusivo de última generación</h3>
              <p>Accede a los dispositivos más codiciados del mercado internacional:</p>
            </div>
            <div class="catalog-promise__items">
              <article class="catalog-promise__item">
                <h4>Línea iPhone nueva</h4>
                <p>Modelos desde iPhone 14 hasta iPhone 18, incluidas versiones Pro, Pro Max y iPhone Air, en acabados y colores oficiales.</p>
              </article>
              <article class="catalog-promise__item">
                <h4>Serie Samsung Galaxy</h4>
                <p>Rendimiento prémium con la familia Ultra —Galaxy S23, S25 y S26— y la versatilidad de la serie Galaxy A, incluido el A57.</p>
              </article>
              <article class="catalog-promise__item">
                <h4>Seminuevos certificados</h4>
                <p>Selección de iPhone desde el 11 hasta el 16, rigurosamente probados, 100% funcionales y con garantía comercial directa.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="info-page__tradein-final section-padding" aria-labelledby="tradeInFinalTitle">
        <div class="container">
          <p class="section-kicker"><span></span> PLAN CANJE JL PHONE</p>
          <h2 id="tradeInFinalTitle" class="info-cases__title">Plan Canje: <em>tu equipo actual es dinero</em></h2>
          <p class="info-cases__lead">Actualizar tu smartphone nunca fue tan sencillo. Evaluamos tu dispositivo usado como parte de pago para adquirir tu siguiente equipo nuevo o seminuevo. Recibes una cotización justa al instante y reduces de inmediato el saldo de tu inversión tecnológica.</p>

          <h3 class="tradein-final__subtitle">Cómo funciona nuestra atención</h3>
          <ol class="tradein-final__steps">
            <li>
              <span>01</span>
              <div>
                <h4>Explora y cotiza</h4>
                <p>Navega por la tienda, elige capacidad y acabado, y pídelo por WhatsApp con un clic.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h4>Conexión directa por WhatsApp</h4>
                <p>Un asesor humano te ayuda a coordinar disponibilidad, resolver dudas técnicas o validar tu Plan Canje.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h4>Cierre presencial y seguro</h4>
                <p>Concretamos la venta, entrega y revisión del equipo presencialmente en Bogotá. Verificas el producto antes de finalizar la transacción.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;

  mountHeader();
}