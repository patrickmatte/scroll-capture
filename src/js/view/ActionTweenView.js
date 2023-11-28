import UIComponent from '../tsunami/components/UIComponent';
import easingTemplate from '../../templates/easing.html';
import * as tsunami from '../tsunami/tsunami';
import EasingGraph from './EasingGraph';

export default class ActionTweenView extends UIComponent {
  constructor(element) {
    super(element);
  }

  get scope() {
    return this._scope;
  }

  set scope(value) {
    super.scope = value;
    this.easing = tsunami.importTemplate(easingTemplate, value);
    this.appendChild(this.easing);
  }
}

tsunami.define('easing-graph', EasingGraph);
