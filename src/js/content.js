import Main from "./main";


let main;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if(msg.txt === "execute") {
		if(!main) {
			main = new Main(document.body);
		} else {
			main.show();
		}
	}
});

