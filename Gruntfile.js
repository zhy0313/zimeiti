module.exports = function (grunt) {

  "use strict";

  var fs = require('fs');
  var pkginfo = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkginfo,

    // https://www.npmjs.com/package/grunt-contrib-sass
    sass: {
      dist: {
        options: {
          //4种形式 nested, compact, compressed, expanded
          style: 'compressed',
          sourcemap: 'auto',
          noCache: true
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: '**/*.scss',
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    },

    // https://www.npmjs.com/package/grunt-contrib-uglify
    uglify: {
      dist: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'src/component',
          src: '**/*.js',
          dest: 'dist/component'
        }]
      }
    },

    // https://www.npmjs.com/package/grunt-contrib-compress
    compress: {
      dist: {
        options: {
          archive: ('zip/' + pkginfo.description + '@' + grunt.template.today("yyyy_mm_dd_HH_MM") + '.zip')
        },
        files: [{
          expand: true,
          src: ['app/*', 'dist/**/*'],
          dest: ''
        }]
      }
    },

    // https://www.npmjs.com/package/grunt-contrib-watch
    watch: {
      scss: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass']
      },
      javascript: {
        files: ['src/component/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('pack', ['compress']);

};
