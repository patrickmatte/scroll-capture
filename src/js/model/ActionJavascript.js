import Action from './Action';
import StringData from '../../lib/tsunami/data/StringData';
import { safeEval } from '../../lib/tsunami/tsunami';
import { evaluate } from '../../lib/tsunami/estree/estree-eval';
import * as acorn from 'acorn';

let example = `/* Experimental feature */
/* Example usage */
var time = 2000;
const promise = new Promise(function(resolve, reject) {
  console.log("wait for ", time, "ms");
  setTimeout(()=> {
    console.log(time, "ms has passed");
    resolve();
  }, time);
});
return promise.then(()=> {
  alert("promise is resolved");
});`;

export default class ActionJavascript extends Action {
  constructor(code = '') {
    super('ActionJavascript', 'Javascript', 'Add Javascript');
    if (!code) code = example;
    this.code = new StringData(code);
    this.icon.value = 'fa-brands fa-js-square';

    this.isTestable.value = true;
    this.isDuplicateable.value = true;
  }

  clone() {
    let action = new ActionJavascript();
    // action.copy(this);
    return action;
  }

  copy(action) {
    this.code.value = action.code.value;
  }

  trigger() {
    const expression = '() => {' + this.code.value + '}';
    const ast = acorn.parseExpressionAt(expression, 0, { ecmaVersion: 2020 });
    const func = evaluate(ast, window);
    let promise = Promise.resolve();
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
