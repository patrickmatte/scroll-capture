import StringData from '../../lib/tsunami/data/StringData';
import { app } from '../main';
import Action from './Action';

let example = `/* Example */
body {
    margin:100px !important;
    color: #ffff00 !important;
    background-color: #ff0000 !important;
    font-size: 12px !important;
}`;

export default class ActionCSS extends Action {
  constructor(code = '') {
    super('ActionCSS', 'CSS', 'Add CSS rules');
    if (!code) code = example;
    this.code = new StringData(code);
    // this.icon.value = 'fa-brands fa-css3-alt';
    this.icon.value = 'fa-solid fa-code';
    this.isTestable.value = true;
  }

  clone() {
    let action = new ActionCSS();
    action.copy(this);
    return action;
  }

  copy(action) {
    this.code.value = action.code.value;
  }

  trigger() {
    app.model.sendMessage({
      type: 'scrollCaptureInsertCSS',
      css: this.code.value,
    });
    return Promise.resolve();
  }

  serialize() {
    let data = super.serialize();
    data.code = encodeURIComponent(this.code.value);
    return data;
  }

  deserialize(data) {
    if (!data) return;
    super.deserialize(data);
    this.code.value = decodeURIComponent(data.code);
  }
}
