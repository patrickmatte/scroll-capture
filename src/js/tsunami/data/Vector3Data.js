import NumberData from "./NumberData";
import Vector2Data from "./Vector2Data";

export default class Vector3Data extends Vector2Data {

	constructor(x = 0, y = 0, z = 0) {
		super(x, y);
		this.z = new NumberData(z);
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

}