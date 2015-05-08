module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/scripts/*.js',
                dest: 'dist/scripts/main.min.js'
            },
            vendors: {
                src: 'app/scripts/vendors/*.js',
                dest: 'dist/scripts/libs.min.js'
            }
        },


        bowercopy: {
            vendors: {
                options: {
                    destPrefix: 'app/scripts/vendors'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.js',
                    'angular.js': 'angular/angular.js'
                },
            },
        }


    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bowercopy');

    // Default task(s).
    grunt.registerTask('default', [
        'bowercopy:vendors'
    ]);

    // Default task(s).
    grunt.registerTask('build', [
        'bowercopy:vendors',
        'uglify:build',
        'uglify:vendors',
    ]);

};
