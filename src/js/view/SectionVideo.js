import Section from "./Section";
import { app } from "../main";

export default class SectionVideo extends Section {

    constructor(element) {
        super(element);
        this.iframe = this.element.querySelector("iframe");
        this.iframe.src = chrome.extension.getURL('video-recording.html');

        chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
            switch (msg.txt) {
                case "scrollCaptureVideoHeight":
                    this.iframe.style.height = msg.height + "px";
                    break;
            }
        });
    }

    showDelayComplete() {
        let promise = super.showDelayComplete();
        app.sendMessage({ txt: "scrollCaptureShowVideo" });
        return promise;
    }

    hideComplete() {
        app.sendMessage({ txt:"scrollCaptureUnloadVideo"});
        return super.hideComplete();
    }

}