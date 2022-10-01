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
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Task definitions
    grunt.registerTask('default', ['concat', 'uglify']);
};