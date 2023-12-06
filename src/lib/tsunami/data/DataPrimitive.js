import Data from './Data';

export default class DataPrimitive extends Data {
  constructor(value, modifiers = []) {
    super();
    this.modifiers = modifiers;
    this.length = new Data();
    this.value = value;
  }

  get value() {
    return super.value;
  }

  set value(value) {
    for (let i = 0; i < this.modifiers.length; i++) {
      const modifier = this.modifiers[i];
      if (modifier) {
        value = modifier(value);
      }
    }
    super.value = value;
    this.length.value = Math.max(1, this.value.toString().length);
  }

  destroy() {
    this.modifiers = [];
    if (this.validation) {
      try {
        this.validation.destroy();
      } catch (e) {
        // continue regardless of error
      }
    }
    this.validation = null;
    return super.destroy();
  }
}
