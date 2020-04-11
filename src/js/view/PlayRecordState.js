import PlayState from "./PlayState";
import { app } from "../main";
import ActionWait from "../model/ActionWait";

export default class PlayRecordState extends PlayState {

    constructor() {
        super();
        this.startLocation = "scroll-capture/video";
    }

    show() {
        if(app.actions.value.length < 1) {
            this.timeout = new ActionWait();
            this.timeout.delay.value = 60 * 5;
            app.actions.addAction(this.timeout);
        }
        let promise = super.show();
        chrome.runtime.sendMessage({ txt: "scrollCaptureStartRecording" });
        return promise;
    }

    allComplete() {
        if (!this.isPlaying) return;
        this.stopTheRecording();
        super.allComplete();
    }

    stopTheRecording() {
        chrome.runtime.sendMessage({ txt: "scrollCaptureStopRecording" });
    }

    hide() {
        window.removeEventListener("onbeforeunload", this.onBeforeUnloadHandler);
        if (this.isPlaying) this.stopTheRecording();
        if (this.timeout) {
            this.timeout.deleteAction();
            this.timeout = null;
        }
        return super.hide();
    }

}