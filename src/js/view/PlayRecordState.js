import PlayState from "./PlayState";
import { app } from "../main";
import ActionWait from "../model/ActionWait";
import { awaitTimeout } from "../tsunami/await";

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
        let promise = awaitTimeout(250).then(() => {
            chrome.runtime.sendMessage({ txt: "scrollCaptureStartRecording"});
            return super.show();
        });
        // this.keepAliveTimeout = setInterval(() => {
        //     chrome.runtime.sendMessage({ txt: "scrollCaptureKeepAlive" });
        // }, 1000 * 10);
        return promise;
    }

    allComplete() {
        if (!this.isPlaying) return;
        this.stopTheRecording();
        super.allComplete();
    }

    stopTheRecording() {
        // clearInterval(this.keepAliveTimeout);
        chrome.runtime.sendMessage({ txt: "scrollCaptureStopRecording" });
        chrome.runtime.sendMessage({ txt: "scrollCaptureUpdateVideo" });
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