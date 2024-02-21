import { define } from '../../lib/tsunami/tsunami';
import { app } from '../main';
import Section from './Section';
import { UIInputTest } from './UIInputTest';
import { UITextTest } from './UITextTest';

export default class CaptureTest extends Section {
  constructor(element) {
    super(element);
  }

  show() {
    app.model.setDefaultLocation(this.path);
    return super.show();
  }
}

define('ui-text-test', UITextTest);
define('ui-input-test', UIInputTest);
