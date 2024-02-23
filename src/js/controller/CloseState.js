import Branch from '../../lib/tsunami/Branch';
import { app } from '../main';

export default class CloseState extends Branch {
  constructor() {
    super();
  }

  show() {
    // app.model.save('CloseState.show');
    return super.show();
  }

  hide() {
    app.model.save('CloseState.show');
    return super.hide();
  }
}
