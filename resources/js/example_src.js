'use strict';
var navlinks,
	screenSizeElement,
	screenSizeValElement,
	PushMenu = require('stylie.pushmenu'),
	classie = require('classie'),
	Stylie = require('../../index'),
	stylie,
	StyliePushMenu,
	mtpms,
	closeMenuElements,
	menuElement,
	menuTriggerElement,
	nav_header,
	window_inner_height,
	window_scroll_position;



var navlinkclickhandler = function (e) {
	// console.log('e', e);
	var etarget = e.target,
		etargethref = etarget.getAttribute('data-href'),
		anchorlink,
		anchorlinkTop;

	if (etargethref && etargethref.charAt(0) === '#') {
		anchorlink = document.querySelector('a[name="' + etargethref + '"]');
		if (anchorlink) {
			anchorlinkTop = anchorlink.getBoundingClientRect().top;
			// console.log('anchorlinkTop', anchorlinkTop);
			// console.log('document.querySelector("main.ts-pushmenu-scroller").scrollTop', document.querySelector('main.ts-pushmenu-scroller').scrollTop);
			// console.log('mtpms.scrollY', mtpms.scrollTop);
			mtpms.scrollTop = (anchorlinkTop + mtpms.scrollTop);
			StyliePushMenu._resetMenu();
		}
	}

};


var closeNavMenu = function () {
	StyliePushMenu._resetMenu();
};

var scrollNavPos = function () {
	window_scroll_position = mtpms.scrollTop;
	if (nav_header && (window_scroll_position > (window_inner_height * 0.5))) {
		classie.remove(nav_header, 'minimize');
	}
	else if (nav_header) {
		classie.add(nav_header, 'minimize');
	}
};


window.addEventListener('load', function () {
	navlinks = document.querySelector('#ts-pushmenu-mp-menu');
	screenSizeElement = document.querySelector('#screensize');
	screenSizeValElement = document.querySelector('#screensizeval');
	menuElement = document.getElementById('ts-pushmenu-mp-menu');
	menuTriggerElement = document.getElementById('trigger');
	closeMenuElements = document.querySelectorAll('.closemenu');
	nav_header = document.querySelector('#nav-header');
	window_inner_height = window.innerHeight;
	mtpms = document.querySelector('main.ts-pushmenu-scroller');
	window_scroll_position = mtpms.scrollTop;
	mtpms.addEventListener('scroll', scrollNavPos, false);

	scrollNavPos();

	for (var x = 0; x < closeMenuElements.length; x++) {
		closeMenuElements[x].addEventListener('click', closeNavMenu, false);
	}
	if (navlinks) {
		navlinks.addEventListener('mousedown', navlinkclickhandler, false);
	}
	StyliePushMenu = new PushMenu({
		el: menuElement,
		trigger: menuTriggerElement,
		type: 'cover', // 'overlap', // 'cover',
		// position: 'right'
	});
	stylie = new Stylie();
	window.stylie = stylie;
	window.StyliePushMenu = StyliePushMenu;
});
