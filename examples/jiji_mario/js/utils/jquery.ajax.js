define(['jquery'], function($) {
	$.ajax = function() {
		console.log('this is new ajax method');
	}
});