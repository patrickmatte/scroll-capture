import ArrayData from '../../lib/tsunami/data/ArrayData';
import StringData from '../../lib/tsunami/data/StringData';

export class TestModel {
  constructor() {
    this.list = new ArrayData();
    this.list.value = ['string1', 'string2'];
  }

  log() {
    console.log(this.list.value);
  }
}
