define([
	'mario',
	'app/templates',
	'app/view/Pub',
	'app/view/Reports',
	'app/view/Nav'
], function(Mario, Templates, Pub, Reports, Nav) {
	"use strict";
	
	return Mario.Layout.extend({
		template : Templates.main,
		
		regions : {
			pub : '#pub',
			reports : '#reports',
			nav : '#nav'
		},
		
		onRender : function() {
			this.pub.show(new Pub());
			this.reports.show(new Reports());
			this.nav.show(new Nav());
		}
	});
});