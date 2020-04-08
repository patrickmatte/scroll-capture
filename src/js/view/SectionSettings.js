import Section from "./Section";
import { app } from "../main";

export default class SectionSettings extends Section {
    
    constructor(element) {
        super(element);
    }

    hideComplete() {
        app.save();
        return super.hideComplete();
    }

}