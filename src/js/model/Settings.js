import Vector2Data from "../tsunami/data/Vector2Data";
import StringData from "../tsunami/data/StringData";
import ArrayData from "../tsunami/data/ArrayData";
import BooleanData from "../tsunami/data/BooleanData";
import Data from "../tsunami/data/Data";
import { app } from "../main";
import { sendTrackEventMessage } from "./GABridge";
import Throttle from "../tsunami/utils/Throttle";
import NumberData from "../tsunami/data/NumberData";

export default class Settings {

    constructor() {
        this.darkModeChangeHandler = this.darkModeChangeHandler.bind(this);

        this.position = new Vector2Data(50, 50);
        this.devicePixelRatio = window.devicePixelRatio || 1;

        this.windowSizeChangeHandler = this.windowSizeChangeHandler.bind(this);
        this.windowResizeHandler = this.windowResizeHandler.bind(this);

        this.windowSize = new Vector2Data(window.innerWidth, window.innerHeight);
        this.windowSize.addEventListener(Data.CHANGE, this.windowSizeChangeHandler);

        window.addEventListener("resize", this.windowResizeHandler);

        this.format = new ArrayData("webm", "x-matroska");
        this.format.selectedItem.value = this.format.value[0];
        this.format.selectedItem.addEventListener(Data.CHANGE, () => {
            sendTrackEventMessage("settings", "format", this.format.selectedItem.value);
        });

        this.videoBitsPerSecondThrottle = new Throttle(() => {
            sendTrackEventMessage("settings", "videoBitsPerSecond", this.videoBitsPerSecond.value);
        }, 1000);
        this.videoBitsPerSecond = new NumberData(24);
        this.videoBitsPerSecond.addEventListener(Data.CHANGE, this.videoBitsPerSecondThrottle.throttle);
        this.videoCodecs = new ArrayData("av1", "avc1", "h264", "vp8", "vp9");
        this.videoCodecs.selectedItem.value = this.videoCodecs.value[0];
        this.videoCodecs.selectedItem.addEventListener(Data.CHANGE, () => {
            sendTrackEventMessage("settings", "videoCodec", this.videoCodecs.selectedItem.value);
       });

        this.audioBitsPerSecondThrottle = new Throttle(() => {
            sendTrackEventMessage("settings", "audioBitsPerSecond", this.audioBitsPerSecond.value);
        }, 1000);
        this.audioBitsPerSecond = new NumberData(256);
        this.audioBitsPerSecond.addEventListener(Data.CHANGE, this.audioBitsPerSecondThrottle.throttle);
        this.audioCodecs = new ArrayData("opus", "pcm");
        this.audioCodecs.selectedItem.value = this.audioCodecs.value[0];
        this.audioCodecs.selectedItem.addEventListener(Data.CHANGE, () => {
            sendTrackEventMessage("settings", "audioCodec", this.audioCodecs.selectedItem.value);
        });

        this.darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

        this.isColorThemeLight = new BooleanData();
        this.isColorThemeLight.addEventListener(Data.CHANGE, (event) => {
            let msg = { type: "scrollCaptureColorTheme", isColorThemeLight: event.data };
            app.model.sendMessage(msg);
        });

        this.colorThemes = new ArrayData("Dark", "Light", "Auto");
        this.colorThemes.selectedItem.value = "Dark";
        this.switchColorTheme();
        this.colorThemes.selectedItem.addEventListener(Data.CHANGE, ()=> {
            sendTrackEventMessage("settings", "colorTheme", this.colorThemes.selectedItem.value);
            this.switchColorTheme();
        });

        this.pixelRatioThrottle = new Throttle(() => {
            sendTrackEventMessage("settings", "pixelRatio", this.pixelRatio.value);
        }, 1000);
        this.pixelRatio = new NumberData(this.devicePixelRatio);
        this.pixelRatio.addEventListener(Data.CHANGE, this.pixelRatioThrottle.throttle);

    }

    windowResizeHandler() {
        this.windowSize.removeEventListener(Data.CHANGE, this.windowSizeChangeHandler);
        this.windowSize.x.value = window.innerWidth;
        this.windowSize.y.value = window.innerHeight;
        this.windowSize.addEventListener(Data.CHANGE, this.windowSizeChangeHandler);
    }

    windowSizeChangeHandler() {
        console.log('windowSizeChangeHandler', this.windowSize);
        app.model.sendMessage({ type: "scrollCaptureResizeWindow", width: this.windowSize.x.value, height: this.windowSize.y.value });
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
            format: this.format.selectedItem.serialize(),
            videoBitsPerSecond: this.videoBitsPerSecond.serialize(),
            videoCodec: this.videoCodecs.selectedItem.serialize(),
            audioBitsPerSecond: this.audioBitsPerSecond.serialize(),
            audioCodec: this.audioCodecs.selectedItem.serialize(),
            colorThemes: this.colorThemes.selectedItem.value,
            pixelRatio: this.pixelRatio.serialize()
        };
    }

    deserialize(data) {
        if (!data) return;
        if(data.hasOwnProperty("position")) this.position.deserialize(data.position);
        if(data.hasOwnProperty("format")) this.format.selectedItem.deserialize(data.format);
        if(data.hasOwnProperty("videoBitsPerSecond")) this.videoBitsPerSecond.deserialize(data.videoBitsPerSecond);
        if(data.hasOwnProperty("videoCodec")) this.videoCodecs.selectedItem.deserialize(data.videoCodec);
        if(data.hasOwnProperty("audioBitsPerSecond")) this.audioBitsPerSecond.deserialize(data.audioBitsPerSecond);
        if(data.hasOwnProperty("audioCodec")) this.audioCodecs.selectedItem.deserialize(data.audioCodec);
        if(data.hasOwnProperty("colorThemes")) this.colorThemes.selectedItem.value = data.colorThemes;
        if(data.hasOwnProperty("pixelRatio")) this.pixelRatio.deserialize(data.pixelRatio);
    }

    getSettingsForRecording() {
        return {
            format:this.format.selectedItem.value,
            videoBitsPerSecond:this.videoBitsPerSecond.value,
            audioBitsPerSecond:this.audioBitsPerSecond.value,
            videoCodec:this.videoCodecs.selectedItem.value,
            audioCodec:this.audioCodecs.selectedItem.value,
            pixelRatio:this.pixelRatio.value,
            tabWidth: this.windowSize.x.value,
            tagHeight: this.windowSize.y.value
        }
    }

}