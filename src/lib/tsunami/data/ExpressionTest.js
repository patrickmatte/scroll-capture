import EventHandler from '../components/EventHandler';
import { hasValue } from '../utils/validation';
import { ChangeEvent } from '../ChangeEvent';
import { getProperty, safeEval } from '../tsunami';
import { EventDispatcher } from '../EventDispatcher';
import * as acorn from 'acorn';
import { evaluate } from '../utils/estree-eval';

class ExpressionNode {
  constructor(node) {
    this.type = node.type;
  }
  evaluate() {}
}

function createNode(value) {
  return new ESTree[value.type](value);
}

const ESTree = {
  BinaryExpression: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.operator = node.operator;
      this.left = createNode(node.left);
      this.right = createNode(node.right);
    }
  },
  TemplateLiteral: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.expressions = node.expressions.map((expression) => createNode(expression));
      this.quasis = node.quasis.map((quasi) => createNode(quasi));
    }
  },
  MemberExpression: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.computed = node.computed;
      this.object = createNode(node.object);
      this.property = createNode(node.property);
    }
  },
  Identifier: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.name = node.name;
    }
  },
  CallExpression: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.callee = createNode(node.callee);
      this.arguments = node.arguments.map((argument) => createNode(argument));
    }
  },
  Literal: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.value = node.value;
    }
  },
  TemplateElement: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.tail = node.tail;
      this.value = Object.assign({}, node.value);
    }
  },
};

export default class ExpressionTest extends EventDispatcher {
  constructor(expression, scope, callback = null, debug) {
    super();
    console.log('ExpressionTest', expression);
    this.expression = expression;
    this.scope = scope;

    const ast = acorn.parseExpressionAt(expression, 0, { ecmaVersion: 2020 });
    const node = createNode(ast);
    console.log('node', node);
    // console.log('node value=', evaluate(node, scope));

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
      const isDispatcher = target instanceof EventDispatcher || target instanceof EventTarget;
      if (isDispatcher && target[type] != undefined) {
        let handler = new EventHandler(target, type, this.changeHandler, true, true);
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
