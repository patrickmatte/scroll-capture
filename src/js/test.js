import App from "./app";
import * as tsunami from "./tsunami/tsunami";
import SpacersView from "./view/SpacersView";
import ArrayData from "./tsunami/data/ArrayData";

export default class Test extends App {

	constructor() {
		super();

		this.spacers = new ArrayData();
		for(let i = 0; i < 10; i++) {
			let spacer = {};
			this.spacers.push(spacer);
		}

		tsunami.define("spacers-view", SpacersView);

		tsunami.applyDirectives(document.body, this);
	}

}

export let test = new Test();
