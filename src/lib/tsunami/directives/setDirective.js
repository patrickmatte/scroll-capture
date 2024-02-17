import ExpressionTest from '../data/ExpressionTest';

export function setDirective(component, debug = false) {
  const removedAttributes = [];
  for (let i = 0; i < component.element.attributes.length; i++) {
    const attribute = component.element.attributes[i];
    if (attribute.name.indexOf('set:') != -1) {
      const propertyName = attribute.name.split('set:')[1];
      const callback = (value) => {
        component[propertyName] = value;
      };
      component.attributes[attribute.name] = new ExpressionTest(attribute.value, component, callback);
      removedAttributes.push(attribute.name);
    }
  }
  removedAttributes.map((attributeName) => {
    component.element.removeAttribute(attributeName);
  });
}
