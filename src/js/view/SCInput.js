import UIComponent from "../tsunami/components/UIComponent";
import { events } from "../tsunami/events";

export default class SCInput extends UIComponent {

    constructor(element) {
        super(element);
        this.input = this.element.querySelector("input");
        this.element.addEventListener(events.click, (event) => {
            if (this.input) {
                if (event.target != this.input) this.input.focus();
            }
        });
        this.element.addEventListener("dblclick", (event) => {
            if (this.input) {
                if (event.target != this.input) this.input.select();
            }
        });
    }

    

}