define([
	'mario',
	'app/templates'
], function(Mario, Templates) {
	"use strict";
	
	return Mario.ItemView.extend({
		template : Templates.footer
	});
});