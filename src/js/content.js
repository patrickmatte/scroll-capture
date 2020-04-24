import Main from "./main";

if(!window.main) window.main = new Main(document.body);
window.main.router.location = "default";

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
// 	switch(msg.txt) {
// 		case "scrollCaptureBrowserAction":
// 			this.router.location = main.startLocation;
// 			break;
// 	}
// });
