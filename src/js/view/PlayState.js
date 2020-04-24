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
        
        app.startLocation = this.startLocation;

        app.save();
        app.actions.selectedIndex.value = 0;
        return awaitTimeout(250).then(() => this.triggerAction());
    }

    triggerAction() {
        if (!this.isPlaying) return;
        let action = app.actions.selectedItem.value;
        if (action) {
            let promise = action.triggerDelay();
            promise.then(() => this.actionComplete());
        } else {
            this.allComplete();
        }
    }

    actionComplete() {
        if (!this.isPlaying) return;
        if (app.actions.selectedIndex.value < (app.actions.value.length - 1)) {
            app.actions.selectedIndex.value = (app.actions.selectedIndex.value + 1);
            this.triggerAction();
        } else {
            this.allComplete();
        }
    }

    allComplete() {
        if (!this.isPlaying) return;
        this.isPlaying = false;
        this.router.location = this.startLocation;
    }

    hide() {
        this.isPlaying = false;
        return super.hide();
    }

}