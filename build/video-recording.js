(()=>{"use strict";function e(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";chrome.runtime.sendMessage({type:"scrollCaptureTrackEvent",category:e,action:t,label:o})}chrome.storage.local.get(["json"],(e=>{let t,o="Dark";if(e&&e.json){let t=JSON.parse(e.json);t.settings&&(o=t.settings.colorThemes)}switch(o){case"Dark":case"Light":t="Light"==o;break;default:t=!window.matchMedia("(prefers-color-scheme: dark)").matches}document.body.querySelector(".sc-default").setAttribute("data-theme-light",t)})),window.addEventListener("resize",(()=>{o()})),chrome.runtime.onMessage.addListener(((r,a,s)=>{switch(r.type){case"scrollCaptureColorTheme":document.body.querySelector(".sc-default").setAttribute("data-theme-light",r.isColorThemeLight);break;case"scrollCaptureUnloadVideo":t.pause();break;case"scrollCaptureShowVideo":o();break;case"scrollCaptureVideoURL":!function(o){let r=o.fileName;const a=o.videoURL;t.src=a,t.download=r;let s=document.querySelectorAll("a.sc-download-button");for(let t=0;t<s.length;t++){let o=s[t];o.href=a,o.download=r,o.addEventListener("click",(()=>{e("download","video")}))}document.querySelector(".sc-video-filename a.sc-download-button").textContent=r}(r)}}));let t=document.querySelector(".sc-video-player");function o(){chrome.storage.local.get(["tabId"]).then((e=>{let t={type:"scrollCaptureVideoHeight",height:document.body.scrollHeight};chrome.tabs.sendMessage(e.tabId,t)}))}t.setAttribute("muted","true"),t.setAttribute("autoplay","true"),t.setAttribute("playsinline","true"),t.setAttribute("controls","1"),t.addEventListener("canplay",(()=>{o()}))})();