(function () {
	'use strict';

	//import
	const tmpl = window.formTmpl;

	class Form {
		constructor(options) {
			this.el = options.el;

			this._initEvents();
		}

		render () {
			this.el.innerHTML = tmpl(this.data);

			this.formEl = this.el.querySelector('form');
		}

		/**
		 * Регистрация обработчика события
		 * @param  {string}   name - тип события
		 * @param  {function} cb
		 */
		on (name, cb) {
			this.el.addEventListener(name, cb);
		}

		/**
		 * Вызов обработчиков событий
		 * @param  {string} name - тип события
		 * @param  {*} data
		 */
		trigger (name, data) {
			let event = new CustomEvent(name, {detail: data});

			this.el.dispatchEvent(event);
		}

		reset () {
			this.formEl.reset();
		}
	
		_initEvents () {
			this.el.addEventListener('submit', this._onSubmit.bind(this));
		}

		_onSubmit (event) {
			event.preventDefault();
			let formData = this._getFormData();

			this.trigger('message', formData);
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