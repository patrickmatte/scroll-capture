import * as tsunami from "./tsunami";
import UIComponent from "./components/UIComponent";
import UIButton from "./components/UIButton";
import UIList from "./components/UIList";
import UIInput from "./components/UIInput";
import UISelect from "./components/UISelect";
import UIText from "./components/UIText";
import UINumber from "./components/UINumber";
import UIScrollPane from "./components/UIScrollPane";
import UIMedia from "./components/UIMedia";
import UIToggle from "./components/UIToggle";
import Clock, {clock} from "./animation/Clock";

export default class App extends UIComponent {

	constructor(element) {
		super(element);
		
		clock.addEventListener(Clock.TICK, this.clockTick.bind(this));
		clock.start();

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
