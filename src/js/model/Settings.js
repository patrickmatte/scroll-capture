import Vector2Data from "../tsunami/data/Vector2Data";
import NumberData from "../tsunami/data/NumberData";
import StringData from "../tsunami/data/StringData";
import ArrayData from "../tsunami/data/ArrayData";
import BooleanData from "../tsunami/data/BooleanData";
import Data from "../tsunami/data/Data";
import { app } from "../main";

export default class Settings {

    constructor() {

        this.darkModeChangeHandler = this.darkModeChangeHandler.bind(this);

        this.position = new Vector2Data(50, 50);

        this.videoBitsPerSecond = new StringData(8);
        this.videoCodecs = new ArrayData("vp8", "vp9", "h264");
        this.videoCodecs.selectedItem.value = this.videoCodecs.value[0];

        this.audioBitsPerSecond = new StringData(128);
        this.audioCodecs = new ArrayData("opus");
        this.audioCodecs.selectedItem.value = this.audioCodecs.value[0];

        this.darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

        this.isColorThemeLight = new BooleanData();
        this.isColorThemeLight.addEventListener(Data.CHANGE, (event) => {
            let msg = { txt: "scrollCaptureColorTheme", isColorThemeLight: event.data };
            chrome.runtime.sendMessage(msg);
        });

        this.colorThemes = new ArrayData("Dark", "Light", "Auto");
        this.colorThemes.selectedItem.value = "Dark";
        this.switchColorTheme();
        this.colorThemes.selectedItem.addEventListener(Data.CHANGE, ()=> {
            this.switchColorTheme();
        });
    }

    switchColorTheme() {
        let colorTheme = this.colorThemes.selectedItem.value;
        switch (colorTheme) {
            case "Dark":
            case "Light":
                this.darkModeMatchMedia.removeEventListener('change', this.darkModeChangeHandler);
                this.isColorThemeLight.value = (colorTheme == "Light");
                break;
            default:
                this.darkModeMatchMedia.addEventListener('change', this.darkModeChangeHandler);
                this.darkModeChangeHandler();
                break;
        }
    }

    darkModeChangeHandler() {
        let isDarkMode = this.darkModeMatchMedia.matches;
        this.isColorThemeLight.value = !isDarkMode;
    }

    serialize() {
        return {
            position: this.position.serialize(),
            videoBitsPerSecond: this.videoBitsPerSecond.serialize(),
            videoCodec: this.videoCodecs.selectedItem.serialize(),
            audioBitsPerSecond: this.audioBitsPerSecond.serialize(),
            audioCodec: this.audioCodecs.selectedItem.serialize(),
            colorThemes: this.colorThemes.selectedItem.value
        };
    }

    deserialize(obj) {
        this.position.deserialize(obj.position);
        this.videoBitsPerSecond.deserialize(obj.videoBitsPerSecond);
        this.videoCodecs.selectedItem.deserialize(obj.videoCodec);
        this.audioBitsPerSecond.deserialize(obj.audioBitsPerSecond);
        this.audioCodecs.selectedItem.deserialize(obj.audioCodec);
        if (obj.hasOwnProperty("colorThemes")) {
            this.colorThemes.selectedItem.value = obj.colorThemes;
        }
    }

}