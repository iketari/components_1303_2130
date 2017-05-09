(function () {
	'use strict';

	class Form {
		constructor({el, h, projector, data = {}}) {
			this.el = el;
			this.data = data;

			// vdom stuff
			this.h = h;
			this.projector = projector;

			this._initEvents();

			projector.append(this.el, this.renderMaquette.bind(this));
		}

		renderMaquette () {
			const h = this.h;

			return h('form', {onsubmit: this._onSubmit}, [
				h('textarea', {name: 'message', type: 'text'}),
				h('input', {type: 'submit', value: 'Отправить'})
			]);
		}


		/**
		 * @deprecated use vdom
		 */
		render () {
			this.el.innerHTML = `
				<form>
					<textarea name="message" type="text"></textarea>
					<input type="submit" value="Отправить" />
				</form>
			`;

			this.formEl = this.el.querySelector('form');
		}

		/**
		 * Установка callback отправки формы
		 * @param  {Function} cb
		 */
		onSubmit (cb) {
			this._submitCallback = cb;
		}

		reset () {
			this.formEl.reset();
		}
	
		_initEvents () {
			this._onSubmit = this._onSubmit.bind(this);
		}

		_onSubmit (event) {
			event.preventDefault();
			let formData = this._getFormData();

			this._submitCallback(formData);
		}

		_getInputs () {
			return this.el.querySelectorAll('input, textarea');
		}

		_getFormData () {
			let formData = {};

			[...this._getInputs()].forEach(input => {
				formData[input.name] = {
					value: input.value
				};
			});

			return formData;
		}

	}

	//export
	window.Form = Form;
})();