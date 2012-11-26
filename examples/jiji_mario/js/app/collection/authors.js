define([
	'backbone'
], function(Backbone) {
	"use strict";
	
	var Author = Backbone.Model.extend({
		defaults : {
			uid : '',
			name : ''
		}
	});
	var Authors = Backbone.Collection.extend({
		model : Author,
		url : authorsUrl
	});
	
	return new Authors();
});