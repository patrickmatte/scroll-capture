import EventHandler from '../components/EventHandler';
import { hasValue } from '../utils/validation';
import { ChangeEvent } from '../ChangeEvent';
import { getProperty, safeEval } from '../tsunami';

export default class Expression extends EventTarget {
  constructor(expression, scope, callback = null) {
    super();
    // console.log("Expression", expression);
    this.expression = expression;
    this.scope = scope;

    this.changeHandler = this.changeHandler.bind(this);

    this._value = null;

    this.getValue = function () {
      const value = safeEval(scope, expression);
      // console.log("getValue this=", this, 'scope=', scope, 'value=', value);
      return value;
    }.bind(scope);

    this.callback = callback;

    let expressionChunks = expression;
    let operators = '+/*-[](){}!?%$=:;`';
    for (let i = 0; i < operators.length; i++) {
      let char = operators.charAt(i);
      expressionChunks = expressionChunks.split(char).join(' ');
    }
    let chunks = expressionChunks.split(' ');
    let filteredChunks = chunks.filter((chunk) => {
      return hasValue(chunk) && chunk.indexOf("'") == -1 && chunk.indexOf('"') == -1;
    });

    this.eventHandlers = [];
    filteredChunks.map((chunk, i) => {
      let slugs = chunk.split('.');
      let target = scope;
      let type = slugs.pop();
      // if(slugs.length > 0) target = new Function("return " + slugs.join(".")).bind(scope)();
      if (slugs.length > 0) target = getProperty(slugs.join('.'), scope);
      if (target instanceof EventTarget && target[type] != undefined) {
        let handler = new EventHandler(target, type, this.changeHandler);
        this.eventHandlers.push(handler);
      }
    });

    this.changeHandler();
  }

  get value() {
    return this._value;
  }

  changeHandler(event = null) {
    this._value = this.getValue();
    ChangeEvent.dispatch(this, 'value', this.value);
    if (this.callback) this.callback(this.value);
  }

  destroy() {
    this.eventHandlers.map((handler) => {
      handler.destroy();
    });
    this.eventHandlers = [];
    this.callback = null;
    this._value = null;
  }
}
