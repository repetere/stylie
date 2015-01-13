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
