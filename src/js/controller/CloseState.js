import Branch from '../../lib/tsunami/Branch';
import { app } from '../main';

export default class CloseState extends Branch {
  constructor() {
    super();
  }

  show() {
    app.model.save();
    return super.show();
  }
}
