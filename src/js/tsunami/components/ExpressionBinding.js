import EventHandler from "./EventHandler";
import Data from "../data/Data";
import { hasValue } from "../utils/validation";

export default class ExpressionBinding {

    constructor(setValue, expression, scope, debug) {
        this.setValue = setValue;

        this.changeEventHandlers = [];

        let getValue = new Function("scope", "return " + expression).bind(scope);

        let dataChangeHandler = (event) => {
            this.setValue(getValue(scope));
        }

        let expressionChunks = expression;

        let operators = "+/*-[](){}!?%$=:;`";
        for(let i = 0; i < operators.length; i++) {
            let char = operators.charAt(i);
            expressionChunks = expressionChunks.split(char).join(" ");
        }
        let chunks = expressionChunks.split(" ");
        let filteredChunks = chunks.filter((chunk) => {
            return hasValue(chunk) && chunk.indexOf("'") == -1 && chunk.indexOf('"') == -1;
        });

        filteredChunks.map((chunk, i) => {
            let slugs = chunk.split(".");
            let target = scope;
            let type = slugs.pop();
            if(slugs.length > 0) {
                target = new Function("scope", "return " + slugs.join(".")).bind(scope)(target);
            }
            if(target instanceof EventTarget && target[type] != undefined) {
                // console.log("expression", expression);
                let eventHandler = new EventHandler(target, type, dataChangeHandler);
                this.changeEventHandlers.push(eventHandler);
            }
        });

        let val = getValue(scope);
        this.setValue(val);
    }

    destroy() {
        this.setValue(null);
        this.setValue = null;
        for (let i = 0; i < this.changeEventHandlers.length; i++) {
            let changeEventHandler = this.changeEventHandlers[i];
            changeEventHandler.destroy();
        }
        this.changeEventHandlers = [];
   }

}