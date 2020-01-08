import App from "./app";
import * as tsunami from "./tsunami/tsunami";
import SpacersView from "./view/SpacersView";
import ArrayData from "./tsunami/data/ArrayData";
import MyCanvas from "./view/MyCanvas";

export default class Test extends App {

	constructor(element) {
		super(element);

		this.spacers = new ArrayData();

		for(let i = 0; i < 10; i++) {
			let spacer = {};
			this.spacers.push(spacer);
		}

	}

}

tsunami.define("spacers-view", SpacersView);
tsunami.define("my-canvas", MyCanvas);

let test = new Test(document.body);
test.init();
