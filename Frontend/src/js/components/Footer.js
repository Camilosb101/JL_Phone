import logoImage from '../../assets/images/image.png';

export function renderFooter() {
  return `
<footer class="site-footer">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 footer-top">
    <span class="footer-brand"><img src="${logoImage}" alt="JL Phone" /></span>
    <small>© 2024 JL Mobile. Tecnología que se siente.</small>
    <span class="footer-status"><i class="bi bi-circle-fill"></i> Atención online</span>
  </div>
  <div class="container">
    <p class="footer-disclaimer">Precios y stock sujetos a disponibilidad. Cada compra y Plan Canje se concreta de manera presencial con asesoría humana personalizada, garantizando el dispositivo exacto para ti. Pagos contra entrega y revisiones seguras en Bogotá.</p>
  </div>
</footer>
  `;
}
