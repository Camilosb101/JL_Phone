import planCanjeImage from '../../assets/images/Plan-canje.jpeg';
import { abrirWhatsApp } from '../services/whatsappService.js';
import { router } from '../core/Router.js';

export function renderExperienceSection() {
  return `
<section id="experiencia" class="experience-section section-padding">
  <div class="container">
    <div class="experience-panel">
      <div>
        <p class="section-kicker"><span></span> PLAN CANJE JL IPHONE</p>
        <h2>Renueva con<br /><span class="highlight">Plan Canje.</span></h2>
        <img class="experience-image" src="${planCanjeImage}" alt="Plan Canje JL iPhone" />
      </div>
      <div class="experience-list">
        <div><span>01</span><p><strong>Cotiza tu equipo actual</strong><br />Envíanos modelo, capacidad y fotos de tu celular para darte una valoración estimada al instante.</p></div>
        <div><span>02</span><p><strong>Elige tu nuevo equipo</strong><br />Selecciona el iPhone o Samsung que deseas llevar de nuestro catálogo disponible.</p></div>
        <div><span>03</span><p><strong>Entrega y validación</strong><br />Revisamos el estado físico y funcional de tu dispositivo de forma rápida y transparente.</p></div>
        <div><span>04</span><p><strong>Paga la diferencia y estrena</strong><br />Tomamos tu equipo anterior como parte de pago; solo abonas el saldo restante y te lo llevas.</p></div>
        <div class="experience-actions">
          <button class="btn-whatsapp-canje" type="button" data-action="canje-whatsapp" aria-label="Solicitar información por WhatsApp">
            <span class="btn-whatsapp-canje__icon" aria-hidden="true">💬</span>
            Solicitar info por WhatsApp
          </button>
          <button class="btn-more-info" type="button" data-action="more-info" aria-label="Ver más información">
            Ver más info <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <p class="experience-note">Por seguridad y transparencia, el Plan Canje se realiza exclusivamente de manera presencial en Bogotá. No recibimos ni enviamos dispositivos por encomienda bajo esta modalidad.</p>
    </div>
  </div>
</section>
  `;
}

export function mountExperienceSection() {
  const boton = document.querySelector('[data-action="canje-whatsapp"]');
  if (boton) {
    boton.addEventListener('click', () => {
      abrirWhatsApp('¡Hola JL Phone! 🙌 Quiero información sobre el Plan Canje. Les cuento qué equipo tengo para la cotización.');
    });
  }

  const infoButton = document.querySelector('[data-action="more-info"]');
  if (infoButton) {
    infoButton.addEventListener('click', () => router.navigate('/informacion'));
  }
}
