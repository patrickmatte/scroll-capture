import DataPrimitive from './DataPrimitive';

export default class NumberData extends DataPrimitive {
  constructor(value = NaN, modifiers = []) {
    super(value, modifiers);
  }

  get value() {
    return super.value;
  }

  set value(value = NaN) {
    super.value = Number(value);
  }

  reset(value = 0) {
    super.reset(value);
  }

  add(value = 1) {
    this.value += value;
  }

  subtract(value = 1) {
    this.value -= value;
  }
}
