import { importTemplate, define } from "../tsunami/tsunami";
import App from "../tsunami/App";
import ScrollCapture from "./ScrollCapture";
import { loadStyle } from "../tsunami/load/loadStyle";
import Data from "../tsunami/data/Data";
import RouterButton from "./RouterButton";
import { app } from "../main";

export default class AppView extends App {

    constructor(scope) {
        super(document.body);
        
        this.scope = app.model;
        this.scrollCapture = importTemplate(ScrollCapture.template, app.model).component;
        this.appendChild(this.scrollCapture.element);

        app.model.showCaptureIcon.addEventListener(Data.CHANGE, (event) => {
            this.element.setAttribute("is-capturing", event.data);
        });
    }

    load() {
        let contentCSS = chrome.runtime.getURL("content.css");
        let contentCSSPromise = loadStyle(contentCSS);
        let fontawesomeCSS = chrome.runtime.getURL("fontawesome.css");
        let fontawesomeCSSPromise = loadStyle(fontawesomeCSS);
        return Promise.all([contentCSSPromise, fontawesomeCSSPromise]);
    }

}

define("router-button", RouterButton);
define("scroll-capture", ScrollCapture);
