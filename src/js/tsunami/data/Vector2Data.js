import NumberData from "./NumberData";
import Data from "./Data";
import DataModel from "./DataModel";
import BaseEvent from "../events";
import Point from "../geom/Point";

export default class Vector2Data extends DataModel {

	constructor(x = 0, y = 0) {
		super();

		this.x = new NumberData(x);
		this.x.addEventListener(Data.CHANGE, this.changeHandler);

		this.y = new NumberData(y);
		this.y.addEventListener(Data.CHANGE, this.changeHandler);
	}

	destroy() {
		this.x.removeEventListener(Data.CHANGE, this.changeHandler);
		this.y.removeEventListener(Data.CHANGE, this.changeHandler);
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
		if(!data) return 
		this.x.value = data.x;
		this.y.value = data.y;
	}

}