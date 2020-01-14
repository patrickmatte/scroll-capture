import UIComponent from "../tsunami/components/UIComponent";

export default class MyCanvas extends UIComponent {

	constructor(element) {
		super(element);
		this.mousedownHandler = this.mousedownHandler.bind(this);
		this.mousemoveHandler = this.mousemoveHandler.bind(this);
		this.mouseupHandler = this.mouseupHandler.bind(this);
		this.canvas = this.element.querySelector("canvas");
		this.canvas.addEventListener("mousedown", this.mousedownHandler);
		this.context = this.canvas.getContext("2d");
		this.calculateGlobalPosition = true;

		this.button = this.element.querySelector("button");
		this.button.addEventListener("click", ()=> {
			this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
		})
	}

	mousedownHandler(event) {
		document.body.addEventListener("mousemove", this.mousemoveHandler);
		document.body.addEventListener("mouseup", this.mouseupHandler);
		this.draw(event);
	}

	mousemoveHandler(event) {
		this.draw(event);
	}

	draw(event) {
		let eventPoint = this.getTouchPoint(event);
		let point = eventPoint.subtract(this.globalRectangle.position);
		let context = this.context;
		context.beginPath();
		context.arc(point.x, point.y, 5, 0, 2 * Math.PI, false);
		context.closePath();
		context.fillStyle = 'white';
		context.fill();
	}

	mouseupHandler(event) {
		document.body.removeEventListener("mousemove", this.mousemoveHandler);
		document.body.removeEventListener("mouseup", this.mouseupHandler);
	}

	clearCanvas() {

	}

}