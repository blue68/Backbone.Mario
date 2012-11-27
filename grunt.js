/*global module:false*/
module.exports = function(grunt) {
  	grunt.loadNpmTasks('grunt-rigger');
  	grunt.loadNpmTasks('grunt-jasmine-runner');
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['src/mario.*.js']
    },
    rig : {
    	core_build : {
    		src : ['<banner:meta.banner>', 'src/build/mario.core.js'],
    		dest : 'lib/core/backbone.mario.js'
    	},
    	core_amd : {
    		src : ['<banner:meta.banner>', 'src/build/amd.core.js'],
    		dest : 'lib/core/amd/backbone.mario.js'
    	},
    	build : {
    		src : ['<banner:meta.banner>', 'src/build/mario.js'],
    		dest : 'lib/backbone.mario.js'
    	},
    	amd : {
    		src : ['<banner:meta.banner>', 'src/build/amd.js'],
    		dest : 'lib/amd/backbone.mario.js'
    	}
    },
    jasmine : {
    	src : [
	        'public/javascripts/jquery.js',
	        'public/javascripts/json2.js',
	        'public/javascripts/underscore.js',
	        'public/javascripts/backbone.js',
	        'public/javascripts/backbone.babysitter.js',
	        'public/javascripts/backbone.augment.js',
	        'public/javascripts/backbone.eventbinder.js',
	        'public/javascripts/backbone.wreqr.js',
	        'src/build/mario.core.js',
	        'spec/javascripts/support/mario.support.js',
	        'src/mario.helpers.js',
	        'src/mario.createObject.js',
	        'src/mario.triggermethod.js',
	        'src/mario.eventbinder.js',
	        'src/mario.eventaggregator.js',
	        'src/mario.controller.js',
	        'src/mario.view.js',
	        'src/mario.itemview.js',
	        'src/mario.collectionview.js',
	        'src/mario.compositeview.js',
	        'src/mario.region.js',
	        'src/mario.layout.js',
	        'src/mario.application.js',
	        'src/mario.approuter.js',
	        'src/mario.module.js',
	        'src/mario.templatecache.js',
	        'src/mario.renderer.js',
	        'src/mario.callbacks.js'
	      ],
	      helpers : 'spec/javascripts/helpers/*.js',
	      specs : 'spec/javascripts/**/*.spec.js',
    	junit : {
		    output : 'unit_test_report/'
		}
    },
    'jasmine-server' : {
      browser : false
    },
    min: {
      core_standard : {
      	src : ['<banner:meta.banner>', '<config:rig.core_build.dest>'],
      	dest : 'lib/core/backbone.mario.min.js'
      },
      core_amd : {
      	src : ['<banner:meta.banner>', '<config:rig.core_amd.dest>'],
      	dest : 'lib/core/amd/backbone.mario.min.js'
      },
      standard : {
      	src : ['<banner:meta.banner>', '<config:rig.build.dest>'],
      	dest : 'lib/backbone.mario.min.js'
      },
      amd : {
      	src : ['<banner:meta.banner>', '<config:rig.amd.dest>'],
      	dest : 'lib/amd/backbone.mario.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        Backbone: true,
        _: true,
        Marionette: true,
        $: true,
        slice: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'jasmine rig min');

};
