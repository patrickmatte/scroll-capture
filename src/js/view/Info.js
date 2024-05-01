import Section from './Section';
import { define, importTemplate } from '../../lib/tsunami/tsunami';
import template from '../../templates/info.html';
import { app } from '../main';
import Rating from './Rating';

export default class Info extends Section {
  constructor(element) {
    super(element);
  }

  showDelayComplete() {
    app.model.setDefaultLocation(this.path);
    return super.showDelayComplete();
  }

  get scope() {
    return this._scope;
  }

  set scope(value) {
    super.scope = value;
    if (!value) return;
    this.childContainer = importTemplate(template, value);
    this.appendChild(this.childContainer);
  }
}

define('sc-rating', Rating);
