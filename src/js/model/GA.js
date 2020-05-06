// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 /**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 */

export function initAnalytics(analyticsID) {
    window._gaq = window._gaq || [];
    window._gaq.push(['_setAccount', analyticsID]);
    window._gaq.push(['_trackPageview']);

    let ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
 }

/**
 * Track a click on a button using the asynchronous tracking API.
 * See http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
 * for information on how to use the asynchronous tracking API.
 */
export function trackEvent(category, action, label = "") {
    let event = ['_trackEvent', category, action];
    if (label) event.push(label);
    window._gaq.push(event);
}

export function trackPage(path) {
    window._gaq.push(['_set', 'page', path]);
    window._gaq.push(['_trackPageview']);
}