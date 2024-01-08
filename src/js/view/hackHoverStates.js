export function hackHoverStates() {
  for (var i in document.styleSheets) {
    let rules;
    try {
      rules = document.styleSheets[i].cssRules;
    } catch (e) {
      console.log(e);
    }
    if (rules) {
      for (var r in rules) {
        if (rules[r].cssText && rules[r].selectorText) {
          if (rules[r].selectorText.indexOf(':hover') > -1) {
            const array = rules[r].selectorText.split(',');
            const newArray = new Array();
            array.forEach((selector) => {
              newArray.push(selector);
              if (selector.indexOf(':hover') !== -1) {
                const newSelector = selector.split(':hover').join('.sc-hover');
                newArray.push(newSelector);
              }
              rules[r].selectorText = newArray.join(',');
            });
          }
        }
      }
    }
  }
}
