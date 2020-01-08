export function evalProperty(path, scope, debug) {
	if (debug) {
		console.log("$$$$$$ evalProperty", "path", path, "scope", scope);
	}
	if(path == ".") {
		return scope;
	}
	let array = path.split(".");
	let object = scope;
	if (debug) {
		console.log("array", array);
		console.log("object", object);
	}
	while(array.length > 0) {
		let name = array.shift();
		let arr = name.split("[");
		for (let i = 0; i < arr.length; i++) {
			let prop = arr[i].split("]")[0];
			object = object[prop];
			if (debug) {
				console.log("prop", prop);
				console.log("object", object);
			}
			if (object == null) {
				console.log("Error! The reference " + prop + " in " + path + " is undefined");
			}
		}
	}
	return object;
}

let classes = {};

export function define(name, classReference) {
	classes[name] = classReference;
}

// export function registerClass(classReference, name) {
// 	classes[name] = classReference;
// }

export function decorateElement (element, scope) {
	let dataWrapper = element.getAttribute("data-wrapper");
	if (dataWrapper) {
		let wrappers = dataWrapper.split(" ");
		for (let i = 0; i < wrappers.length; i++) {
			let wrapper = wrappers[i];
			if (wrapper) {
				let method = evalProperty(wrapper, window);
				if (method) {
					method(element);
					if ("createdCallback" in element) {
						element.createdCallback();
					}
				}
			}
		}
	}
}

export function createComponent (element, scope) {
	let className = element.nodeName.toLowerCase();
	let classReference = classes[className];
	if (!classReference) {
		className = element.getAttribute("is");
		if (className) {
			classReference = classes[className];
		}
	}
	if (classReference) {
		let component = new classReference(element);
		// element.component = component;
	}
}

export function setScope(element, scope) {
	if (element.component) {
		element.component.scope = scope;
	}
}

export let directives = [createComponent, setScope];

export function applyDirectives(element, scope) {
	let array = [element];
	let elements = getAllObjects(element, array);
	for (let j = 0; j < directives.length; j++) {
		let directive = directives[j];
		for (let i = elements.length - 1; i > -1; i--) {
			//for (let i = 0; i < elements.length; i++) {
			let el = elements[i];
			directive(el, scope);
		}
	}
}

let factories = [];
for(let i = 0; i < 5; i++) {
	factories.push(document.createElement("div"));
}
//
// export function importTemplate(template, scope) {
// 	if (window.renderTemplate) {
// 		template = window.renderTemplate(template, scope);
// 	}
// 	let factory = factories.shift();
// 	factories.push(factory);
// 	factory.innerHTML = template;
// 	let child = factory.children.item(0);
// 	// if (window.CustomElements) {
// 	// 	CustomElements.upgradeSubtree(child);
// 	// }
// 	applyDirectives(child, scope);
// 	return child;
// }

export function importTemplate(template, scope) {
	let child;
	if (window.renderTemplate) {
		template = window.renderTemplate(template, scope);
	}
	let factory = factories.shift();
	factories.push(factory);
	factory.innerHTML = template;
	if(factory.children.length > 0) {
		child = factory.children.item(0);
	}
	// scope.element = child;
	applyDirectives(child, scope);
	return child;
}

export function destroyElement(element) {
	if (element) {
		let elements = getAllObjects(element);
		for (let i = elements.length - 1; i > -1; i--) {
			let el = elements[i];
			if (el.component) {
				if (el.component.destroy) {
					try {
						el.component.destroy();
					} catch(e) {
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
				} catch(e) {
				}
			}
			element.component = null;
		}

	}
}

export function destroyElements(elements) {
	for (let i = 0; i < elements.length; i++) {
		let element = elements[i];
		destroyElement(element);
	}
}

export function getAllObjects(parent, array) {
	if (!array) {
		array = [];
	}
	if(parent.children) {
		for (let i = 0; i < parent.children.length; i++) {
			let child = parent.children.item(i);
			switch(child.nodeName) {
				case "#text":
				case "#comment":
				case "BR":
				case "TEMPLATE":
				case "SCRIPT":
					break;
				default:
					array.push(child);
					getAllObjects(child, array);
					break;
			}
		}
	}
	return array;
}