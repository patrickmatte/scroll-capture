import DataModifier from "./DataModifier";

export default class NumberMax extends DataModifier {

	constructor(maxValue) {
		super();
		this.maxValue = maxValue;
	}

	modify(value) {
		return Math.min(value, this.maxValue);
	}

}