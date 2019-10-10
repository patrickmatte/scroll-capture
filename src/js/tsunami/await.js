export function awaitEvent(dispatcher, eventName, stopPropagation, stopImmediatePropagation, preventDefault) {
	let promise;

	promise = new Promise(function(resolve, reject) {

		let eventHandler = function(event) {
			event.stopPropagation();
			if (stopPropagation) {
				event.stopPropagation();
			}
			if (stopImmediatePropagation) {
				event.stopImmediatePropagation();
			}
			if (preventDefault) {
				event.preventDefault();
			}
			dispatcher.removeEventListener(eventName, eventHandler);
			resolve(event);
		};

		dispatcher.addEventListener(eventName, eventHandler);

	});

	return promise;
}

export function awaitTransition(dispatcher, cssProperties) {
	let promise;

	promise = new Promise(function(resolve, reject) {

		let eventName = "transitionend";
		let eventNames = {
			'OTransition':'otransitionend',
			'WebkitTransition':'webkitTransitionEnd'
		};
		for (let i in eventNames) {
			if (document.body.style[i] !== undefined) {
				eventName = eventNames[i];
			}
		}

		let eventHandler = function(event) {
			let isProperty;
			for (let i = 0; i < cssProperties.length; i++) {
				let prop = cssProperties[i];
				if (prop === event.propertyName) {
					isProperty = true;
				}
			}
			if (!isProperty) {
				return;
			}
			event.stopPropagation();
			//event.stopImmediatePropagation();
			//event.preventDefault();
			dispatcher.removeEventListener(eventName, eventHandler);
			resolve(event);
		};

		dispatcher.addEventListener(eventName, eventHandler);

	});

	return promise;

}

export function awaitAnimation(dispatcher, animationName) {
	let promise;

	promise = new Promise(function(resolve, reject) {
		let eventName = "animationend";
		let eventNames = {
			'OTransition':'oanimationend',
			'MozTransition':'moznimationend',
			'WebkitTransition':'webkitAnimationEnd'
		};
		for (let i in eventNames) {
			if (document.body.style[i] !== undefined) {
				eventName = eventNames[i];
			}
		}

		let eventHandler = function(event) {
			if (animationName != event.animationName || dispatcher != event.target) {
				return;
			}
			event.stopPropagation();
			event.stopImmediatePropagation();
			event.preventDefault();
			dispatcher.removeEventListener(eventName, eventHandler);
			resolve(event);
		};

		dispatcher.addEventListener(eventName, eventHandler);

	});

	return promise;
}

export function awaitTimeout(milliseconds) {

	let promise;

	promise = new Promise(function(resolve, reject){

		let timeoutComplete = function(){
			resolve();
		};

		setTimeout(timeoutComplete, milliseconds);

	});

	return promise;

}

export function awaitCallback(target, method) {

	let promise;

	promise = new Promise(function(resolve, reject){

		target[method] = function() {
			target[method] = function(){};
			resolve(arguments);
		};

	});

	return promise;

}

export function awaitAnimationFrame(total = 1) {

	total = Math.max(1, Math.round(total));

	let count = 0;

	let promise;

	promise = new Promise(function(resolve, reject){

		function animationFrame() {
			count++;
			if (count >= total) {
				resolve();
			} else {
				window.requestAnimationFrame(animationFrame);
			}
		}

		window.requestAnimationFrame(animationFrame);

	});

	return promise;

}

export function awaitVideoFirstFrame(video, timeout = 5000, debug) {
	let loadedmetadata =  awaitEvent(video, "loadedmetadata");
	let loadedmetadataTimeout = awaitTimeout(timeout);
	let promise = Promise.race([loadedmetadata]);
	return promise.then((event) => {
		if(debug) {
			console.log("loadedmetadata");
		}
		let loadeddataPromise = awaitEvent(video, "loadeddata");
		let playPromise = video.play();
		if (!playPromise) {
			playPromise = loadeddataPromise;
		}
		let playPromiseTimeout = awaitTimeout(timeout);
		let promise = Promise.race([playPromise]);
		return promise.then(()=> {
			if(debug) {
				console.log("playPromise or loadeddata");
			}
			video.pause();
			return video;
		});
	});
}