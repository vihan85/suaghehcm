module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": [
                    "./src/assets/js/jquery-3.6.0.js",
                    "./src/assets/plugin/slick/slick.js",
                    "./src/assets/js/app.js"
                ],
                "dest": "./src/dist/js/script.js"
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
    grunt.registerTask('default', ['concat']);
};