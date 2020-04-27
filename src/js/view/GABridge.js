export function sendTrackEventMessage(category, action, label = "") {
    chrome.runtime.sendMessage({ txt: "scrollCaptureTrackEvent", category, action, label });
}

export function sendTrackPageMessage(path) {
    chrome.runtime.sendMessage({ txt: "scrollCaptureTrackPage", path });
}