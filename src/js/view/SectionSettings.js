import Section from "./Section";
import { app } from "../main";

export default class SectionSettings extends Section {
    
    constructor(element) {
        super(element);
   }

    showDelayComplete() {
        let promise = super.showDelayComplete();

        this.router.redirect("default", () => { return this.path });

        app.save();

        return promise;
    }

}