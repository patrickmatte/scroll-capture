import UIRouterButton from '../../lib/tsunami/components/UIRouterButton';
import { app } from '../main';

export default class RouterButton extends UIRouterButton {
  get router() {
    return app.controller.router;
  }
}
