import ExpressionSet from '../data/ExpressionSet';

export function setDirective(component, debug = false) {
  const removedAttributes = [];
  for (let i = 0; i < component.element.attributes.length; i++) {
    const attribute = component.element.attributes[i];
    if (attribute.name.indexOf('set:') != -1) {
      const propertyName = attribute.name.split('set:')[1];
      component.attributes[attribute.name] = new ExpressionSet(propertyName, component, attribute.value, component, debug);
      removedAttributes.push(attribute.name);
    }
  }
  removedAttributes.map((attributeName) => {
    component.element.removeAttribute(attributeName);
  });
}
