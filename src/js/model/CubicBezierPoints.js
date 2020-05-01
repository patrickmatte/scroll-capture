import Vector2Data from "../tsunami/data/Vector2Data";
import Data from "../tsunami/data/Data";
import BaseEvent from "../tsunami/events";
import NumberData from "../tsunami/data/NumberData";
import CubicBezierEasing from "../tsunami/animation/CubicBezierEasing";
import { roundDecimalTo2 } from "../tsunami/utils/number";

export default class CubicBezierPoints extends Data {

	constructor() {
		super();
		this.changeHandler = this.changeHandler.bind(this);

		this._value = this;

		this.p0 = new Vector2Data(0,0);
		this.p1 = new Vector2Data(CubicBezierEasing.quad.easeInOut.p1.x, CubicBezierEasing.quad.easeInOut.p1.y);
		this.p2 = new Vector2Data(CubicBezierEasing.quad.easeInOut.p2.x, CubicBezierEasing.quad.easeInOut.p2.y);
		this.p3 = new Vector2Data(1, 1);
		this.p0.addEventListener(Data.CHANGE, this.changeHandler);
		this.p1.addEventListener(Data.CHANGE, this.changeHandler);
		this.p2.addEventListener(Data.CHANGE, this.changeHandler);
		this.p3.addEventListener(Data.CHANGE, this.changeHandler);
		for(let i = 0; i < 4; i++) {
			let vec = this["p" + i];
			vec.x.modifiers = [roundDecimalTo2];
			vec.y.modifiers = [roundDecimalTo2];
		}
		
		this.controlPoints = [this.p1, this.p2];
		this.controlPointsLines = [[this.p0, this.p1], [this.p3, this.p2]];
	}

	copy(obj) {
		if (!obj) return;
		this.p0.copy(obj.p0);
		this.p1.copy(obj.p1);
		this.p2.copy(obj.p2);
		this.p3.copy(obj.p3);
	}

	changeHandler() {
		// this.dispatchEvent(new BaseEvent(Data.CHANGE, this));
		this.dispatchChangeEvent();
	}

}