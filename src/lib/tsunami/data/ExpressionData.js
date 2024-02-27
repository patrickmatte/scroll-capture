import { parseExpression } from '../estree/estree';
import Data from './Data';

export default class ExpressionData extends Data {
  constructor(expression, scope, callback, debug = false) {
    super();
    if (debug) console.log('ExpressionObserver', expression, scope);
    this.debug = debug;

    this.changeHandler = this.changeHandler.bind(this);
    this.callback = callback;

    this.node = parseExpression(expression, this.changeHandler, debug);
    if (debug) console.log('ExpressionObserver node', this.node);
    this.scope = scope;

    this.changeHandler(null);
  }

  changeHandler(event) {
    if (this.debug) console.log('ExpressionObserver.changeHandler event', event);
    this.value = this.node.evaluate(this.scope);
    if (this.callback) this.callback(this.value);
  }

  destroy() {
    this.value = null;
    this.node.destroy();
    this.node = null;
    this.callback = null;
    return super.destroy();
  }
}
