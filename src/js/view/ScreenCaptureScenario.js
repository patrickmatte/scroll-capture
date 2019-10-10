import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import StartButton from "./StartButton";
import ActionView from "./ActionView";

export default class ScreenCaptureScenario extends UIComponent {

	constructor(element) {
		super(element);
	}

}

tsunami.define("start-button", StartButton);
tsunami.define("action-view", ActionView);
