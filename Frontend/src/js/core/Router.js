class Router {
  constructor() {
    this._routes = [];
    this._rootElement = null;
  }

  setRoot(element) {
    this._rootElement = element;
  }

  addRoute(path, handler) {
    this._routes.push({ path, handler });
  }

  navigate(path) {
    window.location.hash = path;
  }

  _matchRoute(hash) {
    const raw = hash.replace(/^#/, '').trim();

    // Check if hash is an anchor on the homepage like catalogo, experiencia, inicio
    const inPageAnchors = ['catalogo', 'experiencia', 'inicio'];
    if (inPageAnchors.includes(raw)) {
      const homeRoute = this._routes.find(r => r.path === '/');
      return {
        handler: (root) => {
          const targetEl = document.getElementById(raw);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          } else if (homeRoute) {
            homeRoute.handler(root, {});
            setTimeout(() => {
              document.getElementById(raw)?.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          }
        },
        params: {}
      };
    }

    const path = raw ? (raw.startsWith('/') ? raw : `/${raw}`) : '/';

    for (const route of this._routes) {
      const routeParts = route.path.split('/');
      const pathParts = path.split('/');

      if (routeParts.length !== pathParts.length) continue;

      const params = {};
      let match = true;

      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(':')) {
          params[routeParts[i].slice(1)] = pathParts[i];
        } else if (routeParts[i] !== pathParts[i]) {
          match = false;
          break;
        }
      }

      if (match) {
        return { handler: route.handler, params };
      }
    }

    // Default fallback to home route
    const defaultRoute = this._routes.find(r => r.path === '/');
    if (defaultRoute) {
      return { handler: defaultRoute.handler, params: {} };
    }

    return null;
  }

  start() {
    const handleRoute = () => {
      const result = this._matchRoute(window.location.hash);
      if (result && this._rootElement) {
        // Scroll to top when changing full pages unless anchor is specified
        if (!window.location.hash.includes('catalogo') && !window.location.hash.includes('experiencia')) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
        result.handler(this._rootElement, result.params);
      }
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }
}

export const router = new Router();
