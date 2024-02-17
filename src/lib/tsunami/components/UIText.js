import UIComponent from './UIComponent';
import Expression from '../data/Expression';
import Data from '../data/Data';
import ExpressionTest from '../data/ExpressionTest';

export default class UIText extends UIComponent {
  constructor(element) {
    super(element);
    if (this.debug) console.log('UIText');
    this.expressionChangeHandler = this.expressionChangeHandler.bind(this);
  }

  get scope() {
    return super.scope;
  }

  set scope(value) {
    super.scope = value;
    let expression = this.element.textContent;
    if (expression.indexOf('${') != -1) {
      this.expression = new ExpressionTest('`' + expression + '`', this);
      this.expression.addEventListener('value', this.expressionChangeHandler);
      this.model = this.expression.value;
    }
  }

  expressionChangeHandler(event = null) {
    this.model = this.expression.value;
  }

  get model() {
    return this.element.textContent;
  }

  set model(value) {
    if (value instanceof Data) value = value.value;
    this.element.textContent = value;
  }

  destroy() {
    if (this.expression) {
      this.expression.removeEventListener('value', this.expressionChangeHandler);
      this.expression.destroy();
    }
    return super.destroy();
  }
}
