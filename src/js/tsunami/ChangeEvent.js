import BaseEvent from "./events";

export default class ChangeEvent extends BaseEvent {

    constructor(type, data, eventInit) {
        super(type, data, eventInit);
    }

}