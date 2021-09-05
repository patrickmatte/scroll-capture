import ChangeEvent from '../ChangeEvent';

export default class Data extends EventTarget {
  get value() {
    return this._value;
  }

  set value(value) {
    if (value !== this._value || this.forceChangeEvent) {
      this._value = value;
      ChangeEvent.dispatch(this, 'value', this.value);
    }
  }

  reset(value) {
    this.value = value;
  }

  toString() {
    if (this.debug) {
      console.log('Data.toString', this.value);
    }
    return this.value.toString();
  }

  serialize() {
    return this.value;
  }

  deserialize(value) {
    this.value = value;
  }

  copy(data) {
    this.value = data.value;
    ChangeEvent.dispatch(this, 'value', this.value);
  }

  destroy() {
    this.value = null;
    return super.destroy();
  }

  static get CHANGE() {
    return 'value';
  }
}
