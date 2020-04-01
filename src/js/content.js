import Main from "./main";

let main;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	switch(msg.txt) {
		case "scrollCaptureScenario":
			if (!main) {
				main = new Main(document.body);
			} else {
				main.router.location = "scrollCapture/scenario";
			}
			break;
	}
});
