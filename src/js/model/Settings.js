import Vector2Data from "../tsunami/data/Vector2Data";
import StringData from "../tsunami/data/StringData";
import ArrayData from "../tsunami/data/ArrayData";
import BooleanData from "../tsunami/data/BooleanData";
import Data from "../tsunami/data/Data";
import { app } from "../main";
import { sendTrackEventMessage } from "../view/GABridge";
import Throttle from "../tsunami/utils/Throttle";
import NumberData from "../tsunami/data/NumberData";

export default class Settings {

    constructor() {

        this.darkModeChangeHandler = this.darkModeChangeHandler.bind(this);

        this.position = new Vector2Data(50, 50);

        this.videoBitsPerSecondThrottle = new Throttle(() => {
            sendTrackEventMessage("settings", "videoBitsPerSecond", this.videoBitsPerSecond.value);
        }, 1000);
        this.videoBitsPerSecondMin = 1;
        this.videoBitsPerSecondMax = 8;
        this.videoBitsPerSecond = new NumberData(8);
        this.videoBitsPerSecond.addEventListener(Data.CHANGE, this.videoBitsPerSecondThrottle.throttle);
        this.videoCodecs = new ArrayData("vp8", "vp9", "h264");
        this.videoCodecs.selectedItem.value = this.videoCodecs.value[0];
        this.videoCodecs.selectedItem.addEventListener(Data.CHANGE, () => {
            sendTrackEventMessage("settings", "videoCodec", this.videoCodecs.selectedItem.value);
       });

        this.audioBitsPerSecondThrottle = new Throttle(() => {
            sendTrackEventMessage("settings", "audioBitsPerSecond", this.audioBitsPerSecond.value);
        }, 1000);
        this.audioBitsPerSecond = new NumberData(128);
        this.audioBitsPerSecond.addEventListener(Data.CHANGE, this.audioBitsPerSecondThrottle.throttle);
        this.audioCodecs = new ArrayData("opus");
        this.audioCodecs.selectedItem.value = this.audioCodecs.value[0];
        this.audioCodecs.selectedItem.addEventListener(Data.CHANGE, () => {
            sendTrackEventMessage("settings", "audioCodec", this.audioCodecs.selectedItem.value);
        });

        this.darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

        this.isColorThemeLight = new BooleanData();
        this.isColorThemeLight.addEventListener(Data.CHANGE, (event) => {
            let msg = { txt: "scrollCaptureColorTheme", isColorThemeLight: event.data };
            app.sendMessage(msg);
        });

        this.colorThemes = new ArrayData("Dark", "Light", "Auto");
        this.colorThemes.selectedItem.value = "Dark";
        this.switchColorTheme();
        this.colorThemes.selectedItem.addEventListener(Data.CHANGE, ()=> {
            sendTrackEventMessage("settings", "colorTheme", this.colorThemes.selectedItem.value);
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

    deserialize(data) {
        if (!data) return;
        this.position.deserialize(data.position);
        this.videoBitsPerSecond.deserialize(data.videoBitsPerSecond);
        this.videoCodecs.selectedItem.deserialize(data.videoCodec);
        this.audioBitsPerSecond.deserialize(data.audioBitsPerSecond);
        this.audioCodecs.selectedItem.deserialize(data.audioCodec);
        if (data.hasOwnProperty("colorThemes")) {
            this.colorThemes.selectedItem.value = data.colorThemes;
        }
    }

}