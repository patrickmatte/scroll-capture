import UIComponent from "./UIComponent";
import Data from "../data/Data";

export default class SVGPath extends UIComponent {

	constructor(element) {
		super(element);
		this._offsetMultiplier = 0;
		this.totalLength = this.getTotalLength();
		this.dashArray = 1;
		this.dashOffset = 1;

		// this.showDuration = 1000;
		// this.hideDuration = 1000;

		// let dataDashOffset = this.element.getAttribute("data-dash-offset");
		// if (dataDashOffset) {
		// 	this.dashOffset = Number(dataDashOffset);
		// }
	}

	getTotalLength() {
		return this.element.getTotalLength();
	}

	get dashArray() {
		return this._dashArray;
	}

	set dashArray(value) {
		this._dashArray = value;
		let length = this.totalLength * value;
		this.element.setAttribute("stroke-dasharray", Math.round(length * 100) / 100);
	}

	get dashOffset() {
		return this._dashOffset;
	}

	set dashOffset(value) {
		this._dashOffset = value;
		let length = this.totalLength * (1 - value * this._offsetMultiplier);
		this.element.setAttribute("stroke-dashoffset", Math.round(length * 100) / 100);
	}

	get offsetMultiplier() {
		return this._offsetMultiplier;
	}

	set offsetMultiplier(value) {
		this._offsetMultiplier = value;
		this.dashOffset = this.dashOffset;
	}

	showDelayComplete() {
		let promise = super.showDelayComplete();
		this.offsetMultiplier = 1;
		return promise;
	}

	hideDelayComplete() {
		let promise = super.hideDelayComplete();
		this.offsetMultiplier = 0;
		return promise;
	}

	get model() {
		return super.model;
	}

	set model(value) {
		super.model = value;
		if (value instanceof Data) value = value.value;
		this.dashOffset = value;
	}

}