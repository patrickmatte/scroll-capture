import NumberData from "./NumberData";
import Vector2Data from "./Vector2Data";

export default class Vector3Data extends Vector2Data {

	constructor(x = 0, y = 0, z = 0) {
		super(x, y);
		this.z = new NumberData(z);
	}

	get value() {
		return this;
	}

	clone() {
		let point = new Vector3Data();
		point.copy(this);
		return point;
	}

	copy(point) {
		super.copy(point);
		this.z.copy(point.z);
	}

	serialize() {
		let obj = super.serialize();
		obj.z = this.z.value;
		return obj;
	}

	deserialize(data) {
		super.deserialize(data);
		this.z.value = data.z;
	}

}