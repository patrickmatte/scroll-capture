import ScrollCaptureSection from "./Section";
import { localToGlobal } from "../tsunami/window";
import { app } from "../main";
import Point from "../tsunami/geom/Point";

export default class SectionVideo extends ScrollCaptureSection {

    constructor(element) {
        super(element);
        this.iframe = this.element.querySelector("iframe");
        this.iframe.src = chrome.extension.getURL('video-recording.html');

        chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
            switch (msg.txt) {
                case "scrollCaptureVideoHeigth":
                    this.frameHeight = msg.height;
                    break;
            }
        });
    }

    set frameHeight(value) {
        this.iframe.style.height = value + "px";
    }

   // iframePositionUpdate() {
    //     this.iframe.style.right = app.scrollCapture.style.right + this.iframeOffset.x + "px";
    //     this.iframe.style.top = app.scrollCapture.style.top + this.iframeOffset.y + "px";
    // }

    // windowResize(windowSize) {
    //     super.windowResize(windowSize);
    //     this.iframe.style.width = this.iframeContainer.offsetWidth + "px";
    //     this.iframeOffset = localToGlobal(this.iframeContainer, app.scrollCapture.element);
    // }

    // showDelayComplete() {
    //     app.scrollCapture.windowContent.component.appendChild(this.element);
    //     this.iframePositionUpdate();
    //     document.body.appendChild(this.iframe);
    //     return super.showDelayComplete();
    // }

    // hideComplete() {
    //     document.body.removeChild(this.iframe);
    //     app.scrollCapture.windowContent.component.removeChild(this.element);
    //     return super.hideComplete();
    // }

}