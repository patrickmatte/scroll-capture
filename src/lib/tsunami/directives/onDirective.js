import EventHandler from "../components/EventHandler";
import { safeEval } from "../tsunami";

export function onDirective(component) {
    const removedAttributes = [];
    for (let i = 0; i < component.element.attributes.length; i++) {
        const attribute = component.element.attributes[i];
        if (attribute.name.indexOf("on:") != -1) {
            const type = attribute.name.split("on:")[1];
            // const callback = new Function("event", attribute.value).bind(component);
            const callback = function() {
                const attributeSplit = attribute.value.split("(");
                const methodPath = attributeSplit[0];
                let method = safeEval(component, methodPath);
                if (methodPath.indexOf(".") != -1) {
                    const methodBindPathArray = methodPath.split(".");
                    methodBindPathArray.pop();
                    const methodBindTarget = safeEval(component, methodBindPathArray.join("."));
                    method = method.bind(methodBindTarget);
                }
                const argumentPath = attributeSplit[1].split(")")[0];
                let argument;
                if(argumentPath) {
                    argument = safeEval(component, argumentPath);
                }
                if(argument) {
                    return method(argument);
                } else {
                    return method();
                }
            }
            component.attributes[attribute.name] = new EventHandler(component.element, type, callback);
            removedAttributes.push(attribute.name);
        }
    }
    removedAttributes.map((attributeName) => {
        component.element.removeAttribute(attributeName);
    });
}
