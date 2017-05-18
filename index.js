import Router from './modules/router';
import ChatPage from './pages/chat';
import MainPage from './pages/main';


let appEl =document.querySelector('.app');

const router = new Router({
    el: appEl
});

const chatPageView = new ChatPage({
    el: document.createElement('div')
});
const mainPageView = new MainPage({
    el: document.createElement('div')
});

appEl.appendChild(chatPageView.el);
appEl.appendChild(mainPageView.el);

router.register('/chat', chatPageView);
router.register('/main', mainPageView);

router.start();

if (location.pathname === '/') {
    router.go('/main');
} else {
    router.go(location.pathname);
}