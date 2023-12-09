import StringData from '../../lib/tsunami/data/StringData';
import Action from './Action';

export default class ActionURL extends Action {
  constructor() {
    super('ActionURL', 'URL', 'Load a URL');
    this.icon.value = 'fa-solid fa-link';
    this.url = new StringData('');
    this.isTestable.value = true;
    this.isCaptureable.value = true;
  }

  clone() {
    let action = new ActionURL();
    action.copy(this);
    return action;
  }

  copy(action) {
    super.copy(action);
    this.url.value = action.url.value;
  }

  trigger() {
    window.location.href = this.url.value;
    return super.trigger();
  }

  serialize() {
    let data = super.serialize();
    data.url = this.url.serialize();
    return data;
  }

  deserialize(data) {
    if (!data) return;
    super.deserialize(data);
    this.url.deserialize(data.url);
  }

  capture() {
    super.capture();
    this.url.value = window.location.href;
    setTimeout(() => {
      this.captureComplete();
    }, 200);
  }

  captureAtInit() {
    super.captureAtInit();
    this.capture();
  }
}
