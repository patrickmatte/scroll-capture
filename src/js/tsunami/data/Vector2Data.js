import NumberData from "./NumberData";
import Data from "./Data";
import DataModel from "./DataModel";
import BaseEvent from "../events";
import Point from "../geom/Point";

export default class Vector2Data extends DataModel {

	constructor(x = 0, y = 0) {
		super();
		
		this.dataChangeHandler = this.dataChangeHandler.bind(this);

		this.x = new NumberData(x);
		this.x.addEventListener(Data.CHANGE, this.dataChangeHandler);

		this.y = new NumberData(y);
		this.y.addEventListener(Data.CHANGE, this.dataChangeHandler);
	}

	dataChangeHandler() {
		this.dispatchChangeEvent();
	}

	destroy() {
		this.x.removeEventListener(Data.CHANGE, this.dataChangeHandler);
		this.y.removeEventListener(Data.CHANGE, this.dataChangeHandler);
		return super.destroy();
	}

	copy(obj) {
		if (!obj) return;
		this.x.copy(obj.x);
		this.y.copy(obj.y);
	}

	clone() {
		let point = new Vector2Data();
		point.copy(this);
		return point;
	}

	get point() {
		return new Point(this.x.value, this.y.value);
	}

	serialize() {
		return {x:this.x.value, y:this.y.value};
	}
	
	deserialize(data) {
		if(data) {
			this.x.value = data.x;
			this.y.value = data.y;
		}
	}

}