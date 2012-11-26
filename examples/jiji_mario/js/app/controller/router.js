define([
	'mario'
], function(Mario) {
	"use strict";
	
	var AppRouter = Mario.AppRouter.extend({
		appRoutes : {
			'author/:uid' : "viewReportsByAuthor",
			'searchAuthor/:name' : 'searchAuthor'
		}
	});
	
	return AppRouter;
});