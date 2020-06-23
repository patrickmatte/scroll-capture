import ExpressionBinding from "./ExpressionBinding";
import { transformLiterals } from "../utils/transformLiterals";

export default class AttributeBinding extends ExpressionBinding {

    constructor(element, attributeName, expression, scope) {
        expression = transformLiterals(expression);
        let setValue = (value) => {
            element.setAttribute(attributeName, value);
        }
        super(setValue, expression, scope);
    }
    
}
