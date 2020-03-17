import Vector2Data from "../tsunami/data/Vector2Data";
import Data from "../tsunami/data/Data";
import BaseEvent from "../tsunami/events";
import NumberData from "../tsunami/data/NumberData";
import CubicBezierEasing from "../tsunami/animation/CubicBezierEasing";

export default class CubicBezierPoints extends Data {

	constructor() {
		super();
		this.changeHandler = this.changeHandler.bind(this);

		this.p0 = new Vector2Data(0,0);
		this.p1 = new Vector2Data(CubicBezierEasing.quadratic.easeInOut.p1.x, CubicBezierEasing.quadratic.easeInOut.p1.y);
		this.p2 = new Vector2Data(CubicBezierEasing.quadratic.easeInOut.p2.x, CubicBezierEasing.quadratic.easeInOut.p2.y);
		this.p3 = new Vector2Data(1, 1);
		this.p0.addEventListener(Data.CHANGE, this.changeHandler);
		this.p1.addEventListener(Data.CHANGE, this.changeHandler);
		this.p2.addEventListener(Data.CHANGE, this.changeHandler);
		this.p3.addEventListener(Data.CHANGE, this.changeHandler);
		for(let i = 0; i < 4; i++) {
			let vec = this["p" + i];
			vec.x.modifiers = [NumberData.roundDecimal3];
			vec.y.modifiers = [NumberData.roundDecimal3];
		}
	}

	changeHandler() {
		this.dispatchEvent(new BaseEvent(Data.CHANGE, this));
	}

}