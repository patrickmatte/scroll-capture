import UIRouterButton from '../../lib/tsunami/components/UIRouterButton';
import { app } from '../main';

export default class RouterButton extends UIRouterButton {
  constructor(element) {
    super(element);
    this.router = app.controller.router;
  }
}
