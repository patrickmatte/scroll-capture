import ArrayData from '../../lib/tsunami/data/ArrayData';
import BooleanData from '../../lib/tsunami/data/BooleanData';
import Data from '../../lib/tsunami/data/Data';
import DataModel from '../../lib/tsunami/data/DataModel';
import StringData from '../../lib/tsunami/data/StringData';
import { getFixedElements, getScrollingTargets } from '../../lib/tsunami/window';
import { app } from '../main';

export default class CaptureImageModel extends DataModel {
  constructor() {
    super({ delay: 0.5, compression: 100, format: 'jpeg', target: '' });
    this.imageCanvas = document.createElement('canvas');

    this.formats = new ArrayData({ type: 'jpeg', ext: 'jpg' }, { type: 'png', ext: 'png' });

    this.targets = new ArrayData();

    this.hiddenTypes = new ArrayData({ type: 'query', name: 'Selector' }, { type: 'fixed', name: 'Fixed Element' });
    this.hiddenType = new StringData(this.hiddenTypes[0].type);

    this.fixedSelectors = new ArrayData();
    this.refreshFixedSelectors();

    this.hiddenElements = new ArrayData();
    this.addHiddenElement();

    this.refreshTargets();
  }

  addHiddenElement() {
    const type = this.hiddenType.value;
    let selector = '';
    if (type == 'fixed') {
      this.refreshFixedSelectors();
      selector = this.fixedSelectors[0];
    }
    const item = new DataModel({ selector, type });
    this.hiddenElements.unshift(item);
  }

  removeHiddenElement(model) {
    this.hiddenElements.remove(model);
    if (this.hiddenElements.length < 1) this.addHiddenElement();
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

  refreshFixedSelectors() {
    const fixedElements = getFixedElements(['sc-']);
    // const fixedElementList = fixedElements.map((selector) => {
    //   return { selector, name: selector };
    // });
    this.fixedSelectors.value = ['Select a fixed element', ...fixedElements];
  }

  serialize() {
    let data = super.serialize();
    const array = this.hiddenElements.value.map((data) => {
      return data.serialize();
    });
    data.hiddenElements = array;
    console.log('serialize', data);
    return data;
  }

  deserialize(data = {}) {
    console.log('deserialize', data);
    super.deserialize(data);
    if (data.hasOwnProperty('hiddenElements')) {
      const hiddenElements = data.hiddenElements.map((value) => {
        const model = new DataModel({ type: '', selector: '' });
        model.deserialize(value);
        return model;
      });
      this.hiddenElements.value = hiddenElements;
    }
  }
}
