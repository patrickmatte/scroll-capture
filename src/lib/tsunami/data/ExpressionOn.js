import EventHandler from '../components/EventHandler';
import { parseExpression } from '../estree/estree';

export default class ExpressionOn extends EventHandler {
  constructor(expression, scope, dispatcher, type, debug = false) {
    super(dispatcher, type, null, debug);
    this.node = parseExpression(expression, null, debug);
    this.scope = scope;
    this.debug = debug;

    this.callback = () => {
      this.node.evaluate(this.scope);
    };
  }

  destroy() {
    this.node.destroy();
    this.node = null;
    this.scope = null;
    return super.destroy();
  }
}
