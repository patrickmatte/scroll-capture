import Section from "./Section";

export default class SectionVideo extends Section {

    constructor(element) {
        super(element);
        this.tabDataId = "video";
        this.iframe = this.element.querySelector("iframe");
        this.iframe.src = chrome.extension.getURL('video-recording.html');

        chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
            switch (msg.txt) {
                case "scrollCaptureVideoHeigth":
                    this.iframe.style.height = msg.height + "px";
                    break;
            }
        });
    }

    hideComplete() {
        chrome.runtime.sendMessage({ txt:"scrollCaptureUnloadVideo"});
        return super.hideComplete();
    }

}