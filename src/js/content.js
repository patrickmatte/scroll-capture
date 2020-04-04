import Main from "./main";

let main;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if (!main) {
		main = new Main(document.body);
	}
	switch(msg.txt) {
		case "scrollCaptureBrowserAction":
			main.router.location = main.startLocation;
			break;
		case "scrollCaptureLocation":
			main.router.location = msg.location;
			break;
	}
});
