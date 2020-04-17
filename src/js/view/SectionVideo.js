import Section from "./Section";
import { app } from "../main";

export default class SectionVideo extends Section {

    constructor(element) {
        super(element);
        this.tabDataId = "video";
        this.iframe = this.element.querySelector("iframe");
        this.iframe.src = chrome.extension.getURL('video-recording.html?tabId=' + app.tabId);

        chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
            switch (msg.txt) {
                case "scrollCaptureVideoHeigth":
                    this.iframe.style.height = msg.height + "px";
                    break;
            }
        });
    }

}