import { transformLiterals } from "../utils/transformLiterals";
import Expression from "../data/Expression";

export default class AttributeBinding extends Expression {

    constructor(element, attributeName, expression, scope) {
        const callback = (value) => {
            element.setAttribute(attributeName, value);
        }
        super(transformLiterals(expression), scope, callback);
    }
}
