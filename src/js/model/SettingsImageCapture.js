import ArrayData from '../../lib/tsunami/data/ArrayData';
import DataModel from '../../lib/tsunami/data/DataModel';

export default class SettingsImageCapture extends DataModel {
  constructor() {
    super({ delay: 0.5, compression: 100, format: 'png' });
    this.imageCanvas = document.createElement('canvas');

    this.formats = new ArrayData('png', 'jpeg');
  }

  // serialize() {
  //   let data = super.serialize();
  //   data.delay = this.delay;
  //   data.compression = this.compression;
  //   data.format = this.format;
  //   return data;
  // }

  // deserialize(data) {
  //   if (!data) return;
  //   super.deserialize(data);
  //   if (data.hasOwnProperty('delay')) this.delay = data.delay;
  //   if (data.hasOwnProperty('compression')) this.compression = data.compression;
  //   if (data.hasOwnProperty('format')) this.format = data.format;
  // }
}
