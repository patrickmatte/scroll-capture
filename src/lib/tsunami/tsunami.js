import { parseExpression } from './estree/estree';

const classes = {};

export function safeEval(context, expression, debug = false) {
  if (context == null || expression == null) return null;
  let value = null;
  let node;
  try {
    node = parseExpression(expression, null, debug);
  } catch (error) {
    console.log('Cannot parse ', expression);
  }
  try {
    value = node.evaluate(context);
  } catch (error) {
    console.log('Cannot evaluate ', expression);
  }
  return value;
}

export function getProperty(path, scope, debug = false) {
  if (debug) {
    console.log('getProperty', 'scope', scope, 'path', path);
  }
  let value = null;
  try {
    value = safeEval(scope, path);
  } catch (e) {}
  if (debug) console.log('getProperty value', value);
  return value;
}

// export function safeEval(context, expression, option = null) {
//   if (context == null || expression == null) return null;
//   let value = null;
//   try {
//     value = evaluate(context, expression);
//   } catch (e) {
//     console.log('sc_error expression =', expression);
//     // console.log('safeEval context=', context);
//     // console.log(e);
//   }
//   return value;
// }

// export function getProperty(path, scope, debug = false) {
//   if (debug) {
//     console.log('getProperty path', path, 'scope', scope);
//   }
//   let value = null;
//   try {
//     value = safeEval(scope, path);
//     // console.log("getProperty path=", path, 'scope=', scope, 'value=', value);
//   } catch (e) {
//     // continue regardless of error
//   }
//   if (debug) console.log('getProperty value', value);
//   return value;
// }

// export function getProperty(path, scope, debug = true) {
//   if (debug) console.log('getProperty path', path, 'scope', scope);
// 	var array = path.split(".");
// 	var object = scope;
// 	while(array.length > 0) {
// 		var name = array.shift();
// 		var arr = name.split("[");
// 		for (var i = 0; i < arr.length; i++) {
// 			var prop = arr[i].split("]")[0];
// 			object = object[prop];
// 			if (!object) {
// 				console.log("Error! The reference '" + path + "' is not valid in " + scope);
// 			}
// 		}
// 	}
// 	return object;
// };

export function define(name, classReference) {
  classes[name] = classReference;
}

// export function registerClass(classReference, name) {
// 	classes[name] = classReference;
// }

export function createComponent(element, scope) {
  let className = element.nodeName.toLowerCase();
  let classReference = classes[className];
  if (!classReference) {
    className = element.getAttribute('is');
    if (className) {
      classReference = classes[className];
    }
  }
  if (classReference) {
    const component = new classReference(element);
    element.component = component;
  }
}

export function setScope(element, scope) {
  if (element.component) {
    element.component.scope = scope;
  }
}

export const directives = [createComponent, setScope];

export function applyDirectives(element, scope) {
  const array = [element];
  const elements = getAllObjects(element, array);
  for (let j = 0; j < directives.length; j++) {
    const directive = directives[j];
    for (let i = elements.length - 1; i > -1; i--) {
      //for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      directive(el, scope);
    }
  }
}

const factories = [];
for (let i = 0; i < 5; i++) {
  factories.push(document.createElement('div'));
}
//
// export function importTemplate(template, scope) {
// 	if (window.renderTemplate) {
// 		template = window.renderTemplate(template, scope);
// 	}
// 	let factory = factories.shift();
// 	factories.push(factory);
// 	factory.innerHTML = template;
// 	let child = factory.children[0];
// 	// if (window.CustomElements) {
// 	// 	CustomElements.upgradeSubtree(child);
// 	// }
// 	applyDirectives(child, scope);
// 	return child;
// }

export function importTemplate(template, scope = {}, debug = false) {
  let child;
  if (window.renderTemplate) {
    template = window.renderTemplate(template, scope);
  }
  const factory = factories.shift();
  factories.push(factory);
  factory.innerHTML = template;
  if (factory.children.length > 0) {
    child = factory.children.item(0);
  }
  // scope.scopeElement = child;
  applyDirectives(child, scope);
  return child;
}

export function destroyElement(element) {
  if (element) {
    const elements = getAllObjects(element);
    for (let i = elements.length - 1; i > -1; i--) {
      const el = elements[i];
      if (el.component) {
        if (el.component.destroy) {
          try {
            el.component.destroy();
          } catch (e) {
            // continue regardless of error
          }
        }
        el.component = null;
      }
      // destroyElement(el);
    }
    element.innerHTML = null;
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
    if (element.component) {
      if (element.component.destroy) {
        try {
          element.component.destroy();
        } catch (e) {
          // continue regardless of error
        }
      }
      element.component = null;
    }
  }
}

export function destroyElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    destroyElement(element);
  }
}

export function getAllObjects(parent, array = [], omit = []) {
  if (parent.children) {
    for (let i = 0; i < parent.children.length; i++) {
      const child = parent.children.item(i);
      if (omit.indexOf(child) != -1) continue;
      switch (child.nodeName) {
        case '#text':
        case 'text':
        case '#comment':
        case 'BR':
        case 'TEMPLATE':
        case 'SCRIPT':
          break;
        default:
          array.push(child);
          getAllObjects(child, array, omit);
          break;
      }
    }
  }
  return array;
}
