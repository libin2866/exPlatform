/*global module:false*/
module.exports = function (grunt) {

    // 项目配置.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['**/*.less'],
                tasks: ['less:main'],
                options: {livereload: false}
            },
            css: {
                files: ['**/*.css'],
                options: {livereload: true}
            }
        },

        //less: {
        //    main: {
        //        expand: true, cwd: './less/', src: ['**/*.less'], dest: './css/', ext: '.css'
        //    }
        //}
        less: {
            main: {
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "./src/css/index.css": "./src/less/index.less",
                    //"public/css/style2.css": "public/css/style2.less"
                    //...
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('lessc', ['less:main']);

};