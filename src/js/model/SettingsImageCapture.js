import ArrayData from '../../lib/tsunami/data/ArrayData';
import BooleanData from '../../lib/tsunami/data/BooleanData';
import DataModel from '../../lib/tsunami/data/DataModel';
import NumberData from '../../lib/tsunami/data/NumberData';

export default class SettingsImageCapture extends DataModel {
  constructor() {
    super({ delay: 0.5 });
    this.imageCanvas = document.createElement('canvas');

    this.format = new ArrayData('png', 'jpeg');
    this.format.selectedItem.value = this.format.value[0];
    this.compression = new NumberData(100);
  }

  serialize() {
    let data = super.serialize();
    data.delay = this.delay;
    return data;
  }

  deserialize(data) {
    if (!data) return;
    super.deserialize(data);
    this.delay = data.delay;
  }
}
