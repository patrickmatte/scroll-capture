import Expression from "../data/Expression";

export function setDirective(component, attr = "set:") {
    const removedAttributes = [];
    for (let i = 0; i < component.element.attributes.length; i++) {
        const attribute = component.element.attributes[i];
        // console.log(i, "attribute.value", attribute.value);
        if (attribute.name.indexOf(attr) != -1) {
            const propertyName = attribute.name.split(attr)[1];
            const callback = (value) => {
                component[propertyName] = value;
            }
            // console.log("*********** setDirective attribute.value", attribute.value);
            component.attributes[attribute.name] = new Expression(attribute.value, component, callback);
            removedAttributes.push(attribute.name);
        }
    }
    removedAttributes.map((attributeName) => {
        component.element.removeAttribute(attributeName);
    });
}
