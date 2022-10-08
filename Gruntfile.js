const sass = require('sass');

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": [
                    "./src/assets/js/jquery.min.js",
                    "./src/assets/plugin/slick/slick.min.js",
                    "./src/assets/js/app.js"
                ],
                "dest": "./src/dist/js/script.js"
            }
        },
        watch: {
            src: {
                files: [
                    './src/assets/**/*.js',
                    './src/assets/**/*.scss'
                ],
                tasks: ['default'],
              },
        },
        uglify: {
            dist: {
                // Build file for wordpress
                files: {
                    '../suaghehcm_wp/wp-content/themes/underscores-child/assets/dist/js/script.min.js': ['<%= concat.build.dest %>'],
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    './src/dist/css/index.css': './src/assets/scss/index.scss',
                    '../suaghehcm_wp/wp-content/themes/underscores-child/assets/dist/css/index.min.css': './src/assets/scss/index.scss'
                }
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Task definitions
    grunt.registerTask('default', ['concat', 'uglify', 'sass']);
    grunt.registerTask('grunt-watch', ['watch']);
};