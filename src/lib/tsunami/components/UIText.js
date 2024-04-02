import UIComponent from './UIComponent';
import Data from '../data/Data';
import ExpressionSet from '../data/ExpressionSet';

export default class UIText extends UIComponent {
  constructor(element) {
    super(element);
  }

  get scope() {
    return super.scope;
  }

  set scope(value) {
    super.scope = value;
    if (!value) return;
    let textContent = this.element.textContent;
    if (textContent.indexOf('${') != -1) {
      this.expression = new ExpressionSet('model', this, '`' + textContent + '`', this, this.debug);
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
    if (this.expression) {
      this.expression.destroy();
    }
    return super.destroy();
  }
}
