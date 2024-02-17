import ExpressionTest from './ExpressionTest';

export class SetExpression {
  constructor(object, name, expression, scope, debug = false) {
    this.object = object;
    this.name = name;
    this.expression = new ExpressionTest(expression, scope, debug);
    this.expressionChangeHandler = this.expressionChangeHandler.bind(this);
    this.expression.addEventListener('value', this.expressionChangeHandler);
    this.expressionChangeHandler();
  }

  expressionChangeHandler(event = null) {
    this.object[this.name] = this.expression.value;
  }

  destroy() {
    this.expression.removeEventListener('value', this.expressionChangeHandler);
  }
}
