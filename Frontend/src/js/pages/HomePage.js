import { renderHeader, mountHeader } from '../components/Header.js';
import { renderHeroSection, mountHeroSection } from '../components/HeroSection.js';
import { renderCatalogSection, mountCatalogSection } from '../components/CatalogSection.js';
import { renderExperienceSection } from '../components/ExperienceSection.js';
import { renderFooter } from '../components/Footer.js';
import { renderCartPanel, mountCartPanel } from '../components/CartPanel.js';

export function renderHomePage(rootElement) {
  rootElement.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHeroSection()}
      ${renderCatalogSection()}
      ${renderExperienceSection()}
    </main>
    ${renderFooter()}
    ${renderCartPanel()}
  `;

  mountHeader();
  mountHeroSection();
  mountCatalogSection();
  mountCartPanel();
}
