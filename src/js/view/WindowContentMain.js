import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import Sections from "./Sections";
import { app } from "../main";
import Point from "../tsunami/geom/Point";
import { localToGlobal } from "../tsunami/window";

export default class WindowContentMain extends UIComponent {

    constructor(element) {
        super(element);

        this.position = new Point();

        this.sections = this.element.querySelector("sc-sections").component;
        this.sections.element.addEventListener("ui-resize", (event) => {
            let height = this.sections.element.offsetHeight;
            this.element.style.height = height + "px";
       });

        this._children = [this.sections.element];
    }

    windowResize(windowSize) {
        super.windowResize(windowSize);
        this.sections.element.style.width = this.element.offsetWidth + "px";
        this.position = localToGlobal(this.element, app.scrollCapture.element);
    }

    get children() {
        return this._children;
    }

}

tsunami.define("sc-sections", Sections);
