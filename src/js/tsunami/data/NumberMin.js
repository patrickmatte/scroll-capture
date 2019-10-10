import DataModifier from "./DataModifier";

export default class NumberMin extends DataModifier {

	constructor(maxValue) {
		super();
		this.minValue = maxValue;
	}

	modify(value) {
		return Math.max(value, this.minValue);
	}

}