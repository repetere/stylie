(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var navlinks;

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

window.addEventListener('load', function () {
	navlinks = document.querySelector('#navlinks');

	if (navlinks) {
		navlinks.addEventListener('click', navlinkclickhandler, false);
	}
});

},{}]},{},[1]);
