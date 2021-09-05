export function loadXHR(
  url,
  method = 'GET',
  data = null,
  requestHeaders = null,
  responseType = null,
  noCache = false,
  timeout = 15000,
  maxTimeoutAttempt = 5
) {
  const promise = new Promise(function (resolve, reject) {
    let timeoutAttempt = 0;

    let xhr;

    const createXHR = () => {
      xhr = new XMLHttpRequest();
      if (responseType) {
        xhr.responseType = responseType;
      }

      xhr.onload = (event) => {
        promise.progress = 1;
        if (xhr.status === 200) {
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
        const random = Math.round(Math.random() * 1000000000);
        if (url2.indexOf('?') === -1) {
          url2 += '?';
        } else {
          url2 += '&';
        }
        url2 += 'nocache=' + random.toString();
      }

      xhr.open(method, url2, true);
      xhr.ontimeout = (e) => {
        timeoutAttempt++;
        if (timeoutAttempt > maxTimeoutAttempt) {
          promise.progress = 1;
          reject(e);
        } else {
          createXHR();
        }
      };
      xhr.timeout = timeout;

      if (requestHeaders) {
        for (let i = 0; i < requestHeaders.length; i++) {
          const requestHeader = requestHeaders[i];
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
