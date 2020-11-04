import Bind from "../data/Bind";

export function bindDirective(component) {
    const removedAttributes = [];
    for (let i = 0; i < component.element.attributes.length; i++) {
        const attribute = component.element.attributes[i];
        if (attribute.name.indexOf("bind:") != -1) {
            const propertyName = attribute.name.split("bind:")[1];
            component.attributes[attribute.name] = new Bind(component, "this." + propertyName, component, attribute.value);
            removedAttributes.push(attribute.name);
        }
    }
    removedAttributes.map((attributeName) => {
        component.element.removeAttribute(attributeName);
    });
}