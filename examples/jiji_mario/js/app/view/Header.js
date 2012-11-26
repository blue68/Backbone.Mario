define([
	'mario',
	'app/templates',
	'vent'
], function(Mario, Templates, vent) {
	"use strict";
	
	return Mario.ItemView.extend({
		template : Templates.header,
		
		ui : {
			input : '#content-search'
		},
		
		events : {
			'keypress #content-search' : 'onInputKeypress'
		},
		
		onInputKeypress : function(e) {
			var ENTER_KEY = 13;
			var keyword = this.ui.input.val().trim();
			
			if(e.which === ENTER_KEY && keyword) {
				vent.trigger('search:content', keyword);
			}
		}
	});
});