import Branch from "../tsunami/Branch";
import { app } from "../main";
import { awaitTimeout } from "../tsunami/await";

export default class PlayState extends Branch {

    constructor() {
        super();
        this.isPlaying = false;
        this.startLocation = "scroll-capture/scenario";
    }

    show() {
        this.isPlaying = true;

        document.documentElement.setAttribute("data-sc-cursor", app.model.settings.showCursor.value);
        document.documentElement.setAttribute("data-sc-scrollbars", app.model.settings.showScrollbars.value);

        this.router.redirect("default", () => { return this.startLocation });

        app.model.save();
        app.model.actions.selectedIndex.value = 0;
        return awaitTimeout(0.25).then(() => this.triggerAction());
    }

    triggerAction() {
        if (!this.isPlaying) return;
        let action = app.model.actions.selectedItem.value;
        if (action) {
            let promise = action.triggerDelay();
            promise.then(() => this.actionComplete());
        } else {
            // this.allComplete();
            awaitTimeout(0.5).then(() => this.allComplete());
        }
    }

    actionComplete() {
        if (!this.isPlaying) return;
        if (app.model.actions.selectedIndex.value < (app.model.actions.value.length - 1)) {
            app.model.actions.selectedIndex.value = (app.model.actions.selectedIndex.value + 1);
            this.triggerAction();
        } else {
            // this.allComplete();
            awaitTimeout(0.5).then(() => this.allComplete());
        }
    }

    allComplete() {
        if (!this.isPlaying) return;
        this.isPlaying = false;
        this.router.location = this.startLocation;
    }

    hide() {
        document.documentElement.removeAttribute("data-sc-cursor");
        document.documentElement.removeAttribute("data-sc-scrollbars");
        this.isPlaying = false;
        return super.hide();
    }

}