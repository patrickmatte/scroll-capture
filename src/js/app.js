import * as tsunami from "./tsunami/tsunami";
import UIComponent from "./tsunami/components/UIComponent";
import UIButton from "./tsunami/components/UIButton";
import UIList from "./tsunami/components/UIList";
import UIInput from "./tsunami/components/UIInput";
import UISelect from "./tsunami/components/UISelect";
import UIText from "./tsunami/components/UIText";
import UINumber from "./tsunami/components/UINumber";
import UIScrollPane from "./tsunami/components/UIScrollPane";
import UIMedia from "./tsunami/components/UIMedia";
import UIToggle from "./tsunami/components/UIToggle";
import Clock, {clock} from "./tsunami/animation/Clock";

export default class App extends UIComponent {

	constructor(element) {
		super(element);
	}

	init(debug) {
		if(debug) {
			console.log("App.init");
		}

		clock.addEventListener(Clock.TICK, this.clockTick.bind(this));

		window.addEventListener("resize", this.resizeHandler.bind(this));
		this.resizeHandler();
	}

	clockTick(event) {
		let animationData = {
			time: clock.time
		};

		this.animationFrame(animationData);
	}

	resizeHandler(event) {
		let rectangle = this.getRect();

		rectangle.orientation = rectangle.width > rectangle.height ? "landscape" : "portrait";

		if (rectangle.orientation != this.windowSize.orientation) {
			this.orientationChange(rectangle.orientation);
		}

		this.windowResize(rectangle);
	}

}

tsunami.define("ui-component", UIComponent);
tsunami.define("ui-button", UIButton);
tsunami.define("ui-list", UIList);
tsunami.define("ui-input", UIInput);
tsunami.define("ui-select", UISelect);
tsunami.define("ui-text", UIText);
tsunami.define("ui-number", UINumber);
tsunami.define("ui-scroll-pane", UIScrollPane);
tsunami.define("ui-media", UIMedia);
tsunami.define("ui-toggle", UIToggle);
