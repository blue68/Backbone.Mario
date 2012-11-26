define(function(require) {
	"use strict";
	
	return {
		header : require('tpl!app/templates/header.tmpl'),
		footer : require('tpl!app/templates/footer.tmpl'),
		main : require('tpl!app/templates/main.tmpl'),
		pub : require('tpl!app/templates/pub.tmpl'),
		report : require('tpl!app/templates/report.tmpl'),
		nav : require('tpl!app/templates/nav.tmpl'),
		navItem : require('tpl!app/templates/navItem.tmpl')
	}
});