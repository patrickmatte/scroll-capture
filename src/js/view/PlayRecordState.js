import PlayState from "./PlayState";

export default class PlayRecordState extends PlayState {

    constructor() {
        super();
        this.startLocation = "scroll-capture/video";
   }

    show() {
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
        if (this.isPlaying) this.stopTheRecording();
        return super.hide();
    }

}