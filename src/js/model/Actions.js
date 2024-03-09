import ArrayData from '../../lib/tsunami/data/ArrayData';
import ActionEval from './ActionEval';
import ActionScroll from './ActionScroll';
import ActionMouseEvent from './ActionMouseEvent';
import ActionSwipe from './ActionSwipe';
import ActionWait from './ActionWait';
import ActionURL from './ActionURL';
import ActionCSS from './ActionCSS';
import { ActionTextInput } from './ActionTextInput';

export default class Actions extends ArrayData {
  constructor() {
    super();

    this.push.apply(this, arguments);

    // this.addSelectedType = this.addSelectedType.bind(this);

    this.types = new ArrayData();
    this.types.value = [new ActionScroll(), new ActionMouseEvent(), new ActionSwipe(), new ActionURL(), new ActionCSS(), new ActionEval(), new ActionWait(), new ActionTextInput()];
    // this.types.selectedItem.value = this.types.value[0];
  }

  cloneAction(action) {
    let clone = action.clone();
    this.addAction(clone);
  }

  duplicateAction(action) {
    let clone = action.clone();
    clone.copy(action);
    this.addAction(clone, true);
  }

  // addSelectedType() {
  // 	if(!this.types.selectedItem.value) {
  // 		return;
  // 	}
  // 	let action = this.types.selectedItem.value.clone();
  // 	this.addAction(action);
  // 	// this.types.selectedItem.value = this.types.value[0];
  // }

  addAction(action, ignoreCapture = false) {
    if (!action) return;
    if (!ignoreCapture) action.captureAtInit();
    let index = this.selectedIndex.value + 1;
    if (isNaN(index)) index = this.value.length;
    this.splice(index, 0, action);
    this.selectedIndex.value = index;
  }

  removeAction(action) {
    let index = this.indexOf(action);
    this.remove(action);
    let newIndex = Math.max(index - 1, 0);
    this.selectedIndex.value = Math.min(newIndex, this.value.length - 1);
  }

  serialize() {
    let actions = [];
    this.map((action) => {
      actions.push(action.serialize());
    });
    return actions;
  }

  deserialize(json) {
    if (!json) return;
    let actions = [];
    for (let i = 0; i < json.length; i++) {
      const data = json[i];
      console.log('data.type', data.type);
      const actionType = this.types.find((type) => {
        return type.type == data.type;
      });
      if (actionType) {
        const action = actionType.clone();
        action.deserialize(data);
        actions.push(action);
      }
    }
    this.value = actions;
  }
}
