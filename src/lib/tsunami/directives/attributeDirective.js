import ExpressionData from '../data/ExpressionData';

export function attributeDirective(component, debug = false) {
  let element = component.element;
  for (let i = 0; i < element.attributes.length; i++) {
    let attribute = element.attributes[i];
    if (attribute.name.indexOf('set:') != -1) continue;
    if (attribute.name.indexOf('bind:') != -1) continue;
    let attributeValue = attribute.value.split('{').join('${');
    if (attributeValue.indexOf('${') != -1) {
      component.attributes[attribute.name] = attributeBind(component, attribute.name, attributeValue, component);
    }
  }
}

export function attributeBind(component, attributeName, expression, scope, debug) {
  const callback = (value) => {
    component.setAttribute(attributeName, value);
  };
  return new ExpressionData('`' + expression + '`', scope, callback, debug);
}
