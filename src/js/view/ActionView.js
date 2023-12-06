import UIComponent from '../../lib/tsunami/components/UIComponent';
import * as tsunami from '../../lib/tsunami/tsunami';
import ActionTweenView from './ActionTweenView';

export default class ActionView extends UIComponent {
  constructor(element) {
    super(element);
  }
}

tsunami.define('action-tween', ActionTweenView);
