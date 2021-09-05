import Data from './Data';
import NumberData from './NumberData';
import ObjectData from './ObjectData';
import BaseEvent from '../events';
import ChangeEvent from '../ChangeEvent';

export default class ArrayData extends Data {
  static get ITEM_CHANGE() {
    return 'item-change';
  }

  constructor() {
    super();

    this.dataItemChangeHandler = this.dataItemChangeHandler.bind(this);
    this.selectedItemChange = this.selectedItemChange.bind(this);
    this.selectedIndexChange = this.selectedIndexChange.bind(this);

    this.lastIndex = new NumberData();
    this.length = new NumberData();
    this.length.addEventListener(Data.CHANGE, () => {
      this.lastIndex.value = this.length.value - 1;
    });
    this.length.value = arguments.length;
    this._value = [];
    this.selectedItem = new ObjectData();
    this.selectedItem.addEventListener(Data.CHANGE, this.selectedItemChange);
    this.selectedIndex = new NumberData();
    this.selectedIndex.addEventListener(Data.CHANGE, this.selectedIndexChange);
    this.nextIndex = new NumberData();
    this.prevIndex = new NumberData();
    this.dataClass = Object;
    this.push.apply(this, arguments);
  }

  selectedItemChange(event) {
    this.updateSelectedIndex();
    this.setSelectedData(this.selectedItem.value);
  }

  updateSelectedIndex() {
    this.selectedIndex.removeEventListener(Data.CHANGE, this.selectedIndexChange);
    const index = this.value.indexOf(this.selectedItem.value);
    this.selectedIndex.value = index;
    this.selectedIndex.addEventListener(Data.CHANGE, this.selectedIndexChange);
  }

  setSelectedData(value) {
    if (this.previousSelectedItem) {
      if (this.previousSelectedItem.isSelectedItem instanceof Data) {
        this.previousSelectedItem.isSelectedItem.value = false;
      }
    }
    if (this.selectedData) {
      this.selectedData.copy(value);
    }
    this.previousSelectedItem = value;
    if (this.previousSelectedItem) {
      if (this.previousSelectedItem.isSelectedItem instanceof Data) {
        this.previousSelectedItem.isSelectedItem.value = true;
      }
    }

    const index = this.selectedIndex.value;

    let nextIndex = index + 1;
    if (nextIndex > this.value.length - 1) {
      nextIndex = 0;
    }
    this.nextIndex.value = nextIndex;
    if (this.nextData) {
      this.nextData.copy(this.value[this.nextIndex.value]);
    }

    let prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = this.value.length - 1;
    }
    this.prevIndex.value = prevIndex;
    if (this.prevData) {
      this.prevData.copy(this.value[this.prevIndex.value]);
    }
  }

  selectedIndexChange(event) {
    const index = this.selectedIndex.value;
    this.selectedItem.removeEventListener(Data.CHANGE, this.selectedItemChange);
    this.selectedItem.value = this.value[index];
    this.selectedItem.addEventListener(Data.CHANGE, this.selectedItemChange);
    this.setSelectedData(this.selectedItem.value);
  }

  clear() {
    return this.splice(0, this.value.length);
  }

  dataItemChangeHandler(e) {
    const event = new BaseEvent(ArrayData.ITEM_CHANGE, this.value);
    this.dispatchEvent(event);
  }

  item(index) {
    return this._value[index];
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (!value) {
      value = [];
    }

    for (let i = 0; i < this._value.length; i++) {
      const oldItem = this._value[i];
      if (oldItem instanceof Data) {
        oldItem.removeEventListener(Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    const args = [0, this.value.length].concat(value);
    this.splice.apply(this, args);
    // this.splice(0, this.value.length);
    // this._value = value;

    for (let i = 0; i < this._value.length; i++) {
      const item = this._value[i];
      if (item instanceof Data) {
        item.addEventListener(Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    this.length.value = this._value.length;

    ChangeEvent.dispatch(this, 'value', this.value);
    this.dataItemChangeHandler(null);

    if (this.includes(this.selectedItem.value)) {
      this.updateSelectedIndex();
    } else {
      this.selectedItem.value = null;
    }
  }

  indexOf(searchElement, fromIndex) {
    return this._value.indexOf(searchElement, fromIndex);
  }

  map(callback) {
    return this._value.map(callback);
  }

  find(callback) {
    return this._value.find(callback);
  }

  findByKey(key, value) {
    const selected = this.find((element) => {
      return element[key].toString() === value.toString();
    });
    return selected;
  }

  filter(callback) {
    return this._value.filter(callback);
  }

  pop() {
    const item = this._value.pop();
    if (item instanceof Data) {
      item.removeEventListener(Data.CHANGE, this.dataItemChangeHandler);
    }
    this.length.value = this._value.length;
    const event = new BaseEvent('remove', {
      value: [item],
      index: this.value.length,
      total: 1,
    });
    this.dispatchEvent(event);
    if (item === this.selectedItem.value) {
      this.selectedItem.value = null;
    } else {
      this.updateSelectedIndex();
    }
    return item;
  }

  push() {
    const previousLength = this.value.length;
    const length = this._value.push.apply(this._value, arguments);
    this.length.value = length;
    const added = [];
    for (let i = 0; i < arguments.length; i++) {
      added.push(arguments[i]);
    }
    for (let i = 0; i < added.length; i++) {
      const item = added[i];
      if (item instanceof Data) {
        item.addEventListener(Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    if (added.length > 0) {
      const event = new BaseEvent('add', {
        value: added,
        index: previousLength,
        total: arguments.length,
      });
      this.dispatchEvent(event);
    }
    return length;
  }

  reverse() {
    this._value.reverse();
    const event = new BaseEvent('reverse', { value: this._value });
    this.dispatchEvent(event);
    this.updateSelectedIndex();
  }

  shift() {
    const item = this._value.shift();
    if (item instanceof Data) {
      item.removeEventListener(Data.CHANGE, this.dataItemChangeHandler);
    }
    this.length.value = this._value.length;
    const event = new BaseEvent('remove', {
      value: [item],
      index: 0,
      total: 1,
    });
    this.dispatchEvent(event);
    if (item === this.selectedItem.value) {
      this.selectedItem.value = null;
    } else {
      this.updateSelectedIndex();
    }
    return item;
  }

  swap(index_A, index_B) {
    const temp = this._value[index_A];
    this._value[index_A] = this._value[index_B];
    this._value[index_B] = temp;
    const event = new BaseEvent('sort', { value: this._value });
    this.dispatchEvent(event);
    this.updateSelectedIndex();
  }

  sort(compareFunction) {
    this._value.sort(compareFunction);
    const event = new BaseEvent('sort', { value: this._value });
    this.dispatchEvent(event);
    this.updateSelectedIndex();
  }

  splice() {
    const elements = this._value.splice.apply(this._value, arguments);
    for (let i = 0; i < elements.length; i++) {
      const item = elements[i];
      if (item instanceof Data) {
        item.removeEventListener(Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    const added = [];
    for (let i = 2; i < arguments.length; i++) {
      added.push(arguments[i]);
    }
    this.length.value = this._value.length;
    for (let i = 0; i < added.length; i++) {
      const item = added[i];
      if (item instanceof Data) {
        item.addEventListener(Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    const index = arguments[0];
    if (elements.length > 0) {
      const event = new BaseEvent('remove', {
        value: elements,
        index: index,
        total: elements.length,
      });
      this.dispatchEvent(event);
    }
    if (added.length > 0) {
      const event = new BaseEvent('add', {
        value: added,
        index: index,
        total: added.length,
      });
      this.dispatchEvent(event);
    }
    // if (elements.length > 0 || added.length > 0) {
    // }
    if (this.includes(this.selectedItem.value)) {
      this.updateSelectedIndex();
    } else {
      this.selectedItem.value = null;
    }
    return elements;
  }

  remove(element) {
    const index = this.indexOf(element);
    if (index !== -1) {
      this.splice(index, 1);
    }
  }

  unshift() {
    const length = this._value.unshift.apply(this._value, arguments);
    this.length.value = length;
    const added = [];
    for (let i = 0; i < arguments.length; i++) {
      added.push(arguments[i]);
    }
    for (let i = 0; i < added.length; i++) {
      const item = added[i];
      if (item instanceof Data) {
        item.addEventListener(Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    if (added.length > 0) {
      const event = new BaseEvent('add', {
        value: added,
        index: 0,
        total: arguments.length,
      });
      this.dispatchEvent(event);
    }
    this.updateSelectedIndex();
    return length;
  }

  includes(element) {
    const index = this.indexOf(element);
    return index !== -1;
  }

  join() {
    return this._value.join.apply(this._value, arguments);
  }

  concat() {
    return this._value.concat.apply(this._value, arguments);
  }

  slice() {
    return this._value.slice.apply(this._value, arguments);
  }

  serialize() {
    const array = [];
    this.forEach((obj) => {
      array.push(obj.serialize());
    });
    return array;
  }

  deserialize(data) {
    const array = [];
    data.forEach((obj) => {
      const instance = new this.dataClass();
      instance.deserialize(obj);
      array.push(instance);
    });
    this.value = array;
  }

  toString() {
    return this.value.toString();
  }
}
