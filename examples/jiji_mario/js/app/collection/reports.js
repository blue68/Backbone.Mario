define([
	'backbone'
], function(Backbone) {
	"use strict";
	
	var Report = Backbone.Model.extend({
		defaults : {
			avatar : '',
			author : '',
			title : '',
			content : '',
			date : ''
		}
	});
	
	var Reports = Backbone.Collection.extend({
		url : reportsUrl,
		model : Report
	});
	
	return new Reports();
});