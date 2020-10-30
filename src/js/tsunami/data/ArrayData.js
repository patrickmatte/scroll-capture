import Data from "./Data";
import NumberData from "./NumberData";
import ObjectData from "./ObjectData";
import BaseEvent from "../events";

export default class ArrayData extends Data {

	static get ITEM_CHANGE() {
		return "item-change";
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
		let index = this.value.indexOf(this.selectedItem.value);
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

		let index = this.selectedIndex.value;

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
		let index = this.selectedIndex.value;
		this.selectedItem.removeEventListener(Data.CHANGE, this.selectedItemChange);
		this.selectedItem.value = this.value[index];
		this.selectedItem.addEventListener(Data.CHANGE, this.selectedItemChange);
		this.setSelectedData(this.selectedItem.value);
	}

	clear() {
		return this.splice(0, this.value.length);
	}

	dataItemChangeHandler(e) {
		let event = new BaseEvent(ArrayData.ITEM_CHANGE, this.value);
		this.dispatchEvent(event);
	}

	item(index) {
		return this._value[index];
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if (!value) value = [];
		
		for (let i = 0; i < this._value.length; i++) {
			let oldItem = this._value[i];
			if (oldItem instanceof Data) {
				oldItem.removeEventListener(Data.CHANGE, this.dataItemChangeHandler);
			}
		}
		var args = [0, this.value.length].concat(value);
		this.splice.apply(this, args);
		// this.splice(0, this.value.length);
		// this._value = value;

		for (let i = 0; i < this._value.length; i++) {
			let item = this._value[i];
			if (item instanceof Data) {
				item.addEventListener(Data.CHANGE, this.dataItemChangeHandler);
			}
		}
		this.length.value = this._value.length;
		// this.dispatchEvent({type:"reset", value:this._value});
		this.dispatchChangeEvent("value", this.value);
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
		let selected = this.find((element) => {
			return (element[key].toString() == value.toString());
		});
		return selected;
	}

	filter(callback) {
		return this._value.filter(callback);
	}

	pop() {
		let item = this._value.pop();
		if (item instanceof Data) {
			item.removeEventListener(Data.CHANGE, this.dataItemChangeHandler);
		}
		this.length.value = this._value.length;
		let event = new BaseEvent("remove", {value: [item], index: this.value.length, total: 1 })
		this.dispatchEvent(event);
		// this.dispatchChangeEvent();
		if (item == this.selectedItem.value) {
			this.selectedItem.value = null;
		} else {
			this.updateSelectedIndex();
		}
		return item;
	}

	push() {
		let previousLength = this.value.length;
		let length = this._value.push.apply(this._value, arguments);
		this.length.value = length;
		let added = [];
		for (let i = 0; i < arguments.length; i++) {
			added.push(arguments[i]);
		}
		for (let i = 0; i < added.length; i++) {
			let item = added[i];
			if (item instanceof Data) {
				item.addEventListener(Data.CHANGE, this.dataItemChangeHandler);
			}
		}
		if (added.length > 0) {
			let event = new BaseEvent("add", {value: added, index: previousLength, total: arguments.length});
			this.dispatchEvent(event);
			// this.dispatchChangeEvent();
		}
		return length;
	}

	reverse() {
		this._value.reverse();
		let event = new BaseEvent("reverse", {value: this._value})
		this.dispatchEvent(event);
		// this.dispatchChangeEvent();
		this.updateSelectedIndex();
	}

	shift() {
		let item = this._value.shift();
		if (item instanceof Data) {
			item.removeEventListener(Data.CHANGE, this.dataItemChangeHandler);
		}
		this.length.value = this._value.length;
		let event = new BaseEvent("remove", {value: [item], index: 0, total: 1})
		this.dispatchEvent(event);
		// this.dispatchChangeEvent();
		if (item == this.selectedItem.value) {
			this.selectedItem.value = null;
		} else {
			this.updateSelectedIndex();
		}
		return item;
	}

	swap(index_A, index_B) {
		let temp = this._value[index_A];
		this._value[index_A] = this._value[index_B];
		this._value[index_B] = temp;
		let event = new BaseEvent("sort", {value: this._value});
		this.dispatchEvent(event);
		// this.dispatchChangeEvent();
		this.updateSelectedIndex();
	}

	sort(compareFunction) {
		this._value.sort(compareFunction);
		let event = new BaseEvent("sort", {value: this._value});
		this.dispatchEvent(event);
		// this.dispatchChangeEvent();
		this.updateSelectedIndex();
	}

	splice() {
		let elements = this._value.splice.apply(this._value, arguments);
		for (let i = 0; i < elements.length; i++) {
			let item = elements[i];
			if (item instanceof Data) {
				item.removeEventListener(Data.CHANGE, this.dataItemChangeHandler);
			}
		}
		let added = [];
		for (let i = 2; i < arguments.length; i++) {
			added.push(arguments[i]);
		}
		this.length.value = this._value.length;
		for (let i = 0; i < added.length; i++) {
			let item = added[i];
			if (item instanceof Data) {
				item.addEventListener(Data.CHANGE, this.dataItemChangeHandler);
			}
		}
		let index = arguments[0];
		if (elements.length > 0) {
			let event = new BaseEvent("remove", {value: elements, index: index, total: elements.length});
			this.dispatchEvent(event);
		}
		if (added.length > 0) {
			let event = new BaseEvent("add", {value: added, index: index, total: added.length});
			this.dispatchEvent(event);
		}
		// if (elements.length > 0 || added.length > 0) {
		// 	this.dispatchChangeEvent();
		// }
		if (this.includes(this.selectedItem.value)) {
			this.updateSelectedIndex();
		} else {
			this.selectedItem.value = null;
		}
		if(this.debug) console.log(this.value);
		return elements;
	}

	remove(element) {
		let index = this.indexOf(element);
		if(this.debug) console.log("ArrayData.remove", index);
		if (index != -1) {
			this.splice(index, 1);
		}
	}

	unshift() {
		let length = this._value.unshift.apply(this._value, arguments);
		this.length.value = length;
		let added = [];
		for (let i = 0; i < arguments.length; i++) {
			added.push(arguments[i]);
		}
		for (let i = 0; i < added.length; i++) {
			let item = added[i];
			if (item instanceof Data) {
				item.addEventListener(Data.CHANGE, this.dataItemChangeHandler);
			}
		}
		if (added.length > 0) {
			let event = new BaseEvent("add", {value: added, index: 0, total: arguments.length});
			this.dispatchEvent(event);
			// this.dispatchChangeEvent();
		}
		this.updateSelectedIndex();
		return length;
	}

	dispatchChangeEvent(name, value) {
		this.dataItemChangeHandler(null);
		super.dispatchChangeEvent(name, value);
	}

	includes(element) {
		let index = this.indexOf(element);
		return (index != -1);
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
		let array = [];
		this.map((obj) => {
			array.push(obj.serialize());
		});
		return array;
	}

	deserialize(data) {
		let array = [];
		data.map((obj) => {
			let instance = new this.dataClass();
			instance.deserialize(obj);
			array.push(instance);
		});
		this.value = array;
	}

	toString() {
		return this.value.toString();
	}

}
