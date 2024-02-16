import Expression from '../data/Expression';

export function attributeDirective(component) {
  let element = component.element;
  for (let i = 0; i < element.attributes.length; i++) {
    let attribute = element.attributes[i];
    if (attribute.name.indexOf('set:') != -1) continue;
    if (attribute.name.indexOf('bind:') != -1) continue;
    let attributeValue = attribute.value.split('{').join('${');
    if (attributeValue.indexOf('${') != -1) {
      const callback = (value) => {
        component.setAttribute(attribute.name, value);
      };
      component.attributes[attribute.name] = new Expression('`' + attributeValue + '`', component, callback);
    }
  }
}
