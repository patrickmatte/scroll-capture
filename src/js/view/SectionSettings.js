import Section from "./Section";
import { app } from "../main";

export default class SectionSettings extends Section {
    
    constructor(element) {
        super(element);
        this.tabId = "settings";
   }

    hideComplete() {
        app.save();
        return super.hideComplete();
    }

}