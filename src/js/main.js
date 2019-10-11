import UIComponent from "./tsunami/components/UIComponent";
import {isTouch} from "./tsunami/window";
import RouterWithHistory from "./tsunami/RouterWithHistory";
import Router from "./tsunami/RouterWithHistory";
import Tween from "./tsunami/animation/Tween";
import Clock, {clock} from "./tsunami/animation/Clock";
import UIList from "./tsunami/components/UIList";
import UIInput from "./tsunami/components/UIInput";
import UIText from "./tsunami/components/UIText";
import UINumber from "./tsunami/components/UINumber";
import UIScrollpane from "./tsunami/components/UIScrollpane";
import UIImage from "./tsunami/components/UIImage";
import * as tsunami from "./tsunami/tsunami";
import Mustache from "mustache";
import {importTemplate} from "./tsunami/tsunami";
import {loadJSON} from "./tsunami/load";
import UIToggle from "./tsunami/components/UIToggle";
import Model, {model} from "./model/Model";
import ActionsView from "./view/ActionsView";
import {applyDirectives} from "./tsunami/tsunami";
import UISelect from "./tsunami/components/UISelect";
import ScreenCaptureScenario from "./view/ScreenCaptureScenario";
import SpacersView from "./view/SpacersView";
import UIButton from "./tsunami/components/UIButton";

export default class Main extends UIComponent {

	constructor(element) {
		super(element);

		this.doChildrenAnimationFrame = true;

		if(isTouch) {
			document.body.classList.add("is-touch");
		}

		// document.body.innerHTML = "";
		// document.body.classList.remove("hide-seo");

		Mustache.escape = function (string) {
			return string;
		};

		window.renderTemplate = function (template, scope) {
			return Mustache.render(template, scope);
		};

		// this.language.value = document.documentElement.getAttribute("lang") || "en";

		// this.router = new RouterWithHistory(this, window.location.origin + window.location.pathname, "?path=");
		// this.router.debug = true;
		// this.router.addEventListener(Router.COMPLETE, (event) => {
		// 	window.dispatchEvent(new Event("resize"));
		// });
		// this.router.addEventListener(Router.CHANGE, (event) => {
		// });

		// this.branches["*"] = new CategoryController();
		// this.branches["bezier"] = new BezierController();

		clock.addEventListener(Clock.TICK, this.clockTick.bind(this));

		this.screenCaptureScenario = importTemplate(ScreenCaptureScenario.template, model);
	}

	init() {
		let scenarioContainer = this;
		let scenarioContainerElement = this.element.querySelector(".screen-capture-scenario-container");
		if(scenarioContainerElement) {
			scenarioContainer = scenarioContainerElement.component;
		}
		scenarioContainer.doChildrenAnimationFrame = true;
		scenarioContainer.appendChild(this.screenCaptureScenario);

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
		// model.windowHeight.value = rectangle.height;

		rectangle.orientation = rectangle.width > rectangle.height ? "landscape" : "portrait";

		if (rectangle.orientation != this.windowSize.orientation) {
			this.orientationChange(rectangle.orientation);
		}

		let remFontSize = window.getComputedStyle(document.documentElement, null).getPropertyValue("font-size");
		rectangle.remScale = Number(remFontSize.split("px")[0]) / 10;

		// rectangle.maxScroll = document.body.offsetHeight - rectangle.height;

		// rectangle.assetSize = "large";
		// if (rectangle.width < 1280) {
		// 	rectangle.assetSize = "medium";
		// }
		// if (rectangle.width < 450) {
		// 	rectangle.assetSize = "small";
		// }
		// model.assetSize.value = rectangle.assetSize;

		this.windowResize(rectangle);
	}

	// load() {
		// let stage = importTemplate(stageTemplate, model);
		// this.stage = stage.component;
		// this.prependChild(this.stage.element);
	// }

}

tsunami.define("ui-component", UIComponent);
tsunami.define("ui-button", UIButton);
tsunami.define("ui-list", UIList);
tsunami.define("ui-input", UIInput);
tsunami.define("ui-select", UISelect);
tsunami.define("ui-text", UIText);
tsunami.define("ui-number", UINumber);
tsunami.define("ui-scrollpane", UIScrollpane);
tsunami.define("ui-image", UIImage);
tsunami.define("ui-toggle", UIToggle);
tsunami.define("main", Main);
tsunami.define("screen-capture-scenario", ScreenCaptureScenario);
tsunami.define("spacers-view", SpacersView);

applyDirectives(document.body, model);

document.body.component.init();