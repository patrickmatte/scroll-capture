export default class Scope {

	constructor(item, parent = null, index = NaN, length = NaN) {
		this.item = item;
		this.parent = parent;
		this.index = index;
		if(!isNaN(index)) {
			this.index1 = index + 1;
		}
		this.length = length;
	}

}