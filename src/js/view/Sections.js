import UIComponent from "../tsunami/components/UIComponent";
import SectionVideo from "./SectionVideo";
import SectionScenario from "./SectionScenario";
import * as tsunami from "../tsunami/tsunami";
import Style from "../tsunami/components/Style";

export default class Sections extends UIComponent {

    constructor(element) {
        super(element);

        this.style = new Style(this.element.style);

        this.scenario = this.element.querySelector("sc-scenario").component;
        this.removeChild(this.scenario.element);

        this.video = this.element.querySelector("sc-video").component;
        this.removeChild(this.video.element);
    }

}

tsunami.define("sc-scenario", SectionScenario);
tsunami.define("sc-video", SectionVideo);