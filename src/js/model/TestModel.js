import ArrayData from '../../lib/tsunami/data/ArrayData';
import Data from '../../lib/tsunami/data/Data';
import DataModel from '../../lib/tsunami/data/DataModel';
import StringData from '../../lib/tsunami/data/StringData';

export class TestModel extends DataModel {
  constructor() {
    super({
      list: new ArrayData('string0', 'string1', 'string2', 'string3', 'string4', 'string5', 'string6'),
      index: 1,
      index0: 0,
      index1: 1,
      index2: 2,
      indices: new ArrayData(0, -1, -2),
      func: (parameter) => {
        console.log('func was called');
        return parameter + 1;
      },
    });
  }

  log() {
    console.log(this.list.value);
  }
}
