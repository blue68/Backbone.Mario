/*global module:false*/
module.exports = function(grunt) {
  	grunt.loadNpmTasks('grunt-rigger');
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
  grunt.registerTask('default', 'rig min');

};
