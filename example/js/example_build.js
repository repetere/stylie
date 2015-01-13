(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var navlinks,
	screenxs = '20em',
	screensm = '29em',
	screenmd = '32em',
	screenlg = '50em',
	screenxl = '70em',
	screenxx = '90em',
	screenSizeElement,
	screenSizeValElement;

var getMatchMediaString = function (minwidth) {
	return '(min-width: ' + minwidth + ')';
};

var navlinkclickhandler = function (e) {
	var etarget = e.target,
		etargethref = etarget.getAttribute('href'),
		anchorlink,
		anchorlinkTop;

	if (etargethref.charAt(0) === '#') {
		anchorlink = document.querySelector('a[name="' + etargethref + '"]');
		if (anchorlink) {
			anchorlinkTop = anchorlink.getBoundingClientRect().top;
			console.log('anchorlinkTop', anchorlinkTop);
			console.log('window.scrollY', window.scrollY);
			window.scrollTo(0, (anchorlinkTop + window.scrollY));
		}
	}
};

var matchMediaEventHandler = function () {
	if (screenSizeElement) {
		if (window.matchMedia(getMatchMediaString(screenxx)).matches) {
			screenSizeElement.innerHTML = 'screenxx:';
			screenSizeValElement.innerHTML = screenxx;
		}
		else if (window.matchMedia(getMatchMediaString(screenxl)).matches) {
			screenSizeElement.innerHTML = 'screenxl:';
			screenSizeValElement.innerHTML = screenxl;
		}
		else if (window.matchMedia(getMatchMediaString(screenlg)).matches) {
			screenSizeElement.innerHTML = 'screenlg:';
			screenSizeValElement.innerHTML = screenlg;
		}
		else if (window.matchMedia(getMatchMediaString(screenmd)).matches) {
			screenSizeElement.innerHTML = 'screenmd:';
			screenSizeValElement.innerHTML = screenmd;
		}
		else if (window.matchMedia(getMatchMediaString(screensm)).matches) {
			screenSizeElement.innerHTML = 'screensm:';
			screenSizeValElement.innerHTML = screensm;
		}
		else if (window.matchMedia(getMatchMediaString(screenxs)).matches) {
			screenSizeElement.innerHTML = 'screenxs:';
			screenSizeValElement.innerHTML = screenxs;
		}
	}
};

window.addEventListener('load', function () {
	navlinks = document.querySelector('#navlinks');
	screenSizeElement = document.querySelector('#screensize');
	screenSizeValElement = document.querySelector('#screensizeval');

	if (navlinks) {
		navlinks.addEventListener('click', navlinkclickhandler, false);
	}
	matchMediaEventHandler();
});

window.addEventListener('resize', matchMediaEventHandler, false);

},{}]},{},[1]);
