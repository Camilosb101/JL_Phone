import 'bootstrap';
import '../css/main.css';
import { router } from './core/Router.js';
import { initCart } from './services/cartService.js';
import { renderHomePage } from './pages/HomePage.js';
import { renderProductDetailPage } from './pages/ProductDetailPage.js';

const app = document.querySelector('#app');

initCart();

router.setRoot(app);
router.addRoute('/', renderHomePage);
router.addRoute('/inicio', renderHomePage);
router.addRoute('/producto/:id', renderProductDetailPage);
router.start();
