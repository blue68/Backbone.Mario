require.config({
  paths : {
    jquery : '../lib/jquery.min',
    underscore : '../lib/lodash.min',
    backbone : '../lib/backbone',
    mario : '../lib/backbone.mario',
    localStorage : '../lib/backbone-localStorage',
    vent : 'utils/vent',
    tpl : '../lib/tpl'
  },
  shim : {
  	localStorage : ['backbone'],
  	underscore : {
  		exports : '_'
  	},
  	backbone : {
  		exports : 'Backbone',
  		deps : ['jquery', 'underscore']
  	},
  	mario : {
  		exports : 'Backbone.Mario',
  		deps : ['backbone']
  	}
  },
  deps : ['jquery', 'underscore']
});

require(['backbone', 'app/app',
	'app/controller/router',
	'app/controller/controller',
	'vent'
],function(Backbone, app, Router, Controller, vent){
  "use strict";
  
  app.start();
  
  var router = new Router({
  	controller : Controller
  });
  Backbone.history.start();
  
  vent.on('search:content', function(keyword) {
  	router.navigate('searchContent/' + keyword);
  });
  vent.on('search:author', function(name) {
  	router.navigate('searchAuthor/'+name);
  });
});
