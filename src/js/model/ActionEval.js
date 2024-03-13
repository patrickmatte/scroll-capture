import Action from './Action';
import StringData from '../../lib/tsunami/data/StringData';
import { safeEval } from '../../lib/tsunami/tsunami';
import { evaluate } from '../../lib/tsunami/estree/estree-eval';
import * as acorn from 'acorn';

let example = `/* Example */
const time = 2000;
const promise = new Promise((resolve, reject) => {
  console.log("wait for " + time + " ms");
  setTimeout(() => {
    resolve(time + " ms has passed");
  }, time);
});
return promise.then((msg)=> {
  console.log(msg);
});`;

export default class ActionEval extends Action {
  constructor(code = '') {
    super('ActionEval', 'Javascript', 'Add Javascript');
    if (!code) code = example;
    this.code = new StringData(code);
    this.icon.value = 'fa-brands fa-js-square';

    this.isTestable.value = true;
    this.isDuplicateable.value = true;
  }

  clone() {
    let action = new ActionEval();
    // action.copy(this);
    return action;
  }

  copy(action) {
    this.code.value = action.code.value;
  }

  trigger() {
    const expression = '() => {' + this.code.value + '}';
    const ast = acorn.parseExpressionAt(expression, 0, { ecmaVersion: 2020 });
    const scope = Object.create(window, {
      window: {
        writable: true,
        configurable: true,
        value: window,
      },
    });
    let promise = Promise.resolve();
    const func = evaluate(ast, scope);
    if (func) promise = func();
    let isPromise = promise instanceof Promise;
    if (!isPromise) promise = Promise.resolve();
    return promise;
  }

  serialize() {
    let data = super.serialize();
    data.code = encodeURIComponent(this.code.value);
    return data;
  }

  deserialize(data) {
    if (!data) return;
    super.deserialize(data);
    this.code.value = decodeURIComponent(data.code);
  }
}
