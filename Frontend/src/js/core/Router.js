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
    const rawPath = hash.replace(/^#\/?/, '');
    const path = rawPath ? `/${rawPath}` : '/';

    for (const route of this._routes) {
      // Check for parameterized routes like /producto/:id
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

    return null;
  }

  start() {
    const handleRoute = () => {
      const result = this._matchRoute(window.location.hash);
      if (result && this._rootElement) {
        result.handler(this._rootElement, result.params);
      }
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }
}

export const router = new Router();
