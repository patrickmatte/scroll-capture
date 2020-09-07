import {awaitEvent} from "./await";

export function loadImage(url, img, crossorigin = "") {

	if (!img) {
		img = new Image();
	}

	if (crossorigin) {
		img.setAttribute('crossorigin', crossorigin);
	}

	let promise = new Promise(function(resolve, reject) {

		let loadHandler = function() {
			img.removeEventListener("load", loadHandler);
			img.removeEventListener("error", errorHandler);
			promise.progress = 1;
			resolve(img);
		};

		let errorHandler = function(event) {
			img.removeEventListener("load", loadHandler);
			img.removeEventListener("error", errorHandler);
			promise.progress = 1;
			resolve(new Error("404"));
		};

		img.addEventListener("load", loadHandler);
		img.addEventListener("error", errorHandler);

		try {
			img.src = url;
		} catch(error) {
			resolve(img);
		}
		//setTimeout(function() {img.src = url;}, Math.random() * 1000);

	});

	promise.progress = 0;

	return promise;

}

export function loadImageWithProgress(url, img) {

	if (!img) {
		img = new Image();
	}

	let promise = loadXHR(url, "GET", null, null, "blob", false);
	let promise2 = promise.then(function(xhr) {
		return new Promise(function(resolve, reject) {

			img.onload = function() {
				URL.revokeObjectURL(img.src);
				resolve(img);
			};

			img.src = URL.createObjectURL(xhr.response);

		});
	});

	Object.defineProperty(promise2, "progress", {
		get: function () {
			return promise.progress;
		}
	});

	return promise2;

}

export function loadXHR(url, method = "GET", data = null, requestHeaders = null, responseType = null, noCache = false, timeout = 15000, maxTimeoutAttempt = 5) {

	let promise = new Promise(function(resolve, reject) {

		let timeoutAttempt = 0;

		let xhr;

		let createXHR = () => {
			xhr = new XMLHttpRequest();
			if (responseType) {
				xhr.responseType = responseType;
			}

			xhr.onload = (event) => {
				promise.progress = 1;
				if (xhr.status == 200) {
					resolve(xhr);
				} else {
					reject(event);
				}
			};

			xhr.onprogress = (event) => {
				if (event.lengthComputable) {
					promise.progress = event.loaded / event.total;
				}
			};

			xhr.onerror = (event) => {
				promise.progress = 1;
				reject(event);
			};

			xhr.onreadystatechange = (event) => {
				//console.log("xhr.status", this.xhr.status);
				//console.log("xhr.readyState", this.xhr.readyState);
			};

			let url2 = url;
			if (noCache) {
				let random = Math.round(Math.random() * 1000000000);
				if (url2.indexOf("?") == -1) {
					url2 += "?"
				} else {
					url2 += "&"
				}
				url2 += "nocache=" + random.toString();
			}

			xhr.open(method, url2, true);
			xhr.ontimeout = (e) => {
				timeoutAttempt++;
				if(timeoutAttempt > maxTimeoutAttempt) {
					promise.progress = 1;
					reject(event);
				} else {
					createXHR();
				}
			};
			xhr.timeout = timeout;

			if (requestHeaders) {
				for (let i = 0; i < requestHeaders.length; i++) {
					let requestHeader = requestHeaders[i];
					xhr.setRequestHeader(requestHeader[0], requestHeader[1]);
				}
			}

			if (data) {
				xhr.send(data);
			} else {
				xhr.send();
			}
		};

		createXHR();
	});

	promise.progress = 0;

	return promise;

}

export function loadTemplates(url) {
    let promise = loadXHR(url, "GET", null, null, null, null);
    let promise2 = promise.then(function(xhr) {
        let object = {};
        let container = document.createElement("div");
        container.innerHTML = xhr.response;
        let scripts = container.querySelectorAll("script");
        for (let i = 0; i < scripts.length; i++) {
            let script = scripts.item(i);
            object[script.id] = script.text;
        }
        return object;
    });

    Object.defineProperty(promise2, "progress", {
        get: function () {
            return promise.progress;
        }
    });

    return promise2;

}

export function loadHTML(url) {
    let promise = loadXHR(url, "GET", null, null, null, null);
    let promise2 = promise.then(function(xhr) {
        return xhr.response;
    });

    Object.defineProperty(promise2, "progress", {
        get: function () {
            return promise.progress;
        }
    });

    return promise2;

}

export function loadJSON(url, method, data, requestHeaders, noCache) {
	let promise = loadXHR(url, method, data, requestHeaders, null, noCache);
	let promise2 = promise.then(function(xhr) {
		let obj;
		try {
			obj = JSON.parse(xhr.response)
		} catch (e) {
			console.log(e, " in " + url);
		}
		return obj;
	}, function() {
		return null;
	});

	Object.defineProperty(promise2, "progress", {
		get: function () {
			return promise.progress;
		}
	});

	return promise2;

}

export function loadJSONP(url, callback) {

    let promise = new Promise(function(resolve, reject) {

        window[callback] = function(object) {
            promise.progress = 1;
            resolve(object);
        };

        let script = document.createElement("script");
        script.src = url;
        document.querySelector("head").appendChild(script);
    });

    promise.progress = 0;

    return promise;

}

export function loadScript(url, id, noCache) {

    let promise = loadXHR(url, "GET", null, null, null, noCache);
    let promise2 = promise.then(function(xhr) {
        let script = document.createElement("script");
        script.language = "javascript";
        script.type = "text/javascript";
        if (id) {
            script.id = id;
        }
        document.querySelector("head").appendChild(script);
        try {
            script.text = xhr.response;
        } catch(e) {
            console.log(e, " in " + url);
        }
        return script;
    });

    Object.defineProperty(promise2, "progress", {
        get: function () {
            return promise.progress;
        }
    });

    return promise2;

}

export function loadStyle(url, id, noCache) {

    let promise = loadXHR(url, "GET", null, null, null, noCache);
    let promise2 = promise.then(function(xhr) {
        let style = document.createElement( "style" );
        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = xhr.response;
        } else {
            style.appendChild(document.createTextNode(xhr.response));
        }
        document.querySelector("head").appendChild(style);
        return style;
    });

    Object.defineProperty(promise2, "progress", {
        get: function () {
            return promise.progress;
        }
    });

    return promise2;

}

export function loadWebAudio(url, context, volume = 1, loop = false) {
    if (!context) {
        if (!window.webaudioContext) {
            window.AudioContext = window.AudioContext || window["webkitAudioContext"];
            if (window.AudioContext) {
                window.webaudioContext = new AudioContext();
            }
        }
        context = window.webaudioContext;
    }

    let promise2 = Promise.resolve(null);

    if (context) {

        let promise = loadXHR(url, "GET", null, null, "arraybuffer", null);

        promise2 = promise.then(function(xhr) {
            return new Promise(function(resolve, reject) {

                context.decodeAudioData(
                    xhr.response,
                    function(buffer) {
                        if (!buffer) {
                            alert('error decoding file data: ' + url);
                            reject();
                            return;
                        }
						let sound = {};
                        sound.source = context.createBufferSource();
                        sound.gainNode = context.createGain();
                        sound.gainNode.gain.value = volume;
                        sound.source.buffer = buffer;

                        sound.source.connect(sound.gainNode);
                        sound.gainNode.connect(context.destination);
                        sound.source.loop = loop;
                        resolve(sound);
                    },
                    function(error) {
                        reject();
                    }
                );

            });
        });

        Object.defineProperty(promise2, "progress", {
            get: function () {
                return promise.progress;
            }
        });

    }

    return promise2;

}

export function loadVideoBlob(url) {
	let promise1 = loadXHR(url, "GET", null, null, "blob");
	let promise2 = promise1.then((xhr)=> {
		return URL.createObjectURL(xhr.response);
	});

	return promise2;
}
