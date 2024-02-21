import ExpressionOn from '../data/ExpressionOn';

export function onDirective(component, debug = false) {
  const removedAttributes = [];
  for (let i = 0; i < component.element.attributes.length; i++) {
    const attribute = component.element.attributes[i];
    if (attribute.name.indexOf('on:') != -1) {
      const type = attribute.name.split('on:')[1];
      component.attributes[attribute.name] = new ExpressionOn(attribute.value, component, component.element, type, debug);
      removedAttributes.push(attribute.name);
    }
  }
  removedAttributes.forEach((attributeName) => {
    component.element.removeAttribute(attributeName);
  });
}
