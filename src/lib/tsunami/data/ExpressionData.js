import { parseExpression } from '../estree/estree';
import Data from './Data';

export default class ExpressionData extends Data {
  constructor(expression, scope, debug = false) {
    super();
    if (debug) console.log('ExpressionObserver node', node);

    this.changeHandler = this.changeHandler.bind(this);

    this.node = parseExpression(expression, this.changeHandler, debug);
    this.scope = scope;
    this.debug = debug;

    this.changeHandler(null);
  }

  changeHandler(event) {
    if (this.debug) console.log('ExpressionObserver.changeHandler event', event.type);
    this.value = this.node.evaluate(scope);
  }

  destroy() {
    this.node.destroy();
    this.node = null;
    return super.destroy();
  }
}
