import UIComponent from './UIComponent';
import Expression from '../data/Expression';
import Data from '../data/Data';
import ExpressionTest from '../data/ExpressionTest';

export default class UIText extends UIComponent {
  constructor(element) {
    super(element);
  }

  get scope() {
    return super.scope;
  }

  set scope(value) {
    super.scope = value;
    let expression = this.element.textContent;
    expression = expression.split('{').join('${');
    if (expression.indexOf('${') != -1) {
      let setModel = (value) => {
        this.model = value;
      };
      if (this.debug) {
        this.expression = new ExpressionTest('`' + expression + '`', this, setModel);
      } else {
        this.expression = new Expression('`' + expression + '`', this, setModel);
      }
    }
  }

  get model() {
    return this.element.textContent;
  }

  set model(value) {
    if (value instanceof Data) value = value.value;
    this.element.textContent = value;
  }

  destroy() {
    if (this.expression) this.expression.destroy();
    return super.destroy();
  }
}
