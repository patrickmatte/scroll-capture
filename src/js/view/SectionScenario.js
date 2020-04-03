import Section from "./Section";
import SectionScenarioPlay from "./SectionScenarioPlay";
import SectionScenarioDefault from "./SectionScenarioDefault";
import SectionScenarioRecord from "./SectionScenarioRecord";

export default class SectionScenario extends Section {

    constructor(element) {
        super(element);
        this.branches["*"] = new SectionScenarioDefault();
        this.branches.play = new SectionScenarioPlay();
        this.branches.record = new SectionScenarioRecord();
    }

}