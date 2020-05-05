import { supportsTemplateLiterals } from "../tsunami";
import ExpressionBinding from "./ExpressionBinding";

export default class AttributeBinding extends ExpressionBinding {

    constructor(element, attributeName, expression, scope) {
        if (expression.indexOf("${") == -1) {
            expression = expression.split("`").join("");
        }
        let setValue = (value) => {
            element.setAttribute(attributeName, value);
        }
        super(setValue, expression, scope, true);
    }

    static create(element, attributeName, expression, scope) {
        let instance;
        if (expression.indexOf("`") != -1) {
            instance = new AttributeBinding(element, attributeName, expression, scope);
        }
        return instance
    }

}
