import Action from './Action';
// import StringData from "../tsunami/data/StringData";
import { safeEval } from '../../lib/tsunami/tsunami';

// let example = `/* Example */
// let promise = new Promise(function(resolve, reject) {
//     console.log("Wait for 1 second");
//     setTimeout(function() {
//         resolve();
//     }, 1000);
// });
// return promise.then(function() {
//     console.log("1 second has passed");
// });
// `;

export default class ActionEval extends Action {
  constructor(code = '') {
    super('ActionEval', 'Javascript', 'Add javascript code');
    // if(!code) code = example;
    // this.code = new StringData(code);
    this.icon.value = 'fa-brands fa-js-square';
  }

  clone() {
    let action = new ActionEval();
    // action.copy(this);
    return action;
  }

  // copy(action) {
  // 	this.code.value = action.code.value;
  // }

  // trigger() {
  // 	let expression = this.code.value;
  // 	const func = safeEval(window, expression);
  // 	let promise = func();
  // 	let isPromise = (promise instanceof Promise);
  // 	if(!isPromise) {
  // 		promise = Promise.resolve();
  // 	}
  // 	return promise;
  // }

  // serialize() {
  // 	let data = super.serialize();
  // 	data.code = encodeURIComponent(this.code.value);
  // 	return data;
  // }

  // deserialize(data) {
  // 	if (!data) return;
  // 	super.deserialize(data);
  // 	this.code.value = decodeURIComponent(data.code);
  // }
}
