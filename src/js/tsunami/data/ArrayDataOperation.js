import Data from "./Data";
import ArrayData from "./ArrayData";
import BaseEvent from "../events";
import {evalProperty} from "../tsunami";
import Validation from "./Validation";

export default class ArrayDataOperation extends Data {

	constructor(operation = ArrayDataOperation.ADD, arrayData, modifiers = []) {
		super();

		if(!arrayData) {
			arrayData = new ArrayData();
		}

		this.modifiers = modifiers;

		this.itemChangeHandler = this.itemChangeHandler.bind(this);
		this.operation = operation;
		this.arrayData = arrayData;
	}

	static ADD(value1, value2) {
		return value1 + value2;
	}

	static ADD_TOSTRING(value1, value2) {
		return value1.toString() + value2.toString();
	}

	static SUBTRACT(value1, value2) {
		return value1 - value2;
	}

	static MULTIPLY(value1, value2) {
		return value1 * value2;
	}

	static DIVIDE(value1, value2) {
		return value1 / value2;
	}

	static MIN(value1, value2) {
		return Math.min(value1, value2);
	}

	static MAX(value1, value2) {
		return Math.max(value1, value2);
	}

	get arrayData() {
		return this._array;
	}

	set arrayData(value) {
		if (this._array) {
			if (this._array instanceof ArrayData) {
				this._array.removeEventListener(ArrayData.ITEM_CHANGE, this.itemChangeHandler);
			}
		}
		this._array = value;
		if (this._array) {
			if (this._array instanceof ArrayData) {
				this._array.addEventListener(ArrayData.ITEM_CHANGE, this.itemChangeHandler);
			}
		}
		this.itemChangeHandler();
	}

	get value () {
		return this._value;
	}

	set value (value) {
		for (let i = 0; i < this.modifiers.length; i++) {
			let modifier = this.modifiers[i];
			value = modifier(value);
		}
		if (value != this._value) {
			this._value = value;
			this.dispatchEvent({type:Data.CHANGE, value:this._value});
		} else if(this.forceChangeEvent) {
			this.dispatchEvent({type:Data.CHANGE, value:this._value});
		}
	}

	itemChangeHandler(event) {
		let newValue;
		let array = this.arrayData;
		if (array) {
			if (this._array instanceof ArrayData) {
				array = this.arrayData.value;
			}

			if (array.length > 0) {
				let firstItem = array[0];
				newValue = firstItem;
				if (firstItem instanceof Data) {
					newValue = firstItem.value;
				}

				for (let i = 1; i < array.length; i++) {
					let item = array[i];
					let itemValue = item;
					if (item instanceof Data) {
						itemValue = item.value;
					}
					newValue = this.operation(newValue, itemValue);
				}
			}
		}
		// if(this.debug) {
		// 	console.log("ArrayDataOperation.itemChangeHandler newValue", newValue);
		// }

		this.value = newValue;
		// if (this._value != newValue) {
		// 	this._value = newValue;
		// 	this.dispatchEvent(new BaseEvent(Data.CHANGE, this.value));
		// }
	}

	parseString(string, scope) {
		let chunks = string.split("[[");
		let array = [];
		for (let i = 0; i < chunks.length; i++) {
			let chunk = chunks[i];
			if (chunk.indexOf("]]") == -1) {
				array.push(chunk);
			} else {
				let chunkArray = chunk.split("]]");
				for (let j = 0; j < chunkArray.length; j++) {
					let chunk2 = chunkArray[j];
					if (j == 0) {
						let model = evalProperty(chunk2, scope);
						array.push(model);
					} else {
						array.push(chunk2);
					}
				}
			}
		}
		this.arrayData.value = array;
	}

	destroy() {
		if(this.arrayData instanceof Data) {
			this.arrayData.destroy();
		}
		this.arrayData = null;
		this.modifiers = [];
		if(this.validation instanceof Validation) {
			this.validation.destroy();
		}
		return super.destroy();
	}

}