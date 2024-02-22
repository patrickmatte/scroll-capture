import ArrayData from '../../lib/tsunami/data/ArrayData';
import Data from '../../lib/tsunami/data/Data';
import DataModel from '../../lib/tsunami/data/DataModel';
import StringData from '../../lib/tsunami/data/StringData';
import { getFixedElements, getScrollingTargets } from '../../lib/tsunami/window';
import { app } from '../main';

export default class CaptureImageModel extends DataModel {
  constructor() {
    super({ delay: 0.5, compression: 100, format: 'jpeg', target: '' });
    this.imageCanvas = document.createElement('canvas');

    this.formats = new ArrayData('jpeg', 'png');

    this.targets = new ArrayData();
    this.fixedElements = new ArrayData(new StringData());

    this.refreshTargets();
  }

  addHiddenElement() {
    this.fixedElements.unshift(new StringData());
  }

  removeHiddenElement(model) {
    this.fixedElements.remove(model);
    if (this.fixedElements.length < 1) this.addHiddenElement();
  }

  refreshTargets() {
    this.targets.value = getScrollingTargets(['sc-'], ['documentElement']);
    if (!this.target) this.target = this.targets.value[0];

    // const fixedElements = getFixedElements(['sc-']);
    // const fixedElementList = fixedElements.map((selector) => {
    //   return new DataModel({ selector, visible: true });
    // });
    // this.fixedElementList.value = fixedElementList;
  }

  serialize() {
    let data = super.serialize();
    const array = this.fixedElements.value.map((data) => {
      return data.value;
    });
    data.fixedElements = array;
    return data;
  }

  deserialize(data = {}) {
    if (data.hasOwnProperty('fixedElements')) {
      const array = data.fixedElements.map((value) => {
        return new StringData(value);
      });
      this.fixedElements.value = array;
    }
  }
}
