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
                    "./src/css/register.css": "./src/less/register.less",
                    "./src/css/list.css": "./src/less/list.less",
                    "./src/css/managePage.css": "./src/less/managePage.less",
                    "./src/css/userDetail.css": "./src/less/userDetail.less",
                    "./src/css/upload.css": "./src/less/upload.less",
                    "./src/css/algdisplay.css": "./src/less/algdisplay.less",
                    //"public/css/style2.css": "public/css/style2.less"
                    //...
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')(),
                    require('cssnext')()
                ]
            },
            dist: {
                src: 'src/css/index.css',
                dest: 'src/style.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('lessc', ['less:main']);
    grunt.registerTask('post', ['postcss']);

};