import DataPrimitive from './DataPrimitive';

export default class StringData extends DataPrimitive {
  constructor(value = '', modifiers = []) {
    super(value, modifiers);
  }

  get value() {
    return super.value;
  }

  set value(value = '') {
    super.value = value.toString();
  }

  reset(value = '') {
    super.reset(value);
  }
}
