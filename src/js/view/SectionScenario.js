import Section from "./Section";
import SectionScenarioPlay from "./SectionScenarioPlay";
import SectionScenarioDefault from "./SectionScenarioDefault";
import SectionScenarioRecord from "./SectionScenarioRecord";

export default class SectionScenario extends Section {

    constructor(element) {
        super(element);
        this.branches["default"] = new SectionScenarioDefault();
        this.defaultChild = "default";
        this.branches.play = new SectionScenarioPlay();
        this.branches.record = new SectionScenarioRecord();
        
    }

}