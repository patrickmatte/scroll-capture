!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=Math.pow(10,e);return Math.round(t*r)/r}function o(t){return n(t,2)}function a(t){return n(t,3)}function c(t,e,r,n){e||(e=","),isNaN(r)&&(r=0),n||(n="0");var o=t%1,a=Math.floor(t).toString(),c=a.length;if(0!=r&&r>c){r-=c;for(var u=n||"0";r--;)a=u+a}if(null!=e&&a.length>3){for(var i=Math.floor(a.length/3),s=a.length%3,l=a.split(""),d=-1;++d<i;)l.splice(s+4*d,0,e);0==s&&l.shift(),a=l.join("")}return 0!=o&&(a+=o.toString().substr(1)),a}function u(t){if(t>=10&&t<=20)return"th";if(0==t)return"";switch(t%10){case 3:return"rd";case 2:return"nd";case 1:return"st";default:return"th"}}function i(t){return t<10?"0"+t:t.toString()}r.d(e,"f",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return a})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return i}))},function(t,e,r){"use strict";function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";chrome.runtime.sendMessage({txt:"scrollCaptureTrackEvent",category:t,action:e,label:r})}function o(t){chrome.runtime.sendMessage({txt:"scrollCaptureTrackPage",path:t})}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}))},,,,,function(t,e,r){t.exports=r(9)},,,function(t,e,r){"use strict";r.r(e);var n=r(0);function o(t){var e=t.getHours(),r=e>=12?"pm":"am";return{hours:e=(e%=12)||12,minutes:Object(n.a)(t.getMinutes()),seconds:Object(n.a)(t.getSeconds()),ampm:r}}var a=r(1);chrome.storage.local.get(["json"],(function(t){var e,r="Dark";if(t&&t.json){var n=JSON.parse(t.json);n.settings&&(r=n.settings.colorThemes)}switch(r){case"Dark":case"Light":e="Light"==r;break;default:e=!window.matchMedia("(prefers-color-scheme: dark)").matches}document.body.querySelector(".sc-default").setAttribute("data-theme-light",e)})),window.addEventListener("resize",(function(){u()})),chrome.runtime.onMessage.addListener((function(t,e,r){switch(t.txt){case"scrollCaptureColorTheme":document.body.querySelector(".sc-default").setAttribute("data-theme-light",t.isColorThemeLight);break;case"scrollCaptureUpdateVideo":chrome.runtime.getBackgroundPage((function(t){if(t.videoURL){c.src=t.videoURL;var e=new Date,r=o(e),u={year:e.getFullYear(),month:Object(n.a)(e.getMonth()+1),date:Object(n.a)(e.getDate())};r.ampm=r.ampm.toUpperCase();for(var i="Scroll Capture ".concat(u.year,"-").concat(u.month,"-").concat(u.date," at ").concat(r.hours,".").concat(r.minutes,".").concat(r.seconds," ").concat(r.ampm,".webm"),s=document.querySelectorAll("a.sc-download-button"),l=0;l<s.length;l++){var d=s[l];d.href=t.videoURL,d.download=i,d.addEventListener("click",(function(){Object(a.a)("download","click")}))}document.querySelector(".sc-video-filename a.sc-download-button").textContent=i}}));break;case"scrollCaptureUnloadVideo":c.pause();break;case"scrollCaptureShowVideo":u()}}));var c=document.querySelector(".sc-video-player");function u(){chrome.runtime.getBackgroundPage((function(t){var e={txt:"scrollCaptureVideoHeight",height:document.body.scrollHeight};chrome.tabs.sendMessage(t.tabId,e)}))}c.setAttribute("muted","true"),c.setAttribute("autoplay","true"),c.setAttribute("playsinline","true"),c.setAttribute("controls","1"),c.addEventListener("canplay",(function(){u()}))}]);