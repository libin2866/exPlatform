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
                //src: 'src/css/*.css',
                //dest: 'build/css/**.css'
                expand: true, cwd: 'src/css/', src: ['**/*.css'], dest: 'build/css/', ext: '.css'
            }
        },
        uglify: {
            "my_target": {
                "files": {
                    'dest/libs.min.js': ['src/zepto.js', 'src/underscore.js', 'src/backbone.js']
                }
            }
        },
        cssmin: {
            compress: {
                files: [{
                    //'dest/car.min.css': [
                    //    "src/car.css",
                    //    "src/car01.css"
                    //]
                    expand: true, cwd: 'build/css/', src: ['**/*.css'], dest: 'build/cssmin/', ext: '.css'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('lessc', ['less:main']);
    grunt.registerTask('post', ['postcss']);
    grunt.registerTask('distcss', ['postcss', 'cssmin']);

};