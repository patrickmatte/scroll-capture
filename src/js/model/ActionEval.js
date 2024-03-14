import Action from './Action';
import StringData from '../../lib/tsunami/data/StringData';
import { app } from '../main';

let example = `/* Example with promise */
return new Promise((resolve, reject) => {
  $({ scrollY: 0 }).animate(
    { scrollY: 500 },
    {
      duration: 2000,
      step: function () {
        document.documentElement.scrollTop = this.scrollY;
      },
      complete: () => {
        resolve();
      },
    }
  );
});
`;

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
    const message = {
      type: 'scrollCaptureExecuteScript',
      code: this.code.value,
      tabId: app.model.tabId.value,
    };
    const promise = new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(message, (response) => {
        resolve(response);
      });
    });

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
