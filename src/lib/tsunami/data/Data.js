import { ChangeEvent } from '../ChangeEvent';
import { EventDispatcher } from '../EventDispatcher';

export default class Data extends EventDispatcher {
  get value() {
    return this._value;
  }

  set value(value) {
    if (value !== this._value || this.forceChangeEvent) {
      this._value = value;
      ChangeEvent.dispatchEvent(this, 'value', this.value);
    }
  }

  reset(value) {
    this.value = value;
  }

  toString() {
    if (this.debug) {
      console.log('Data.toString', this.value);
    }
    return this.value;
  }

  serialize() {
    return this.value;
  }

  deserialize(value) {
    this.value = value;
  }

  copy(data) {
    this.value = data.value;
    ChangeEvent.dispatchEvent(this, 'value', this.value);
  }

  destroy() {
    this.value = null;
    return super.destroy();
  }

  static get CHANGE() {
    return 'value';
  }
}
