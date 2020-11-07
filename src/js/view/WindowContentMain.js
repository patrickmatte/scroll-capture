import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import SectionSettings from "./SectionSettings";
import SectionVideo from "./SectionVideo";
import SectionScenario from "./SectionScenario";

export default class WindowContentMain extends UIComponent {

    constructor(element) {
        super(element);
        
        this.scenario = this.element.querySelector("[is='sc-scenario']").component;
        this.video = this.element.querySelector("[is='sc-video']").component;
        this.settings = this.element.querySelector("[is='sc-settings']").component;
    }

}

tsunami.define("sc-scenario", SectionScenario);
tsunami.define("sc-video", SectionVideo);
tsunami.define("sc-settings", SectionSettings);
