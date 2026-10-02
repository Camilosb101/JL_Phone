import 'bootstrap';
import '../css/main.css';
import { router } from './core/Router.js';
import { initCart } from './services/cartService.js';
import { renderHomePage } from './pages/HomePage.js';
import { renderProductDetailPage } from './pages/ProductDetailPage.js';
import { renderUsedDevicesPage } from './pages/UsedDevicesPage.js';
import { renderInfoPage } from './pages/InfoPage.js';

const app = document.querySelector('#app');

initCart();

router.setRoot(app);
router.addRoute('/', renderHomePage);
router.addRoute('/inicio', renderHomePage);
router.addRoute('/producto/:id', renderProductDetailPage);
router.addRoute('/usados', renderUsedDevicesPage);
router.addRoute('/informacion', renderInfoPage);
router.start();
