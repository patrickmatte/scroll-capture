import UIComponent from "../tsunami/components/UIComponent";
import Section from "./Section";
import SectionVideo from "./SectionVideo";
import * as tsunami from "../tsunami/tsunami";

export default class Sections extends UIComponent {

    constructor(element) {
        super(element);

        this.scenario = this.element.querySelector("sc-scenario").component;
        this.removeChild(this.scenario.element);

        this.video = this.element.querySelector("sc-video").component;
        this.removeChild(this.video.element);
    }

}

tsunami.define("sc-scenario", Section);
tsunami.define("sc-video", SectionVideo);