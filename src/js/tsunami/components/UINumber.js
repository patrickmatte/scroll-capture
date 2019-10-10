import UIText from "./UIText";
import Tween from "../animation/Tween";
import TweenProperty from "../animation/TweenProperty";
import Easing from "../animation/Easing";
import {getOrdinalSuffix, format} from "../utils/number";

export default class UINumber extends UIText {

	constructor(element) {
		super(element);
		this._currentValue = 0;
		this.roundDecimal = 10;
		this.easing = Easing.cubic.easeOut;

		let isRank = this.element.getAttribute("data-is-rank");
		if(isRank == "true") {
			this.isRank = true;
		}

		let roundDecimal = this.element.getAttribute("data-round-decimal");
		if (roundDecimal) {
			this.roundDecimal = Number(roundDecimal);
		}

		let format = this.element.getAttribute("data-format");
		if (format) {
			this.applyFormat = Boolean(format);
		}
	}

	updateValue(value) {
		if(isNaN(value)) {
			value = 0;
		}
		let tween = new Tween(0, 0.5, [new TweenProperty(this, "currentValue", this.currentValue, value, this.easing)]);
		tween.start();
	}

	get currentValue() {
		return this._currentValue;
	}

	set currentValue(value) {
		this._currentValue = value;
		let newValue = Math.round(value * this.roundDecimal) / this.roundDecimal;
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
		super.updateValue(value);
	}

}