import Action from "./Action";
import Point from "../tsunami/geom/Point";
import StringData from "../tsunami/data/StringData";
import ActionTween from "./ActionTween";

export default class ActionSwipe extends ActionTween {

	constructor() {
		super("ActionSwipe", "Swipe");
		this.startSelector = new StringData("body");
		this.endSelector = new StringData("body");
	}

}