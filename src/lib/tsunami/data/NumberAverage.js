import Data from "./Data";
import ArrayData from "./ArrayData";
import BaseEvent from "../events";

export default class NumberAverage extends Data {

	 constructor(numbers) {
		super();
		this.numberChangeBind = this.numberChangeHandler.bind(this);
		this._currentNumbers = [];
		if (!numbers) {
			numbers = new ArrayData();
		}
		this.numbers = numbers;
		this.numbers.addEventListener(Data.CHANGE, this.arrayChange.bind(this));
		this.arrayChange();
	}

	arrayChange() {
		for (var i = 0; i < this._currentNumbers.length; i++) {
			var number = this._currentNumbers[i];
			number.removeEventListener(Data.CHANGE, this.numberChangeBind);
		}
		this._currentNumbers = this.numbers.value;
		for (var i = 0; i < this._currentNumbers.length; i++) {
			var number = this._currentNumbers[i];
			number.addEventListener(Data.CHANGE, this.numberChangeBind);
		}
		this.calculateAverage();
	}

	numberChangeHandler() {
		this.calculateAverage();
	}

	calculateAverage() {
		var total = 0;
		var array = this.numbers.value;
		for (var i = 0; i < array.length; i++) {
			var number = array[i];
			total += number.value;
		}
		this._value = total / Math.max(array.length, 1);
		let event = new BaseEvent(Data.CHANGE, this._value);
		this.dispatchEvent(event);
	}

	get value() {
		return this._value;
	}

	toString() {
		return this.value.toString();
	}

	destroy() {
		if(this.numbers instanceof Data) {
			this.numbers.destroy();
		}
		this.numbers = null;
		this._currentNumbers = null;
	}

}
