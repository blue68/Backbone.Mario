define([
	'mario',
	'app/templates',
	'app/collection/authors',
	'vent'
], function(Mario, Templates, authors, vent) {
	"use strict";
	
	var itemView = Mario.ItemView.extend({
		tagName : "li",
		template : Templates.navItem
	});
	
	return Mario.CompositeView.extend({
		itemView : itemView,
		
		itemViewContainer : 'ul',
		
		ui : {
			input : '#name_search'
		},
		
		events : {
			'keypress #name_search' : 'searchName'
		},
		
		template : Templates.nav,
		
		collection : authors,
		
		searchName : function(e) {
			var ENTER_KEY = 13;
			var name = this.ui.input.val().trim();
			
			if(e.which == ENTER_KEY && name) {
				vent.trigger('search:author', name);
			}
		}
	});
});