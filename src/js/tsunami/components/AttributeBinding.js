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
    
    static bindComponentAttributes(component, scope) {
        let element = component.element;
        for (let i = 0; i < element.attributes.length; i++) {
            let attribute = element.attributes[i];
            let name = attribute.name;
            let expression = attribute.value;
            if (expression.indexOf("`") != -1) {
                let attributeBinding = new AttributeBinding(element, name, expression, scope);
                component.attributes[name] = attributeBinding;
            }
        }
    }
}
