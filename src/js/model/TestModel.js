import ArrayData from '../../lib/tsunami/data/ArrayData';
import Data from '../../lib/tsunami/data/Data';
import DataModel from '../../lib/tsunami/data/DataModel';
import StringData from '../../lib/tsunami/data/StringData';

export class TestModel extends DataModel {
  constructor() {
    super({
      list: new ArrayData('string0', 'string1', 'string2', 'string3', 'string4', 'string5', 'string6'),
      i0: 0,
      i1: 1,
      i2: 2,
      index: 0,
      indices: new ArrayData(0, -1, -2),
      func: (parameter) => {
        return parameter + 1;
      },
    });
  }

  log() {
    console.log(this.index, 'isNaN=', isNaN(this.index));
  }
}
