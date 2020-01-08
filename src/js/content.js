import Actions from "./model/Actions";

let actions = new Actions();

// chrome.runtime.onMessage.addListener((message, callback) => {
// 	if (message == "startActions") {
// 		start();
// 	}
// });
//

window.startActions = function(json) {
	console.log("window.startActions");
	let object = JSON.parse(json);
	actions.deserialize(object);
	actions.selectedIndex.value = 0;
	triggerAction();
};

// console.log("content.js", window.startActions);

function triggerAction() {
	let action = actions.selectedItem.value;
	if(action) {
		let promise = action.trigger();
		promise.then(actionComplete);
	} else {
		allComplete();
	}
}

function actionComplete() {
	actions.selectedIndex.value = actions.selectedIndex.value + 1;
	if(actions.selectedIndex.value < actions.value.length) {
		triggerAction();
	} else {
		allComplete();
	}
}

function allComplete() {
	console.log("done!");
}

