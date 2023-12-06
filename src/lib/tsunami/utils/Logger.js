export default class Logger {

	static log() {
		let string = "";
		for(let i = 0; i < arguments.length; i++) {
			string += arguments[i].toString() + " ";
		}
		console.log(string);
	}

}