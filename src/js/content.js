import Actions from "./model/Actions";
import * as tsunami from "./tsunami/tsunami";
import ScreenCapturePro from "./view/ScreenCapturePro";
import Main from "./main";

// let actions = new Actions();
// actions.value = [
	// new ActionSwipe(),
	// new ActionWait(),
	// new ActionScroll("window", "px", 0, 500),
	// new ActionMouseEvent("click", ".spacer-1 button", 0, 0),
	// new ActionEval(),
	// new ActionScroll(".scrollpane", "%", 0, 100),
	// new ActionMouseEvent("click", ".scrollpane button", 0, 0),
// ];

// chrome.runtime.onMessage.addListener((message, callback) => {
// 	if (message == "startActions") {
// 		start();
// 	}
// });
//

let main;
// main = new Main(document.body);
// main.init();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if(msg.txt === "execute") {
		if(!main) {
			main = new Main(document.body);
			main.init();
		}
	}
});

window.startActions = function(json) {
	console.log("window.startActions");
	// let object = JSON.parse(json);
	// actions.deserialize(object);
	// actions.selectedIndex.value = 0;
	// triggerAction();
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

