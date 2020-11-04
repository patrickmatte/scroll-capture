import EventHandler from "../components/EventHandler";

export function onDirective(component) {
    const removedAttributes = [];
    for (let i = 0; i < component.element.attributes.length; i++) {
        const attribute = component.element.attributes[i];
        if (attribute.name.indexOf("on:") != -1) {
            const type = attribute.name.split("on:")[1];
            const callback = new Function("event", attribute.value).bind(component);
            component.attributes[attribute.name] = new EventHandler(component.element, type, callback);
            removedAttributes.push(attribute.name);
        }
    }
    removedAttributes.map((attributeName) => {
        component.element.removeAttribute(attributeName);
    });
}
