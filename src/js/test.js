import App from "./tsunami/App";
import * as tsunami from "./tsunami/tsunami";
import SpacersView from "./view/SpacersView";
import ArrayData from "./tsunami/data/ArrayData";
import MyCanvas from "./view/MyCanvas";
import {isTouch} from "./tsunami/window";
import Point from "./tsunami/geom/Point";

export default class Test extends App {

	constructor(element) {
		super(element);

		this.spacers = new ArrayData();

		for(let i = 0; i < 10; i++) {
			let spacer = {};
			this.spacers.push(spacer);
		}

		tsunami.applyDirectives(this.element, this);

		this.myCanvas = this.element.querySelector("[is='my-canvas']").component;

		this.specialButton = this.element.querySelector(".special-button");
		this.specialButton.addEventListener("click", (event) => {
			let touch = event;
			if (isTouch) {
				touch = event.touches[0];
			}
			let point = new Point(touch.pageX, touch.pageY);
			console.log("specialButton click", point);
		});

		this.resizeHandler();
	}

	clearCanvas() {
		this.myCanvas.clearCanvas();
	}

}

tsunami.define("spacers-view", SpacersView);
tsunami.define("my-canvas", MyCanvas);

let test = new Test(document.body);
