import { ChangeEvent } from '../../lib/tsunami/ChangeEvent';
import UIText from '../../lib/tsunami/components/UIText';
import ExpressionTest from '../../lib/tsunami/data/ExpressionTest';

export class UITextTest extends UIText {
  constructor(element) {
    super(element);
    console.log('UITextTest element', element);
    this._color = '#808080';
  }

  get color() {
    return this._color;
  }

  set color(value) {
    console.log('set color', value);
    this._color = value;
    ChangeEvent.dispatchEvent(this, 'color', value);
  }

  get scope() {
    return super.scope;
  }

  set scope(value) {
    super.scope = value;
    console.log('UITextTest scope', value);
    const callback = (value) => {
      console.log('expression return', value);
    };
    const expression1 = new ExpressionTest('color = scope.test.list[scope.test.index]', this, callback, true);
    const expression2 = new ExpressionTest('scope.test.list[scope.test.index] = color', this, callback, true);
  }
}
