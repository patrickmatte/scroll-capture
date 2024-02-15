import ArrayData from '../../lib/tsunami/data/ArrayData';
import StringData from '../../lib/tsunami/data/StringData';

export class TestModel {
  constructor() {
    this.list = new ArrayData('string0', 'string1', 'string2', 'string3', 'string4', 'string5', 'string6');
    this.index1 = 0;
    this.index2 = 3;
    this.index3 = 0;
    this.indices = new ArrayData(-2);
  }

  log() {
    console.log(this.list.value);
  }
}
