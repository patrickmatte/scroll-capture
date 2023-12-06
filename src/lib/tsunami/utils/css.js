(function() {

	var c = tsunami.css = {};
	
	c.getRule = function(ruleName, deleteFlag) {
		if (document.styleSheets) {
			for (var i = 0; i < document.styleSheets.length; i++) {
				var styleSheet = document.styleSheets[i];
				var rules;
				try {
					rules = styleSheet.cssRules || styleSheet.rules;
				} catch(e) {

				}
				if (rules) {
					for (var j = 0; j < rules.length; j++) {
						var cssRule = rules[j];
						if (cssRule instanceof CSSStyleRule) {
							if (cssRule.selectorText == ruleName) {
								if (deleteFlag == 'delete') {
									if (styleSheet.cssRules) {
										styleSheet.deleteRule(j);
									} else {
										styleSheet.removeRule(j);
									}
									return true;
								} else {
									return cssRule;
								}
							}
						}
					}
				}
			}
		}
		return false;
	};

	c.killRule = function(ruleName) {
		return tsunami.css.getRule(ruleName,'delete');
	};

	c.addRule = function(ruleName) {
		if (document.styleSheets) {
			if (!tsunami.css.getRule(ruleName)) {
				if (document.styleSheets[0].addRule) {
					document.styleSheets[0].addRule(ruleName, null,0);
				} else {
					document.styleSheets[0].insertRule(ruleName+' { }', 0);
				}
			}
		}
		return tsunami.css.getRule(ruleName);
	};

}());