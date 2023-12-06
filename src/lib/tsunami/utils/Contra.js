export default class Contra extends EventTarget {

	constructor() {
		super();

		this.contra = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
		this.letterSequence = [];

		window.addEventListener("keyup", this.keyup.bind(this));
	}

	static get CODE() {
		return "contra-code";
	}

	keyup(event) {
		this.letterSequence.push(event.keyCode);
		if (this.letterSequence.length > this.contra.length) {
			this.letterSequence.shift();
		}
		var contraWord = this.contra.join("");
		var keyword = this.letterSequence.join("");
		var equal = (contraWord == keyword);
		if (equal) {
			this.dispatchEvent(new Event(Contra.CODE));
		}
	}

}