import NumberData from "./NumberData";

export default class Vector2Data {

	constructor(x = 0, y = 0) {
		this.x = new NumberData(x);
		this.y = new NumberData(y);
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

}