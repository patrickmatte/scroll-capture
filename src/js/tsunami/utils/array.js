import { randomInt } from "./number";

export function shuffleArray(o) {
  for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

//return a randomly seleted item in an array
export function sample(array) {
  return array[randomInt(0, array.length - 1)];
}

export function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
  // let array = new Array();
  // for (let i = 0; i < nodeList.length; i++) {
  // 	array.push(nodeList.item(i));
  // }
  // return array;
}
