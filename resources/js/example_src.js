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
