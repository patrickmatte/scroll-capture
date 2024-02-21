import EventHandler from '../components/EventHandler';
import Data from './Data';
import { parseExpression } from '../estree/estree';

export default class ExpressionTest extends Data {
  constructor(expression, scope, callback = null, debug = false) {
    super();
    this.expression = expression;
    this.scope = scope;
    this.callback = callback;
    this.debug = debug;

    this._enabled = true;

    if (debug) console.log('ExpressionTest', expression);

    this.enabled = true;

    this.changeEventHandlers = [];

    this.changeHandler = this.changeHandler.bind(this);

    this.node = parseExpression(expression, this.changeHandler, debug);

    if (this.debug) console.log(this.node);

    this.changeHandler(null);
  }

  changeHandler(event) {
    if (!this.enabled) return;

    if (this.debug && event) console.log('changeHandler event', event);

    const newValue = this.node.evaluate(this.scope);
    if (this.callback) this.callback(newValue);
    this.value = newValue;
  }

  destroy() {
    this.node = null;
    this.callback = null;
    return super.destroy();
  }
}
