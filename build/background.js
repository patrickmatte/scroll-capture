(()=>{"use strict";let e="<measurement_id>",t="<api_secret>";const a=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.debug=e}async getOrCreateClientId(){let{clientId:e}=await chrome.storage.local.get("clientId");return e||(e=self.crypto.randomUUID(),await chrome.storage.local.set({clientId:e})),e}async getOrCreateSessionId(){let{sessionData:e}=await chrome.storage.session.get("sessionData");const t=Date.now();if(e&&e.timestamp){(t-e.timestamp)/6e4>30?e=null:(e.timestamp=t,await chrome.storage.session.set({sessionData:e}))}return e||(e={session_id:t.toString(),timestamp:t.toString()},await chrome.storage.session.set({sessionData:e})),e.session_id}async fireEvent(a){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s.session_id||(s.session_id=await this.getOrCreateSessionId()),s.engagement_time_msec||(s.engagement_time_msec=100);try{const r=await fetch(`${this.debug?"https://www.google-analytics.com/debug/mp/collect":"https://www.google-analytics.com/mp/collect"}?measurement_id=${e}&api_secret=${t}`,{method:"POST",body:JSON.stringify({client_id:await this.getOrCreateClientId(),events:[{name:a,params:s}]})});if(!this.debug)return;console.log(await r.text())}catch(e){console.error("Google Analytics request failed with an exception",e)}}async firePageViewEvent(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.fireEvent("page_view",{page_title:e,page_location:t,...a})}async fireErrorEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.fireEvent("extension_error",{...e,...t})}};async function s(e){const t=await chrome.runtime.getContexts({});let a=!1;const s=t.find((e=>"OFFSCREEN_DOCUMENT"===e.contextType));s?a=s.documentUrl.endsWith("#recording"):await chrome.offscreen.createDocument({url:"offscreen.html",reasons:["USER_MEDIA"],justification:"Recording from chrome.tabCapture API"}),l(e).then((()=>{a?chrome.tabs.sendMessage(e,{type:"scrollCaptureLocation",location:"stop",tabId:e}):(d(""),i(e))}))}let r;function o(e,t,o){switch(e.type){case"scrollCaptureShowMainPanel":s(e.tabId),o({mainPanel:!0});break;case"scrollCaptureStartRecording":!async function(e){d("_red");const t=await chrome.tabCapture.getMediaStreamId({targetTabId:e.tabId}),a=Object.assign({},e);Object.assign(a,{type:"scrollCaptureStartOffscreenRecording",target:"offscreen",streamId:t,tabId:e.tabId}),chrome.runtime.sendMessage(a)}(e);break;case"scrollCaptureStopRecording":d(),chrome.runtime.sendMessage({type:"scrollCaptureStopOffscreenRecording",target:"offscreen"});break;case"scrollCaptureResizeWindow":!function(e,t){let a={width:e,height:t};chrome.windows.getCurrent({populate:!1},(e=>{chrome.windows.update(e.id,a)}))}(e.width,e.height);break;case"scrollCaptureTrackEvent":a.fireEvent(e.category,e.params);break;case"scrollCaptureTrackPage":a.firePageViewEvent(e.path.split("/").pop(),e.path);break;case"scrollCaptureUpdatedTabListener":let t;if("scenario"===e.location)chrome.storage.local.set({tabId:e.tabId}),t=c;else t=n;e.enabled?chrome.tabs.onUpdated.addListener(t):chrome.tabs.onUpdated.removeListener(t);break;case"scrollCaptureInsertCSS":chrome.scripting.insertCSS({target:{tabId:e.tabId},css:e.css});break;case"scrollCaptureImageCaptureCanvas":r=new OffscreenCanvas(e.width,e.height);break;case"scrollCaptureVisibleTab":chrome.tabs.captureVisibleTab(null,{},(e=>{o({dataUrl:e})}));break;case"scrollCaptureImageCaptureStart":d("_red");break;case"scrollCaptureImageCaptureStop":d();break;case"scrollCaptureVideoURLBackground":e.type="scrollCaptureVideoURL",chrome.tabs.sendMessage(e.tabId,e);break;case"scrollCaptureFFmpegLogToSW":e.type="scrollCaptureFFmpegLogToCC",chrome.tabs.sendMessage(e.tabId,e)}return!0}function n(e,t,a){"complete"==t.status&&l(a.id).then((()=>{chrome.runtime.getContexts({}).then((t=>{const s=t.find((e=>"OFFSCREEN_DOCUMENT"===e.contextType)).documentUrl.endsWith("#recording");chrome.tabs.sendMessage(a.id,{type:"scrollCaptureLocation",location:s?"record":"play",tabId:e})}))}))}function c(e,t,a){"complete"==t.status&&chrome.storage.local.get("tabId").then((t=>{t.tabId==e&&l(a.id).then((()=>{i(a.id)}))}))}function i(e){chrome.storage.local.get(["defaultLocation"]).then((t=>{const a=t.defaultLocation||"scroll-capture";chrome.tabs.sendMessage(e,{type:"scrollCaptureLocation",location:a,tabId:e})}))}function l(e){return chrome.scripting.executeScript({target:{tabId:e},files:["content.js"]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";chrome.action.setIcon({path:{16:chrome.runtime.getURL("assets/images/get_started16"+e+".png"),32:chrome.runtime.getURL("assets/images/get_started32"+e+".png"),48:chrome.runtime.getURL("assets/images/get_started48"+e+".png"),128:chrome.runtime.getURL("assets/images/get_started128"+e+".png")}})}e="G-7064XKF42S",t="oNskEvShRDGc0FL2AXyoVQ",chrome.runtime.onMessage.addListener(o),chrome.action.onClicked.addListener((e=>{s(e.id,e.url)}))})();