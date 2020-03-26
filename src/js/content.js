import Main from "./main";

let main;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	console.log("chrome.runtime.onMessage", msg);
	switch(msg.txt) {
		case "scrollCaptureScenario":
			if (!main) {
				main = new Main(document.body);
			} else {
				main.router.location = "scrollCapture/scenario";
			}
			break;
		case "scrollCaptureVideoHeigth":
			console.log("scrollCaptureVideoHeigth");
			console.log("scrollCaptureVideoHeigth main", main);
			console.log("scrollCaptureVideoHeigth main.scrollCapture", main.scrollCapture);
			console.log("scrollCaptureVideoHeigth main.scrollCapture.iframe", main.scrollCapture.iframe);
			main.scrollCapture.iframe.style.height = msg.height + "px";
			break;
	}
});
