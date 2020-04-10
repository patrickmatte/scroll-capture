import UIComponent from "../tsunami/components/UIComponent";
import SectionVideo from "./SectionVideo";
import SectionScenario from "./SectionScenario";
import * as tsunami from "../tsunami/tsunami";
import Style from "../tsunami/components/Style";
import SectionSettings from "./SectionSettings";

export default class Sections extends UIComponent {

    constructor(element) {
        super(element);

        this.style = new Style(this.element.style);

    }

}

tsunami.define("sc-scenario", SectionScenario);
tsunami.define("sc-video", SectionVideo);
tsunami.define("sc-settings", SectionSettings);