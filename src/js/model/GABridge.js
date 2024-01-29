export function sendTrackEventMessage(category, params) {
  const msg = { type: 'scrollCaptureTrackEvent', category, params };
  if (params) msg.params = params;
  chrome.runtime.sendMessage(msg);
}

export function sendTrackPageMessage(path) {
  chrome.runtime.sendMessage({ type: 'scrollCaptureTrackPage', path });
}
