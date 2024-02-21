import { EventDispatcher } from '../EventDispatcher';
import * as acorn from 'acorn';
import { assign } from './assign';
import EventHandler from '../components/EventHandler';

export function parseExpression(expression, changeCallback = null, debug = false, ecmaVersion = 2020) {
  if (debug) console.log('parseExpression', expression);
  const ast = acorn.parseExpressionAt(expression, 0, { ecmaVersion });
  if (debug) console.log('ast', ast);
  const node = createNode(ast, changeCallback, debug);
  if (debug) console.log('node', node);
  return node;
}

export function createNode(value, changeCallback = null, debug = false) {
  let node;
  try {
    node = estree[value.type].fromNode(value, changeCallback, debug);
  } catch (e) {
    console.log('missing node', value.type, value);
    console.log(e);
  }
  return node;
}

export function evaluateSpreadArray(elements, scope, debug = false) {
  const result = [];
  for (const el of elements) {
    if (el.type === 'SpreadElement') {
      result.push(...el.argument.evaluate(scope));
    } else {
      result.push(el.evaluate(scope));
    }
  }
  return result;
}

export class ExpressionNode {
  constructor(type, changeCallback = null, debug = false) {
    this.type = type;
    this.changeCallback = changeCallback;
    this.debug = debug;
    this.changeEventHandler = null;
  }
  static fromNode(node, changeCallback = null, debug = false) {}
  observe(dispatcher, name) {
    if (!this.changeCallback) return;
    const isDispatcher = dispatcher instanceof EventDispatcher || dispatcher instanceof EventTarget;
    if (isDispatcher) {
      if (this.debug) console.log('observe', name, dispatcher);
      if (!this.changeEventHandler) {
        this.changeEventHandler = new EventHandler(dispatcher, name, this.changeCallback, this.debug);
      } else {
        this.changeEventHandler.type = name;
      }
    }
  }
  evaluate(scope) {}

  destroy() {
    if (this.changeEventHandler) this.changeEventHandler.destroy();
    this.changeCallback = null;
  }
}

export class AssignmentExpression extends ExpressionNode {
  constructor(operator, left, right, changeCallback = null, debug = false) {
    super('AssignmentExpression', changeCallback, debug);
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    const operator = node.operator;
    const left = createNode(node.left, changeCallback, debug);
    const right = createNode(node.right, changeCallback, debug);
    return new AssignmentExpression(operator, left, right, changeCallback, debug);
  }
  evaluate(scopeRight, scopeLeft = null) {
    if (this.debug) console.log('AssignmentExpression.evaluate');
    scopeLeft ||= scopeRight;
    let object;
    let name;
    switch (this.left.type) {
      case 'Identifier':
        if (this.debug) console.log('left.type is Identifier');
        object = scopeLeft;
        name = this.left.name;
        break;
      case 'MemberExpression':
        if (this.debug) console.log('left.type is MemberExpression');
        if (this.left.object.type === 'Super') {
          throw new Error(`Cannot assign ${this.left.object.type}`);
        }
        if (this.debug) console.log('this.left.object', this.left.object);
        if (this.debug) console.log('this.left.property', this.left.property);
        object = this.left.object.evaluate(scopeLeft);
        switch (this.left.property.type) {
          case 'Identifier':
            name = this.left.property.name;
            break;
          default:
            name = this.left.property.evaluate(scopeLeft);
            break;
        }
        break;
      default:
        throw new Error(`${this.left.type} assignment is not supported.`);
    }
    if (this.debug) console.log('evaluate object =', object);
    if (this.debug) console.log('evaluate name =', name);
    this.left.observe(object, name);
    const value = this.right.evaluate(scopeRight);
    return assign[this.operator](object, name, value, this.debug);
  }

  destroy() {
    this.operator = null;
    this.left.destroy();
    this.right.destroy();
    return super.destroy();
  }
}

export class BinaryExpression extends ExpressionNode {
  constructor(operator, left, right, changeCallback = null, debug = false) {
    super('BinaryExpression', changeCallback, debug);
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    const operator = node.operator;
    const left = createNode(node.left, changeCallback, debug);
    const right = createNode(node.right, changeCallback, debug);
    return new BinaryExpression(operator, left, right, changeCallback, debug);
  }
  evaluate(scope) {
    const left = this.left.evaluate(scope);
    const right = this.right.evaluate(scope);
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
  destroy() {
    this.operator = null;
    this.left.destroy();
    this.right.destroy();
    return super.destroy();
  }
}

export class CallExpression extends ExpressionNode {
  constructor(callee, argsArray, changeCallback = null, debug = false) {
    super('CallExpression', changeCallback, debug);
    this.callee = callee;
    this.argsArray = argsArray;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    const callee = createNode(node.callee, changeCallback, debug);
    const argsArray = node.arguments.map((argument) => createNode(argument, changeCallback, debug));
    return new CallExpression(callee, argsArray);
  }
  evaluate(scope) {
    switch (this.callee.type) {
      case 'Super':
        throw new Error(`Cannot call ${this.callee.type}`);
      case 'MemberExpression':
        if (this.callee.object.type === 'Super') {
          throw new Error(`Cannot call ${this.callee.type}`);
        }
        const object = this.callee.object.evaluate(scope);
        const callee = this.callee.property.evaluate(object);
        return callee.apply(object, evaluateSpreadArray(this.argsArray, scope, this.debug));
      default:
        return this.callee.evaluate(scope)(...evaluateSpreadArray(this.argsArray, scope, this.debug));
    }
  }
  destroy() {
    this.argsArray.map((node) => node.destroy());
    this.callee.destroy();
    return super.destroy();
  }
}

export class Identifier extends ExpressionNode {
  constructor(name, changeCallback = null, debug = false) {
    super('Identifier', changeCallback, debug);
    this.name = name;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    return new Identifier(node.name, changeCallback, debug);
  }
  evaluate(scope) {
    this.observe(scope, this.name);
    return scope[this.name];
  }
  destroy() {
    this.name = null;
    return super.destroy();
  }
}

export class Literal extends ExpressionNode {
  constructor(value, changeCallback = null, debug = false) {
    super('Literal', changeCallback, debug);
    this.value = value;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    return new Literal(node.value, changeCallback, debug);
  }
  evaluate(scope) {
    return this.value;
  }
  destroy() {
    this.value = null;
    return super.destroy();
  }
}

export class MemberExpression extends ExpressionNode {
  constructor(computed, object, property, changeCallback = null, debug = false) {
    super('MemberExpression', changeCallback, debug);
    this.computed = computed;
    this.object = object;
    this.property = property;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    const computed = node.computed;
    const object = createNode(node.object, changeCallback, debug);
    const property = createNode(node.property, changeCallback, debug);
    return new MemberExpression(computed, object, property, changeCallback, debug);
  }
  evaluate(scope) {
    switch (this.object.type) {
      case 'Super':
        throw new Error(`Cannot call ${this.object.type}`);
      default:
        const object = this.object.evaluate(scope);
        if (this.computed) {
          const name = this.property.evaluate(scope);
          this.observe(object, name);
          return object[name];
        } else {
          return this.property.evaluate(object);
        }
    }
  }
  destroy() {
    this.computed = null;
    this.object.destroy();
    this.property.destroy();
    return super.destroy();
  }
}

export class TemplateElement extends ExpressionNode {
  constructor(tail, value, changeCallback = null, debug = false) {
    super('TemplateElement', changeCallback, debug);
    this.tail = tail;
    this.value = value;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    const tail = node.tail;
    const value = Object.assign({}, node.value);
    return new TemplateElement(tail, value, changeCallback, debug);
  }
  destroy() {
    this.tail = null;
    this.value = null;
    return super.destroy();
  }
}

export class TemplateLiteral extends ExpressionNode {
  constructor(expressions, quasis, changeCallback = null, debug = false) {
    super('TemplateLiteral', changeCallback, debug);
    this.expressions = expressions;
    this.quasis = quasis;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    const expressions = node.expressions.map((expression) => createNode(expression, changeCallback, debug));
    const quasis = node.quasis.map((quasi) => createNode(quasi, changeCallback, debug));
    return new TemplateLiteral(expressions, quasis, changeCallback, debug);
  }
  evaluate(scope) {
    let s = '';
    let i;
    for (i = 0; i < this.expressions.length; i++) {
      s += this.quasis[i].value.cooked;
      const value = this.expressions[i].evaluate(scope);
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
  destroy() {
    this.expressions.map((node) => node.destroy());
    this.quasis.map((node) => node.destroy());
    return super.destroy();
  }
}

export class UnaryExpression extends ExpressionNode {
  constructor(operator, prefix, argument, changeCallback = null, debug = false) {
    super('UnaryExpression', changeCallback, debug);
    this.operator = operator;
    this.prefix = prefix;
    this.argument = argument;
  }
  static fromNode(node, changeCallback = null, debug = false) {
    const operator = node.operator;
    const prefix = node.prefix;
    const argument = createNode(node.argument, changeCallback, debug);
    return new UnaryExpression(operator, prefix, argument, changeCallback, debug);
  }
  evaluate(scope) {
    if (!this.prefix) {
      throw new Error(`${this.type} with prefix: "false" and operator "${this.operator}" not supported.`);
    }
    if (this.operator === 'delete') {
      if (this.argument.type === 'Identifier') {
        return delete scope[this.argument.name];
      }
      if (this.argument.type === 'MemberExpression') {
        if (this.argument.object.type === 'Super') {
          throw new Error(`delete not supported with super expressions.`);
        }
        const object = this.argument.object.evaluate(scope);
        const name = this.argument.property.evaluate(scope);
        return delete object[name];
      }
      throw new Error(`Unsupported delete expression argument: ${this.argument.type}.`);
    }
    const value = this.argument.evaluate(scope);
    switch (this.operator) {
      case '-':
        return -value;
      case '+':
        return +value;
      case '!':
        return !value;
      case '~':
        return ~value;
      case 'typeof':
        return typeof value;
      case 'void':
        return void value;
      default:
        throw new Error(`Unsupported ${this.type} operator "${this.operator}".`);
    }
  }
  destroy() {
    this.operator = null;
    this.prefix = null;
    this.argument.destroy();
    return super.destroy();
  }
}

export const estree = {
  AssignmentExpression,
  BinaryExpression,
  CallExpression,
  Identifier,
  Literal,
  MemberExpression,
  TemplateElement,
  TemplateLiteral,
  UnaryExpression,
};
