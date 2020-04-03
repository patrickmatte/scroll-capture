import Vector2Data from "../tsunami/data/Vector2Data";

export default class Settings {

    constructor() {
        this.position = new Vector2Data();
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