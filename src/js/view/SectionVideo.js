import Section from "./Section";
// import { localToGlobal } from "../tsunami/window";
// import { app } from "../main";
// import Point from "../tsunami/geom/Point";

export default class SectionVideo extends Section {

    constructor(element) {
        super(element);
        this.tabId = "video";
        this.iframe = this.element.querySelector("iframe");

        chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
            switch (msg.txt) {
                case "scrollCaptureVideoHeigth":
                    this.iframe.style.height = msg.height + "px";
                    this.dispatchResizeEvent();
                    break;
            }
        });
    }

    showDelayComplete() {
        let promise = super.showDelayComplete();
        this.iframe.src = chrome.extension.getURL('video-recording.html');
        return promise;
    }

    hideComplete() {
        let promise = super.hideComplete();
        this.iframe.src = "";
        return promise;
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