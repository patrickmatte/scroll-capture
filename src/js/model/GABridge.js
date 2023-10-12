export function sendTrackEventMessage(category, action, label = "") {
    chrome.runtime.sendMessage({ type: "scrollCaptureTrackEvent", category, action, label });
}

export function sendTrackPageMessage(path) {
    chrome.runtime.sendMessage({ type: "scrollCaptureTrackPage", path });
}