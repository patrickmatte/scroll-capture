export function awaitEvent(dispatcher, eventName, stopPropagation, stopImmediatePropagation, preventDefault) {
  const promise = new Promise(function (resolve, reject) {
    const eventHandler = function (event) {
      // event.stopPropagation();
      if (stopPropagation && event.stopPropagation) {
        event.stopPropagation();
      }
      if (stopImmediatePropagation && event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      }
      if (preventDefault && event.preventDefault) {
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
  const promise = new Promise(function (resolve, reject) {
    let eventName = 'transitionend';
    const eventNames = {
      OTransition: 'otransitionend',
      WebkitTransition: 'webkitTransitionEnd',
    };
    for (const i in eventNames) {
      if (document.body.style[i] !== undefined) {
        eventName = eventNames[i];
      }
    }

    const eventHandler = function (event) {
      let isProperty;
      for (let i = 0; i < cssProperties.length; i++) {
        const prop = cssProperties[i];
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
  const promise = new Promise(function (resolve, reject) {
    let eventName = 'animationend';
    const eventNames = {
      OTransition: 'oanimationend',
      MozTransition: 'moznimationend',
      WebkitTransition: 'webkitAnimationEnd',
    };
    for (const i in eventNames) {
      if (document.body.style[i] !== undefined) {
        eventName = eventNames[i];
      }
    }

    const eventHandler = function (event) {
      if (animationName !== event.animationName || dispatcher !== event.target) {
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

export function awaitTimeout(seconds = 0) {
  if (isNaN(seconds) || seconds <= 0) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, seconds * 1000);
    });
  }
}

export function awaitCallback(target, method) {
  const promise = new Promise((resolve, reject) => {
    target[method] = () => {
      delete target[method];
      resolve(arguments);
    };
  });
  return promise;
}

export function awaitAnimationFrame(total = 1) {
  total = Math.max(1, Math.round(total));
  let count = 0;
  const promise = new Promise(function (resolve, reject) {
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
  const loadedmetadata = awaitEvent(video, 'loadedmetadata');
  // const loadedmetadataTimeout = awaitTimeout(timeout);
  const promise = Promise.race([loadedmetadata]);
  return promise.then((event) => {
    if (debug) {
      console.log('loadedmetadata');
    }
    const loadeddataPromise = awaitEvent(video, 'loadeddata');
    let playPromise = video.play();
    if (!playPromise) {
      playPromise = loadeddataPromise;
    }
    // const playPromiseTimeout = awaitTimeout(timeout);
    const promise = Promise.race([playPromise]);
    return promise.then(() => {
      if (debug) {
        console.log('playPromise or loadeddata');
      }
      video.pause();
      return video;
    });
  });
}
