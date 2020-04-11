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

        this.videoBitsPerSecond = new NumberData(8);
        this.videoCodecs = new ArrayData("vp8", "vp9", "h264");
        this.videoCodecs.selectedItem.value = this.videoCodecs.value[0];

        this.audioBitsPerSecond = new NumberData(128);
        this.audioCodecs = new ArrayData("opus");
        this.audioCodecs.selectedItem.value = this.audioCodecs.value[0];

        this.darkModeMathMedia = window.matchMedia('(prefers-color-scheme: dark)');

        this.isColorThemeLight = new BooleanData();

        this.colorThemes = new ArrayData("Auto", "Dark", "Light");
        this.colorThemes.selectedItem.value = "Auto";
        this.switchColorTheme();
        this.colorThemes.selectedItem.addEventListener(Data.CHANGE, ()=> {
            this.switchColorTheme();
        });

        this.isColorThemeLight.addEventListener(Data.CHANGE, (event) => {
            let msg = { txt: "scrollCaptureColorTheme", isColorThemeLight: event.data };
            chrome.runtime.sendMessage(msg);
        });
    }

    switchColorTheme() {
        let colorTheme = this.colorThemes.selectedItem.value
        switch (colorTheme) {
            case "Auto":
                this.darkModeMathMedia.addEventListener('change', this.darkModeChangeHandler);
                this.darkModeChangeHandler();
                break;
            case "Dark":
            case "Light":
                this.darkModeMathMedia.removeEventListener('change', this.darkModeChangeHandler);
                this.isColorThemeLight.value = (colorTheme == "Light");
                break;
        }
    }

    darkModeChangeHandler() {
        let isDarkMode = this.darkModeMathMedia.matches;
        this.isColorThemeLight.value = !isDarkMode;
    }

    serialize() {
        return {
            position: this.position.serialize(),
            videoBitsPerSecond: this.videoBitsPerSecond.serialize(),
            videoCodec: this.videoCodecs.selectedItem.serialize(),
            audioBitsPerSecond: this.audioBitsPerSecond.serialize(),
            audioCodec: this.audioCodecs.selectedItem.serialize(),
            isColorThemeLight: this.isColorThemeLight.value,
            colorThemes: this.colorThemes.selectedItem.value
        };
    }

    deserialize(obj) {
        this.position.deserialize(obj.position);
        this.videoBitsPerSecond.deserialize(obj.videoBitsPerSecond);
        this.videoCodecs.selectedItem.deserialize(obj.videoCodec);
        this.audioBitsPerSecond.deserialize(obj.audioBitsPerSecond);
        this.audioCodecs.selectedItem.deserialize(obj.audioCodec);
        if (obj.hasOwnProperty("isColorThemeLight")) {
            this.isColorThemeLight.value = obj.isColorThemeLight;
        }
        if (obj.hasOwnProperty("colorThemes")) {
            this.colorThemes.selectedItem.value = obj.colorThemes;
        }
    }

}