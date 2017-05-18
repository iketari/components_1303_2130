export default class Router {
    constructor ({el}) {
        this.el = el;
        this.views = {};
    }

    /**
     * Пеперйти на заданный путь
     * @param {strin} path
     * @returns {boolean} если путь не найден - false
     */
    go (path) {
        let pageView = this.views[path];

        if (!pageView) {
            return false;
        }

        pageView.show();

        if (this._currentView) {
            this._currentView.hide();
        }

        this._currentView = pageView;

        window.history.pushState({}, '', path);

        return true;
    }

    /**
     * @param {string} path
     * @param {PageView} pageView
     */
    register (path, pageView) {
        this.views[path] = pageView;
    }

    start () {
        this.el.addEventListener('click', event => {
            if (!(event.target instanceof HTMLAnchorElement)) {
                return;
            }

            if (this.go(event.target.getAttribute('href'))) {
                event.preventDefault();
            }
        });


        window.addEventListener('popstate', event => {
            this.go(location.pathname);
        });
    }
}