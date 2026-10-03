import { renderHeader, mountHeader } from '../components/Header.js';
import { renderHeroSection, mountHeroSection } from '../components/HeroSection.js';
import { renderCatalogSection, mountCatalogSection } from '../components/CatalogSection.js';
import { renderExperienceSection, mountExperienceSection } from '../components/ExperienceSection.js';
import { renderFooter } from '../components/Footer.js';

export function renderHomePage(rootElement) {
  rootElement.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHeroSection()}
      ${renderCatalogSection()}
      ${renderExperienceSection()}
    </main>
    ${renderFooter()}
  `;

  mountHeader();
  mountHeroSection();
  mountCatalogSection();
  mountExperienceSection();
}
