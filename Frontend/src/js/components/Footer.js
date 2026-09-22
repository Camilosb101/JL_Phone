import logoImage from '../../assets/images/image-removebg-preview .png';

export function renderFooter() {
  return `
<footer class="site-footer">
  <div class="container d-flex flex-column flex-md-row justify-content-between gap-3">
    <span class="brand-mark"><img src="${logoImage}" alt="JL Mobile" /></span>
    <small>© 2024 JL Mobile. Tecnología que se siente.</small>
    <span class="footer-status"><i class="bi bi-circle-fill"></i> Atención online</span>
  </div>
</footer>
  `;
}
