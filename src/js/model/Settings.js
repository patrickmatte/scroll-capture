import Vector2Data from "../tsunami/data/Vector2Data";
import NumberData from "../tsunami/data/NumberData";
import StringData from "../tsunami/data/StringData";
import ArrayData from "../tsunami/data/ArrayData";
import BooleanData from "../tsunami/data/BooleanData";

export default class Settings {

    constructor() {
        this.position = new Vector2Data(50, 50);

        this.videoBitsPerSecond = new NumberData(8);
        this.videoCodecs = new ArrayData("vp8", "vp9", "h264");
        this.videoCodecs.selectedItem.value = this.videoCodecs.value[0];

        this.audioBitsPerSecond = new NumberData(128);
        this.audioCodecs = new ArrayData("opus");
        this.audioCodecs.selectedItem.value = this.audioCodecs.value[0];

        this.theme = new BooleanData();
    }

    serialize() {
        return {
            position: this.position.serialize(),
            videoBitsPerSecond: this.videoBitsPerSecond.serialize(),
            videoCodec: this.videoCodecs.selectedItem.serialize(),
            audioBitsPerSecond: this.audioBitsPerSecond.serialize(),
            audioCodec: this.audioCodecs.selectedItem.serialize(),
        };
    }

    deserialize(obj) {
        this.position.deserialize(obj.position);
        this.videoBitsPerSecond.deserialize(obj.videoBitsPerSecond);
        this.videoCodecs.selectedItem.deserialize(obj.videoCodec);
        this.audioBitsPerSecond.deserialize(obj.audioBitsPerSecond);
        this.audioCodecs.selectedItem.deserialize(obj.audioCodec);
    }

}