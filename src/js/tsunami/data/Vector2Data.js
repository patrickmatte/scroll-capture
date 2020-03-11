import NumberData from "./NumberData";
import Data from "./Data";
import EventDispatcher from "../EventDispatcher";
import BaseEvent from "../events";
import Point from "../geom/Point";

export default class Vector2Data extends EventDispatcher {

	constructor(x = 0, y = 0) {
		super();
		this.dispatchChangeEvent = this.dispatchChangeEvent.bind(this);
		this.x = new NumberData(x);
		this.x.addEventListener(Data.CHANGE, this.dispatchChangeEvent);
		this.y = new NumberData(y);
		this.y.addEventListener(Data.CHANGE, this.dispatchChangeEvent);
	}

	dispatchChangeEvent(event) {
		this.dispatchEvent(new BaseEvent(Data.CHANGE, this));
	}

	clone() {
		let point = new Vector2Data();
		point.copy(this);
		return point;
	}

	copy(point) {
		this.x.copy(point.x);
		this.y.copy(point.y);
	}

	serialize() {
		return {x:this.x.value, y:this.y.value};
	}

	get point() {
		return new Point(this.x.value, this.y.value);
	}

	deserialize(data) {
		if(data) {
			this.x.value = data.x;
			this.y.value = data.y;
		}
	}

}