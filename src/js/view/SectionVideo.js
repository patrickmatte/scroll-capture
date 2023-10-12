import Section from "./Section";
import { app } from "../main";

export default class SectionVideo extends Section {

    constructor(element) {
        super(element);
        this.iframe = this.element.querySelector("iframe");
        this.iframe.src = chrome.runtime.getURL('video-recording.html');

        chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
            switch (msg.type) {
                case "scrollCaptureVideoHeight":
                    this.iframe.style.height = msg.height + "px";
                    break;
            }
        });
    }

    showDelayComplete() {
        let promise = super.showDelayComplete();
        app.model.sendMessage({ type: "scrollCaptureShowVideo" });
        return promise;
    }

    hideComplete() {
        app.model.sendMessage({ type:"scrollCaptureUnloadVideo"});
        return super.hideComplete();
    }

}