import Expression from "../data/Expression";
import { transformLiterals } from "../utils/transformLiterals";

export function attributeDirective(component) {
    let element = component.element;
    for (let i = 0; i < element.attributes.length; i++) {
        let attribute = element.attributes[i];
        let attributeValue = attribute.value.split("{").join("${");
        if (attributeValue.indexOf("${") != -1) {
            const callback = (value) => {
                component.setAttribute(attribute.name, value);
            }
            component.attributes[attribute.name] = new Expression( transformLiterals("`" + attributeValue + "`"), component, callback);
        }
    }
}