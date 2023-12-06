import DataPrimitive from './DataPrimitive';
import { boolify } from '../utils/string';

export default class BooleanData extends DataPrimitive {
  constructor(value = false, modifiers = []) {
    super(value, modifiers);
  }

  get value() {
    return super.value;
  }

  set value(value = false) {
    super.value = boolify(value);
  }

  reset(value = false) {
    super.reset(value);
  }
}
