import Vector2Data from "../tsunami/data/Vector2Data";
import NumberData from "../tsunami/data/NumberData";

export default class Settings {

    constructor() {
        this.position = new Vector2Data();
        this.audioBitsPerSecond = new NumberData(128);
        this.videoBitsPerSecond = new NumberData(8);
    }

    serialize() {
        let obj = {
            position: this.position.serialize()
        }
        return obj;
    }

    deserialize(obj) {
       if (obj.position) this.position.deserialize(obj.position);
    }

}