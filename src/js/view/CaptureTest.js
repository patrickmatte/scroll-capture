import { app } from '../main';
import Section from './Section';

export default class CaptureTest extends Section {
  constructor(element) {
    super(element);
    console.log(element);
  }

  show() {
    app.model.setDefaultLocation(this.path);
    return super.show();
  }
}
