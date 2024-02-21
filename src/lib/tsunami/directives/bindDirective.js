import Bind from '../data/Bind';
import ExpressionBind from '../data/ExpressionBind';

export function bindDirective(component, debug = false) {
  const removedAttributes = [];
  for (let i = 0; i < component.element.attributes.length; i++) {
    const attribute = component.element.attributes[i];
    if (attribute.name.indexOf('bind:') != -1) {
      const propertyName = attribute.name.split('bind:')[1];
      component.attributes[attribute.name] = new ExpressionBind(propertyName, component, attribute.value, component, debug);
      removedAttributes.push(attribute.name);
    }
  }
  removedAttributes.forEach((attributeName) => {
    component.element.removeAttribute(attributeName);
  });
}
