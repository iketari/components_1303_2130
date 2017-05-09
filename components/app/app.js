(function () {
	'use strict';

	//import
	const Chat = window.Chat;
	const Form = window.Form;
	const maquette = window.maquette;

	const projector = maquette.createProjector();
	const h = maquette.h;

	window.projector = projector;

	class App {
		constructor(options) {
			this.el = options.el;

			this._createComponents();
			this._initMediate();

			this.el.appendChild(this.chat.el);
			this.el.appendChild(this.form.el);

			this.render();
		}

		render () {
			projector.scheduleRender();
		}

		_createComponents () {
			this.chat = new Chat({
				el: document.createElement('div'),
				h,
				projector
			});

			this.form = new Form({
				el: document.createElement('div'),
				h,
				projector
			});
		}

		_initMediate () {
			this.form.onSubmit((data) => {
				this.chat.addMessage({
					text: data.message.value
				});

				this.render();
			});
		}
	
		// methods
	}

	//export
	window.App = App;
})();