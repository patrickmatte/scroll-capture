import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import Sections from "./Sections";

export default class WindowContentMain extends UIComponent {

    constructor(element) {
        super(element);

        this.sections = this.element.querySelector("sc-sections").component;
        this._children = [this.sections.element];
    }

    get children() {
        return this._children;
    }

}

tsunami.define("sc-sections", Sections);
