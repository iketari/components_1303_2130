import {App} from '../components/app/app';

export default class ChatPage {
    constructor ({el}) {
        this.el = el;

        this.el.innerHTML = `
            <h1>Я чатик!</h1>
            <a href="/main">В меню!</a>
        `;

        this.hide();

        this.component = new App({
            el: this.el
        });
    }

    show () {
        this.el.hidden = false;
        this.component.render();
    }

    hide () {
        this.el.hidden = true;
    }
}