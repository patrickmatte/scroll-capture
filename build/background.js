!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}({4:function(e,t,o){e.exports=o(7)},7:function(e,t,o){"use strict";var r,n,i,a;function c(e){e.data&&e.data.size>0&&a.push(e.data)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";chrome.browserAction.setIcon({path:{16:chrome.extension.getURL("assets/images/get_started16"+e+".png"),32:chrome.extension.getURL("assets/images/get_started32"+e+".png"),48:chrome.extension.getURL("assets/images/get_started48"+e+".png"),128:chrome.extension.getURL("assets/images/get_started128"+e+".png")}})}function d(e){n=!0;var t={audio:!0,video:!0,audioConstraints:{mandatory:{chromeMediaSource:"tab"}},videoConstraints:{mandatory:{chromeMediaSource:"tab",minWidth:e.width,maxWidth:e.width,minHeight:e.height,maxHeight:e.height,minFrameRate:30,maxFrameRate:60}}};chrome.tabCapture.capture(t,u)}function u(e){e?r=e:alert("Stream creation failed: "+chrome.runtime.lastError.message),a=[],chrome.storage.local.get(["json"],p)}function p(e){var t="vp8",o="opus",n=8,a=128;if(e.json){var s=JSON.parse(e.json);s.settings&&(t=s.settings.videoCodec||t,o=s.settings.audioCodec||o,a=s.settings.audioBitsPerSecond||a,n=s.settings.videoBitsPerSecond||n)}var d={mimeType:"video/webm;codecs="+t+","+o};MediaRecorder.isTypeSupported(d.mimeType)||(d={mimeType:"video/webm;codecs=vp9"},MediaRecorder.isTypeSupported(d.mimeType)||(d={mimeType:"video/webm;codecs=vp8"},MediaRecorder.isTypeSupported(d.mimeType)||(d={mimeType:"video/webm"},MediaRecorder.isTypeSupported(d.mimeType)||(d={mimeType:""})))),d.audioBitsPerSecond=1e3*a,d.videoBitsPerSecond=1e6*n;try{i=new MediaRecorder(r,d)}catch(e){return console.error("Exception while creating MediaRecorder:",e),void console.log("Exception while creating MediaRecorder: ".concat(JSON.stringify(e)))}i.ondataavailable=c,i.start(10)}function m(){s(),i&&i.stop();var e=new Blob(a,{type:"video/webm"});if(window.videoURL=window.URL.createObjectURL(e),r)for(var t=r.getTracks(),o=0;o<t.length;++o)t[o].stop();i=null,r=null,n=!1}o.r(t),chrome.runtime.onMessage.addListener((function(e,t,o){switch(e.txt){case"scrollCaptureStartRecording":e.tabId,s("_red"),chrome.tabs.get(window.tabId,d);break;case"scrollCaptureStopRecording":m();break;case"scrollCaptureTrackEvent":!function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=["_trackEvent",e,t];o&&r.push(o),window._gaq.push(r)}(e.category,e.action,e.label);break;case"scrollCaptureTrackPage":r=e.path,window._gaq.push(["_set","page",r]),window._gaq.push(["_trackPageview"])}var r})),function(e){console.log("initAnalytics",e),window._gaq=window._gaq||[],window._gaq.push(["_setAccount",e]),window._gaq.push(["_trackPageview"]);var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://ssl.google-analytics.com/ga.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)}("UA-161404627-2"),chrome.browserAction.onClicked.addListener((function(e){n&&m(),chrome.tabs.executeScript({file:"content.js"}),window.tabId=e.id}))}});