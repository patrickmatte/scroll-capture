import UIComponent from './UIComponent';

export default class UIInput extends UIComponent {
  constructor(element) {
    super(element);

    this.inputHandler = this.inputHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);

    switch (this.element.type) {
      case 'radio':
      case 'checkbox':
        this.inputtype = 'change';
        break;
      default:
        this.inputtype = 'input';
        break;
    }

    this.element.addEventListener('blur', this.blurHandler);
  }

  get inputtype() {
    return this._inputtype;
  }

  set inputtype(value = 'input') {
    this.element.removeEventListener(this.inputtype, this.inputHandler);
    this._inputtype = value;
    this.element.addEventListener(this.inputtype, this.inputHandler);
  }

  get value() {
    return this.element.value;
  }

  set value(val) {
    this.element.value = val;
    if (this.debug) this.log('UIInput set value', value);
  }

  get model() {
    return super.model;
  }

  set model(value) {
    switch (this.element.type) {
      case 'checkbox':
        this.element.checked = value;
        break;
      case 'radio':
        let checked = value == this.element.value;
        if (checked != this.element.checked) {
          this.element.checked = checked;
        }
        break;
      default:
        this.element.value = value;
        break;
    }
    if (this.debug) this.log('UIInput set model', value, this.element.value);
    super.model = value;
  }

  inputHandler(event) {
    let value;
    switch (this.element.type) {
      case 'checkbox':
        value = this.element.checked;
        break;
      case 'radio':
        value = this.element.value;
      // this.log("this.element.checked", this.element.checked);
      case 'number':
        value = this.element.valueAsNumber;
        break;
      default:
        value = this.element.value;
        break;
    }
    super.model = value;
  }

  blurHandler() {
    if (!this.element.value) {
      let placeholder = this.element.getAttribute('placeholder');
      if (placeholder) {
        this.model = placeholder;
      }
    }
  }

  get disabled() {
    return this.element.disabled;
  }

  set disabled(value) {
    this.element.disabled = value;
  }

  destroy() {
    this.element.removeEventListener('blur', this.blurHandler);
    this.element.removeEventListener(this.inputtype, this.inputHandler);
    return super.destroy();
  }
}
