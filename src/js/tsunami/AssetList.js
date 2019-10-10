export default class AssetList {

	constructor(assets = []) {
		this.assets = assets;
	}

	get progress() {
		var progress = 0;
		var length = this.assets.length;
		for (var i = 0; i < this.assets.length; i++) {
			var promise = this.assets[i];
			if (promise.hasOwnProperty("progress")) {
				progress += promise.progress;
			} else {
				length--;
			}
		}
		if (length > 0) {
			progress = progress / length;
		} else {
			progress = 1;
		}
		return progress;
	}

	push(value) {
		this.assets.push(value);
		return value;
	}

}