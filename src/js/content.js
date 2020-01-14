import Main from "./main";


let main;
// main = new Main(document.body);
// main.init();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if(msg.txt === "execute") {
		if(!main) {
			main = new Main(document.body);
			main.init();
		} else {
			main.show();
		}
	}
});

