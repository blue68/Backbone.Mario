define([
	'mario',
	'app/view/Header',
	'app/view/Footer',
	'app/view/Main',
	'app/collection/reports',
	'app/collection/authors'
], function(Mario, Header, Footer, Main, reports, authors) {
	"use strict";
	
	var app = new Mario.Application();
	
	app.addRegions({
		header : '#header',
		main : '#main',
		footer : '#footer'
	});
	
	app.addInitializer(function(opt) {
		app.header.show(new Header());
		app.main.show(new Main());
		app.footer.show(new Footer());
		
		reports.fetch();
		authors.fetch();
	});
	
	return app;
});