import UIText from "./UIText";
import Tween from "../animation/Tween";
import TweenProperty from "../animation/TweenProperty";
import Easing from "../animation/Easing";
import {getOrdinalSuffix, format, roundDecimalToPlace} from "../utils/number";

export default class UINumber extends UIText {

	constructor(element) {
		super(element);
		this._currentValue = 0;

		this.isRank = false;

		this.roundDecimal = 1;

		this.applyFormat = false;

		this.easing = Easing.cubic.easeOut;

		this.updateDelay = 0;
		this.updateDuration = 0;
	}

	get model() {
		return super.model;
	}

	set model(value) {
		if (value instanceof Data) value = value.value;
		if (isNaN(value)) {
			value = 0;
		}
		if (this.updateDuration > 0) {
			if (this.updateTween) {
				this.updateTween.stop();
			}
			this.updateTween = new Tween(this.updateDelay, this.updateDuration, [new TweenProperty(this, "currentValue", this.currentValue, value, this.easing)]);
			this.updateTween.start();
		} else {
			super.model = value;
		}
	}

	get currentValue() {
		return this._currentValue;
	}

	set currentValue(value) {
		this._currentValue = value;
		// let newValue = Math.round(value * this.roundDecimal) / this.roundDecimal;
		let newValue = roundDecimalToPlace(value, this.roundDecimal);
		this.updateCurrentValue(newValue);
	}

	updateCurrentValue(value) {
		if (this.applyFormat) {
			let split = value.toString().split(".");
			if (split.length > 0) {
				split[0] = format(split[0], ",");
				if (split.length > 0) {
					value = split.join('.');
				} else {
					value = split[0];
				}
			}
		}
		if(this.isRank) {
			value = value + getOrdinalSuffix(value);
		}
		super.model = value;
	}

}