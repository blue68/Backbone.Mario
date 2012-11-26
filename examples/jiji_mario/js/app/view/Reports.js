define([
	'mario',
	'app/templates',
	'app/collection/reports'
], function(Mario, Templates, reports) {
	"use strict";
	
	var itemView =  Mario.ItemView.extend({
		template : Templates.report
	});
	return Mario.CollectionView.extend({
		itemView : itemView,
		collection : reports
	});
});