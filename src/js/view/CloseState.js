import Branch from "../tsunami/Branch";
import { app } from "../main";

export default class CloseState extends Branch {

    constructor() {
        super();
    }

    show() {
        app.save();
    }

}