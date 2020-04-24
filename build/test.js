console.log("test.js", window.test);
if (!window.test) {
    window.test = "test";
} else {
    window.test += "1";
}
chrome.runtime.sendMessage({ txt: window.test });
