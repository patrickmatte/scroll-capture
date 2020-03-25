import Main from "./main";

let main;

function createUI() {
	if (!main) {
		main = new Main(document.body);
	} else {
		main.show();
	}
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	switch(msg.txt) {
		case "scrollCaptureCreateUI":
			createUI();
			break;
	}
});
