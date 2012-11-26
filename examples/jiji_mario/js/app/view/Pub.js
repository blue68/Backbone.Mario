define([
	'mario',
	'app/templates',
	'app/collection/reports',
	'jquery'
], function(Mario, Templates, reports, $) {
	return Mario.ItemView.extend({
		template : Templates.pub,
		ui : {
			textarea : 'textarea',
			pubBtn : 'button'
		},
		events : {
			'click button' : 'onPubClick'
		},
		
		onPubClick : function() {
			var content = this.ui.textarea.val().trim();
			
			if(content) {
				$.post(pubContentUrl, {
					content : content
				}, function(data) {
					if(data.success) {
						reports.fetch();
					}
				}, 'json');
			}
		}
	});
});