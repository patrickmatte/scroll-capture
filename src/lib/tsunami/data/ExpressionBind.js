import { AssignmentExpression, parseExpression } from '../estree/estree';

export default class ExpressionBind {
  constructor(expressionLeft, scopeLeft, expressionRight, scopeRight, debug = false) {
    if (debug) console.log('ExpressionBind', expressionLeft, '=', expressionRight);
    this.debug = debug;
    this.changeHandlerLeft = this.changeHandlerLeft.bind(this);
    this.changeHandlerRight = this.changeHandlerRight.bind(this);

    this.left = parseExpression(expressionLeft, this.changeHandlerLeft, debug);
    this.right = parseExpression(expressionRight, this.changeHandlerRight, debug);
    this.node = new AssignmentExpression('=', this.left, this.right, null, debug);

    this.scopeLeft = scopeLeft;
    this.scopeRight = scopeRight;

    this.enabled = {
      left: true,
      right: true,
    };

    this.changeHandlerRight({ default: true });
  }

  changeHandlerLeft(event) {
    if (!this.enabled.left) return;
    if (this.debug) console.log('changeHandlerLeft', event);
    this.enabled.right = false;
    this.node.left = this.right;
    this.node.right = this.left;
    this.node.evaluate(this.scopeLeft, this.scopeRight);
    this.enabled.right = true;
  }

  changeHandlerRight(event) {
    if (!this.enabled.right) return;
    if (this.debug) console.log('changeHandlerRight event', event);
    this.enabled.left = false;
    this.node.left = this.left;
    this.node.right = this.right;
    const val = this.node.evaluate(this.scopeRight, this.scopeLeft);
    if (this.debug) console.log('changeHandlerRight val', val);
    this.enabled.left = true;
  }

  destroy() {
    this.scopeLeft = null;
    this.scopeRight = null;
    this.node.destroy();
    this.node = null;
  }
}
