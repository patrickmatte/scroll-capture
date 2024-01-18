import ArrayData from '../../lib/tsunami/data/ArrayData';
import Data from '../../lib/tsunami/data/Data';
import DataModel from '../../lib/tsunami/data/DataModel';
import { getFixedElements, getScrollingTargets } from '../../lib/tsunami/window';
import { app } from '../main';

export default class CaptureImageModel extends DataModel {
  constructor() {
    super({ delay: 0.5, compression: 100, format: 'png', target: '' });
    this.imageCanvas = document.createElement('canvas');

    this.formats = new ArrayData('png', 'jpeg');

    this.targets = new ArrayData();
    this.fixedElements = new ArrayData(new DataModel({ selector: '' }));

    this.refreshTargets();
  }

  addHiddenElement() {
    this.fixedElements.unshift(new DataModel({ selector: '' }));
  }

  removeHiddenElement(model) {
    this.fixedElements.remove(model);
    if (this.fixedElements.length < 1) this.addHiddenElement();
  }

  refreshTargets() {
    this.targets.value = getScrollingTargets(['sc-']);
    if (!this.target) this.target = this.targets.value[0];

    // const fixedElements = getFixedElements(['sc-']);
    // const fixedElementList = fixedElements.map((selector) => {
    //   return new DataModel({ selector, visible: true });
    // });
    // this.fixedElementList.value = fixedElementList;
  }

  serialize() {
    let data = super.serialize();
    const array = this.fixedElements.value.map((element) => {
      return element.selector;
    });
    data.fixedElements = array;
    return data;
  }

  deserialize(data = {}) {
    if (data.hasOwnProperty('fixedElements')) {
      const array = data.fixedElements.map((selector) => {
        return new DataModel({ selector });
      });
      this.fixedElements.value = array;
    }
    // if (data.hasOwnProperty('delay')) this.delay = data.delay;
    // if (data.hasOwnProperty('compression')) this.compression = data.compression;
    // if (data.hasOwnProperty('format')) this.format = data.format;
  }
}
