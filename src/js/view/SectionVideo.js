import ScrollCaptureSection from "./Section";
import { localToGlobal } from "../tsunami/window";
import { app } from "../main";
import Point from "../tsunami/geom/Point";

export default class SectionVideo extends ScrollCaptureSection {

    constructor(element) {
        super(element);
        this.iframeContainer = this.element.querySelector(".sc-iframe-container");
        this.iframe = this.iframeContainer.querySelector("iframe");
        this.iframe.src = chrome.extension.getURL('video-recording.html');
        this.iframeContainer.removeChild(this.iframe);
        this.iframeOffset = new Point();
    }

    iframePositionUpdate() {
        this.iframe.style.right = app.scrollCapture.style.right + this.iframeOffset.x + "px";
        this.iframe.style.top = app.scrollCapture.style.top + this.iframeOffset.y + "px";
    }

    set contentHeight(value) {
        this.iframeContainer.style.height = value + "px";
        this.iframe.style.height = value + "px";
    }

    windowResize(windowSize) {
        super.windowResize(windowSize);
        this.iframe.style.width = this.iframeContainer.offsetWidth + "px";
        this.iframeOffset = localToGlobal(this.iframeContainer, app.scrollCapture.element);
    }

    showDelayComplete() {
        app.scrollCapture.windowContent.component.appendChild(this.element);
        this.iframePositionUpdate();
        document.body.appendChild(this.iframe);
        return super.showDelayComplete();
    }

    hideComplete() {
        document.body.removeChild(this.iframe);
        app.scrollCapture.windowContent.component.removeChild(this.element);
        return super.hideComplete();
    }

}