import PlayState from "./PlayState";
import { app } from "../main";
import ActionWait from "../model/ActionWait";
import { awaitTimeout } from "../tsunami/await";
import { sendTrackEventMessage } from "./GABridge";

export default class PlayRecordState extends PlayState {

    constructor() {
        super();
        this.startLocation = "scroll-capture/video";
    }

    show() {
        sendTrackEventMessage("record-actions-length", app.actions.value.length.toString());
        if(app.actions.value.length < 1) {
            this.timeout = new ActionWait();
            this.timeout.delay.value = 60 * 5;
            app.actions.addAction(this.timeout);
        }
        let promise = awaitTimeout(250).then(() => {
            app.sendMessage({ txt: "scrollCaptureStartRecording"});
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
        app.sendMessage({ txt: "scrollCaptureStopRecording" });
        app.sendMessage({ txt: "scrollCaptureUpdateVideo" });
    }

    hide() {
        window.removeEventListener("onbeforeunload", this.onBeforeUnloadHandler);
        if (this.isPlaying) this.stopTheRecording();
        if (this.timeout) {
            app.actions.removeAction(this.timeout);
            this.timeout = null;
        }
        return super.hide();
    }

}
