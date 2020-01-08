import Data from "./Data";
import NumberData from "./NumberData";
import ObjectData from "./ObjectData";
import BaseEvent from "../events";

export default class ArrayData extends Data {

	static shuffle(o) {
		for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	}

	static nodeListToArray(nodeList) {
		return Array.prototype.slice.call(nodeList);
		// let array = new Array();
		// for (let i = 0; i < nodeList.length; i++) {
		// 	array.push(nodeList.item(i));
		// }
		// return array;
	}

	static get ITEM_CHANGE() {
		return "item-change";
	}

	constructor() {
		super();
		this.dataItemChangeBind = this.dataItemChangeHandler.bind(this);
		this.lastIndex = new NumberData();
		this.length = new NumberData();
		this.length.addEventListener(Data.CHANGE, ()=> {
			this.lastIndex.value = this.length.value - 1;
		});
		this.length.value = arguments.length;
		this._value = [];
		this.selectedItem = new ObjectData();
		this.selectedItemChange = this.selectedItemChange.bind(this);
		this.selectedItem.addEventListener(Data.CHANGE, this.selectedItemChange);
		this.selectedIndex = new NumberData();
		this.selectedIndexChange = this.selectedIndexChange.bind(this);
		this.selectedIndex.addEventListener(Data.CHANGE, this.selectedIndexChange);
		this.nextIndex = new NumberData();
		this.prevIndex = new NumberData();
		this.dataClass = Object;
		this.push.apply(this, arguments);
	}

	selectedItemChange(event) {
		this.selectedIndex.removeEventListener(Data.CHANGE, this.selectedIndexChange);
		let index = this.value.indexOf(this.selectedItem.value);
		this.selectedIndex.value = index;
		this.selectedIndex.addEventListener(Data.CHANGE, this.selectedIndexChange);
		this.setSelectedData(this.selectedItem.value);
	}

	setSelectedData(value) {
		if(this.previousSelectedItem) {
			if(this.previousSelectedItem.isSelectedItem instanceof Data) {
				this.previousSelectedItem.isSelectedItem.value = false;
			}
		}
		if (this.selectedData) {
			this.selectedData.copy(value);
		}
		this.previousSelectedItem = value;
		if(this.previousSelectedItem) {
			if(this.previousSelectedItem.isSelectedItem instanceof Data) {
				this.previousSelectedItem.isSelectedItem.value = true;
			}
		}

		let index = this.selectedIndex.value;
		
		let nextIndex = index + 1;
		if(nextIndex > this.value.length - 1) {
			nextIndex = 0;
		}
		this.nextIndex.value = nextIndex;
		if(this.nextData) {
			this.nextData.copy(this.value[this.nextIndex.value]);
		}

		let prevIndex = index - 1;
		if(prevIndex < 0) {
			prevIndex = this.value.length - 1;
		}
		this.prevIndex.value = prevIndex;
		if(this.prevData) {
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

	dataItemChangeHandler(e) {
		let event = new BaseEvent(ArrayData.ITEM_CHANGE, this.value);
		this.dispatchEvent(event);
	}

	item (index) {
		return this._value[index];
	}

	get value() {
		return this._value;
	}

	set value(value) {
		for (let i = 0; i < this._value.length; i++) {
			let oldItem = this._value[i];
			if (oldItem instanceof Data) {
				oldItem.removeEventListener(Data.CHANGE, this.dataItemChangeBind);
			}
		}
		if(!value) {
			value = [];
		}
		this._value = value;
		for (let i = 0; i < this._value.length; i++) {
			let item = this._value[i];
			if (item instanceof Data) {
				item.addEventListener(Data.CHANGE, this.dataItemChangeBind);
			}
		}
		this.length.value = this._value.length;
		this.selectedItem.value = null;
		this.dispatchEvent({type:"reset", value:this._value});
		this.dispatchChangeEvent();
	}

	indexOf(searchElement, fromIndex) {
		return this._value.indexOf(searchElement, fromIndex);
	}

	map (callback) {
		return this._value.map(callback);
	}

	find(callback) {
		return this._value.find(callback);
	}

	findByKey(key, value) {
		let selected = this.find((element)=> {
			return (element[key].toString() == value.toString());
		});
		return selected;
	}

	filter (callback) {
		return this._value.filter(callback);
	}

	pop() {
		let item = this._value.pop();
		if (item instanceof Data) {
			item.removeEventListener(Data.CHANGE, this.dataItemChangeBind);
		}
		this.length.value = this._value.length;
		this.dispatchEvent({type:"remove", value:[item], index:this.value.length, total:1});
		this.dispatchChangeEvent();
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
				item.addEventListener(Data.CHANGE, this.dataItemChangeBind);
			}
		}
		if (added.length > 0) {
			this.dispatchEvent({type:"add", value:added, index:previousLength, total:arguments.length});
			this.dispatchChangeEvent();
		}
		return length;
	}

	reverse() {
		this._value.reverse();
		this.dispatchEvent({type:"reverse", value:this._value});
		this.dispatchChangeEvent();
	}

	shift() {
		let item = this._value.shift();
		if (item instanceof Data) {
			item.removeEventListener(Data.CHANGE, this.dataItemChangeBind);
		}
		this.length.value = this._value.length;
		this.dispatchEvent({type:"remove", value:[item], index:0, total:1});
		this.dispatchChangeEvent();
		return item;
	}

	sort(compareFunction) {
		this._value.sort(compareFunction);
		this.dispatchEvent({type:"sort", value:this._value});
		this.dispatchChangeEvent();
	}

	splice() {
		let elements = this._value.splice.apply(this._value, arguments);
		for (let i = 0; i < elements.length; i++) {
			let item = elements[i];
			if (item instanceof Data) {
				item.removeEventListener(Data.CHANGE, this.dataItemChangeBind);
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
				item.addEventListener(Data.CHANGE, this.dataItemChangeBind);
			}
		}
		let index = arguments[0];
		if (elements.length > 0) {
			this.dispatchEvent({type:"remove", value:elements, index:index, total:elements.length});
		}
		if (added.length > 0) {
			this.dispatchEvent({type:"add", value:added, index:index, total:added.length});
		}
		if (elements.length > 0 || added.length > 0) {
			this.dispatchChangeEvent();
		}
		return elements;
	}

	remove(element) {
		let index = this.indexOf(element);
		if(index != -1) {
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
				item.addEventListener(Data.CHANGE, this.dataItemChangeBind);
			}
		}
		if (added.length > 0) {
			this.dispatchEvent({type:"add", value:added, index:0, total:arguments.length});
			this.dispatchChangeEvent();
		}
		return length;
	}

	dispatchChangeEvent() {
		this.dataItemChangeHandler(null);
		this.dispatchEvent({type:Data.CHANGE, value:this._value});
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