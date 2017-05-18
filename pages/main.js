export default class MainPage {
    constructor ({el}) {
        this.el = el;

        this.el.innerHTML = `
            <h1>Я главное меню!</h1>
            <ul>
                <li>
                    <a href="/chat">Чат!</a>
                </li>
            </ul>
        `;

        this.hide();
    }

    show () {
        this.el.hidden = false;
    }

    hide () {
        this.el.hidden = true;
    }
}