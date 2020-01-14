import NumberData from "../tsunami/data/NumberData";
import ArrayData from "../tsunami/data/ArrayData";
import ActionTween from "./ActionTween";
import StringData from "../tsunami/data/StringData";
import Point from "../tsunami/geom/Point";

export default class ActionScroll extends ActionTween {

	constructor(target = "window", units = "%", x = 0, y = 0, duration = 1, delay = 0) {
		super(0, 0, 0, 0, duration, delay);
		this.type = "ActionScroll";
		this.name = "Scroll";
		this.target = new StringData(target);
		this.unitX = new NumberData(x);
		this.unitY = new NumberData(y);
		this.units = new ArrayData("%", "px");
		this.units.selectedItem.value = units;
	}

	clone() {
		let action = new ActionScroll();
		action.copy(this);
		return action;
	}

	copy(action) {
		super.copy(action);
		this.target.value = action.target.value;
		this.unitX.value = action.unitX.value;
		this.unitY.value = action.unitY.value;
		this.units.selectedItem.value = action.units.selectedItem.value;
	}

	trigger() {
		switch (this.target.value) {
			case "window":
				this.startX.value = window.scrollX;
				this.startY.value = window.scrollY;
				break;
			default:
				let element = document.querySelector(this.target.value);
				this.startX.value = element.scrollLeft;
				this.startY.value = element.scrollTop;
				break;
		}
		if(this.units.selectedItem.value == "px") {
			this.endX.copy(this.unitX);
			this.endY.copy(this.unitY);
		}
		if(this.units.selectedItem.value == "%") {
			let maxScroll = {x:0, y:0};
			switch (this.target.value) {
				case "window":
					maxScroll.x = document.body.offsetWidth - window.innerWidth;
					maxScroll.y = document.body.offsetHeight - window.innerHeight;
					break;
				default:
					let element = document.querySelector(this.target.value);
					maxScroll.x = element.scrollWidth - element.clientWidth;
					maxScroll.y = element.scrollHeight - element.clientHeight;
					break;
			}
			this.endX.value = Math.round(this.unitX.value / 100 * maxScroll.x);
			this.endY.value = Math.round(this.unitY.value / 100 * maxScroll.y);
		}
		return super.trigger();
	}

	tweenUpdateHandler() {
		switch (this.target.value) {
			case "window":
				window.scroll(this.pos.x, this.pos.y);
				break;
			default:
				let element = document.querySelector(this.target.value);
				element.scrollLeft = this.pos.x;
				element.scrollTop = this.pos.y;
				break;
		}
	}

	serialize() {
		let data = super.serialize();
		data.target = this.target.value;
		data.unitX = this.unitX.value;
		data.unitY = this.unitY.value;
		data.units = this.units.selectedItem.value;
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.target.value = data.target;
		this.unitX.value = data.unitX;
		this.unitY.value = data.unitY;
		this.units.selectedItem.value = data.units;
	}

	capture() {
		this.isCapturing.value = true;
		setTimeout(()=> {
			let scroll = new Point();
			let maxScroll = new Point();
			switch (this.target.value) {
				case "window":
					scroll.x = window.scrollX;
					scroll.y = window.scrollY;
					maxScroll.x = document.body.offsetWidth - window.innerWidth;
					maxScroll.y = document.body.offsetHeight - window.innerHeight;
					break;
				default:
					let element = document.querySelector(this.target.value);
					scroll.x = element.scrollLeft;
					scroll.y = element.scrollTop;
					maxScroll.x = element.scrollWidth - element.clientWidth;
					maxScroll.y = element.scrollHeight - element.clientHeight;
					break;
			}
			let unit = new Point();
			switch(this.units.selectedItem.value) {
				case "px":
					unit.x = scroll.x;
					unit.y = scroll.y;
					break;
				case "%":
					unit.x = Math.round(scroll.x / maxScroll.x * 100);
					unit.y = Math.round(scroll.y / maxScroll.y * 100);
					break;
			}
			if(isNaN(unit.x)) unit.x = 0;
			if(isNaN(unit.y)) unit.y = 0;

			this.unitX.value = unit.x;
			this.unitY.value = unit.y;
			this.isCapturing.value = false;
		}, 33);
	}

}