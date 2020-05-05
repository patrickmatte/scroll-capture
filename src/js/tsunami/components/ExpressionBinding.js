import EventHandler from "./EventHandler";
import Data from "../data/Data";

export default class ExpressionBinding {

    constructor(setValue, expression, scope, debug = false) {
        this.setValue = setValue;

        this.changeEventHandlers = [];

        let getValue;

        if (expression.indexOf("[[") != -1) {
            let dataChangeHandler = (event) => {
                this.setValue(getValue(scope));
            }
            let attributeSetProp = {};
            let chunks = expression.split("[[");
            for (let i = 0; i < chunks.length; i++) {
                let chunk = chunks[i];
                if (chunk.indexOf("]]") != -1) {
                    let chunkArray = chunk.split("]]");
                    let chunkExpression = chunkArray[0];
                    let data = new Function("scope", "return " + chunkExpression).bind(scope)(scope);
                    if (data instanceof Data) {
                        let changeEventHandler = new EventHandler(data, Data.CHANGE, dataChangeHandler);
                        this.changeEventHandlers.push(changeEventHandler);
                    }
                    chunks[i] = chunkArray.join("");
                }
            }
            expression = chunks.join("");
        }
        
        getValue = new Function("scope", "return " + expression).bind(scope);

        this.setValue(getValue(scope));
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