import EventHandler from "./EventHandler";
import Data from "../data/Data";

export default class ExpressionBinding {

    constructor(setValue, expression, scope) {
        this.setValue = setValue;

        this.changeEventHandlers = [];

        let getValue;

        if (expression.indexOf("[[") != -1) {
            let dataChangeHandler = (event) => {
                this.setValue(getValue());
            }
            let attributeSetProp = {};
            let chunks = expression.split("[[");
            for (let i = 0; i < chunks.length; i++) {
                let chunk = chunks[i];
                if (chunk.indexOf("]]") != -1) {
                    let chunkArray = chunk.split("]]");
                    let chunkExpression = chunkArray[0];
                    let data = new Function("return " + chunkExpression).bind(scope)();
                    if (data instanceof Data) {
                        let changeEventHandler = new EventHandler(data, Data.CHANGE, dataChangeHandler);
                        this.changeEventHandlers.push(changeEventHandler);
                    }
                    chunks[i] = chunkArray.join("");
                }
            }
            expression = chunks.join("");
        }

        getValue = new Function("return " + expression).bind(scope);

        this.setValue(getValue());
    }

    destroy() {
        this.setValue(null);
        for (let i = 0; i < this.changeEventHandlers.length; i++) {
            let changeEventHandler = this.changeEventHandlers[i];
            changeEventHandler.destroy();
        }
        this.changeEventHandlers = [];
   }

}