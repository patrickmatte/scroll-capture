export default class Scope {

	constructor(data, parent = null, index = NaN, length = NaN) {
		this.data = data;
		this.parent = parent;
		this.index = index;
		if(!isNaN(index)) {
			this.index1 = index + 1;
		}
		this.length = length;
	}

	get root() {
		let root = this;
		let scope = this;
		while(scope) {
			scope = scope.parent;
			if(scope) {
				root = scope;
			}
		}
		return root;
	}

	toString() {
		return "Scope" + " " + this.parent;
	}

}