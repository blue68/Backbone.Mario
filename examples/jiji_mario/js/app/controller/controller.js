define([
	'app/collection/reports',
	'app/collection/authors'
], function(reports, authors) {
	return {
		viewReportsByAuthor : function(uid) {
			reports.fetch({
				data : {
					uid : uid
				}
			});
		},
		searchAuthor : function(name) {
			authors.fetch({
				data : {
					name : name
				}
			});
		}
	}
});