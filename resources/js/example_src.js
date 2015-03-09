'use strict';
var navlinks,
	screenxs = '20em',
	screensm = '29em',
	screenmd = '32em',
	screenlg = '50em',
	screenxl = '70em',
	screenxx = '90em',
	screenSizeElement,
	screenSizeValElement,
	PushMenu = require('stylie.pushmenu'),
	StyliePushMenu,
	closeMenuElements,
	menuElement,
	menuTriggerElement;

var getMatchMediaString = function (minwidth) {
	return '(min-width: ' + minwidth + ')';
};

var navlinkclickhandler = function (e) {
	var etarget = e.target,
		etargethref = etarget.getAttribute('href'),
		anchorlink,
		anchorlinkTop;

	StyliePushMenu._resetMenu();
	if (etargethref && etargethref.charAt(0) === '#') {
		anchorlink = document.querySelector('a[name="' + etargethref + '"]');
		if (anchorlink) {
			anchorlinkTop = anchorlink.getBoundingClientRect().top;
			console.log('anchorlinkTop', anchorlinkTop);
			console.log('window.scrollY', window.scrollY);
			document.querySelector('main.ts-pushmenu-scroller').scrollTop = (anchorlinkTop + window.scrollY);
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

var closeNavMenu = function () {
	StyliePushMenu._resetMenu();
};

window.addEventListener('load', function () {
	navlinks = document.querySelector('#navlinks');
	screenSizeElement = document.querySelector('#screensize');
	screenSizeValElement = document.querySelector('#screensizeval');
	menuElement = document.getElementById('ts-pushmenu-mp-menu');
	menuTriggerElement = document.getElementById('trigger');
	closeMenuElements = document.querySelectorAll('.closemenu');

	for (var x = 0; x < closeMenuElements.length; x++) {
		closeMenuElements[x].addEventListener('click', closeNavMenu, false);
	}
	if (navlinks) {
		navlinks.addEventListener('click', navlinkclickhandler, false);
	}
	StyliePushMenu = new PushMenu({
		el: menuElement,
		trigger: menuTriggerElement,
		type: 'overlap', // 'cover',
		position: 'right'
	});
	matchMediaEventHandler();
	window.StyliePushMenu = StyliePushMenu;
});

window.addEventListener('resize', matchMediaEventHandler, false);
