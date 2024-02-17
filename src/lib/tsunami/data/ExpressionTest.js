import EventHandler from '../components/EventHandler';
import { EventDispatcher } from '../EventDispatcher';
import * as acorn from 'acorn';
import Data from './Data';

class ExpressionNode {
  constructor(node) {
    this.type = node.type;
  }
  observe(dispatcher, name, observables) {
    if (dispatcher instanceof EventDispatcher || dispatcher instanceof EventTarget) {
      if (!observables[name]) {
        observables[name] = [];
      }
      if (observables[name].indexOf(dispatcher) == -1) observables[name].push(dispatcher);
    }
  }
  evaluate(scope, observables) {}
}

function createNode(value) {
  return new ESTree[value.type](value);
}

function evaluateSpreadArray(elements, scope, observables) {
  const result = [];
  for (const el of elements) {
    if (el.type === 'SpreadElement') {
      result.push(...el.argument.evaluate(scope, observables));
    } else {
      result.push(el.evaluate(scope, observables));
    }
  }
  return result;
}

function assign(object, name, value, operator) {
  switch (operator) {
    case '=':
      return (object[name] = value);
    case '+=':
      return (object[name] += value);
    case '-=':
      return (object[name] -= value);
    case '*=':
      return (object[name] *= value);
    case '/=':
      return (object[name] /= value);
    case '%=':
      return (object[name] %= value);
    case '**=':
      return (object[name] **= value);
    case '<<=':
      return (object[name] <<= value);
    case '>>=':
      return (object[name] >>= value);
    case '>>>=':
      return (object[name] >>>= value);
    case '|=':
      return (object[name] |= value);
    case '^=':
      return (object[name] ^= value);
    case '&=':
      return (object[name] &= value);
    default:
      throw new Error(`Unexpected assignment operator "${operator}".`);
  }
}

const ESTree = {
  BinaryExpression: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.operator = node.operator;
      this.left = createNode(node.left);
      this.right = createNode(node.right);
    }
    evaluate(scope, observables) {
      const left = this.left.evaluate(scope, observables);
      const right = this.right.evaluate(scope, observables);
      switch (this.operator) {
        case '==':
          return left == right;
        case '!=':
          return left != right;
        case '===':
          return left === right;
        case '!==':
          return left !== right;
        case '<':
          return left < right;
        case '<=':
          return left <= right;
        case '>':
          return left > right;
        case '>=':
          return left >= right;
        case '<<':
          return left << right;
        case '>>':
          return left >> right;
        case '>>>':
          return left >>> right;
        case '+':
          return left + right;
        case '-':
          return left - right;
        case '*':
          return left * right;
        case '/':
          return left / right;
        case '%':
          return left % right;
        case '**':
          return left ** right;
        case '|':
          return left | right;
        case '^':
          return left ^ right;
        case '&':
          return left & right;
        case 'in':
          return left in right;
        case 'instanceof':
          return left instanceof right;
        default:
          throw new Error(`Unexpected operator: ${this.operator}`);
      }
    }
  },
  CallExpression: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.callee = createNode(node.callee);
      this.arguments = node.arguments.map((argument) => createNode(argument));
    }
    evaluate(scope, observables) {
      switch (this.callee.type) {
        case 'Super':
          throw new Error(`Cannot call ${this.callee.type}`);
        case 'MemberExpression':
          if (this.callee.object.type === 'Super') {
            throw new Error(`Cannot call ${this.callee.type}`);
          }
          const object = this.callee.object.evaluate(scope, observables);
          const callee = this.callee.property.evaluate(object, observables);
          return callee.apply(object, evaluateSpreadArray(this.arguments, scope, observables));
        default:
          return this.callee.evaluate(scope, observables)(...evaluateSpreadArray(this.arguments, scope, observables));
      }
    }
  },
  Identifier: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.name = node.name;
    }
    evaluate(scope, observables) {
      this.observe(scope, this.name, observables);
      return scope[this.name];
    }
  },
  Literal: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.value = node.value;
    }
    evaluate(scope, observables) {
      return this.value;
    }
  },
  MemberExpression: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.computed = node.computed;
      this.object = createNode(node.object);
      this.property = createNode(node.property);
    }
    evaluate(scope, observables) {
      switch (this.object.type) {
        case 'Super':
          throw new Error(`Cannot call ${this.object.type}`);
        default:
          const object = this.object.evaluate(scope, observables);
          if (this.computed) {
            const name = this.property.evaluate(scope, observables);
            this.observe(object, name, observables);
            return object[name];
          } else {
            return this.property.evaluate(object, observables);
          }
      }
    }
  },
  TemplateElement: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.tail = node.tail;
      this.value = Object.assign({}, node.value);
    }
  },
  TemplateLiteral: class extends ExpressionNode {
    constructor(node) {
      super(node);
      this.expressions = node.expressions.map((expression) => createNode(expression));
      this.quasis = node.quasis.map((quasi) => createNode(quasi));
    }
    evaluate(scope, observables) {
      let s = '';
      let i;
      for (i = 0; i < this.expressions.length; i++) {
        s += this.quasis[i].value.cooked;
        const value = this.expressions[i].evaluate(scope, observables);
        if (value === null) {
          s += 'null';
        } else if (value === undefined) {
          s += 'undefined';
        } else {
          s += value.toString();
        }
      }
      return s + this.quasis[i].value.cooked;
    }
  },
};

export default class ExpressionTest extends Data {
  constructor(expression, scope, debug = false) {
    super();
    this.expression = expression;
    this.scope = scope;
    this.debug = debug;

    this.changeEventHandlers = [];

    this.changeHandler = this.changeHandler.bind(this);

    const ast = acorn.parseExpressionAt(expression, 0, { ecmaVersion: 2020 });
    this.node = createNode(ast);

    this.changeHandler();
  }

  changeHandler(event = null) {
    const observables = {};
    const newValue = this.node.evaluate(this.scope, observables);
    this.changeEventHandlers.map((handler) => {
      handler.destroy();
    });
    this.changeEventHandlers = [];
    for (let type in observables) {
      observables[type].forEach((target) => {
        let handler = new EventHandler(target, type, this.changeHandler, true, this.debug);
        this.changeEventHandlers.push(handler);
      });
    }
    this.value = newValue;
  }

  destroy() {
    this.changeEventHandlers.map((handler) => {
      handler.destroy();
    });
    this.changeEventHandlers = [];
    this._value = null;
  }
}
