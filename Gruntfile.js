'use strict';

var gpullr = {
    host: 'localhost',
    port: 8889,
    backendHost: 'localhost',
    backendPort: 8888,
    liveReload: 9999
};

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            rules: [{
                from: '^(.(?!\\.(css|html|jpg|js|png|eot|otf|svg|ttf|woff|woff2)))*$',
                to: '/index.html'
            }],
            options: {
                port: gpullr.port,
                hostname: gpullr.host,
                middleware: function (connect, options) {
                    var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

                    var middlewares = [];
                    if (!Array.isArray(options.base)) {
                        options.base = [options.base];
                    }

                    //// Setup the proxy to the Backend
                    var proxyOptions1 = require('url').parse('http://' + gpullr.backendHost + ':' + gpullr.backendPort + '/');
                    proxyOptions1.route = '/api';
                    middlewares.push(require('proxy-middleware')(proxyOptions1));

                    // RewriteRules support
                    middlewares.push(rewriteRulesSnippet);

                    // Serve static files
                    options.base.forEach(function (base) {
                        middlewares.push(connect.static(base));
                    });
                    return middlewares;
                }
            },

            app: {
                options: {
                    open: true,
                    livereload: gpullr.liveReload,
                    base: ['.tmp', 'app']
                }
            }
        },

        jshint: {
            options: {
                jshintrc: true
            }
        },

        karma: {
            options: {
                configFile: 'test/karma.conf.js'
            },
            app: {
                autoWatch: false,
                browsers: ['PhantomJS'],
                singleRun: true
            }
        },

        copy: {
            components: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app',
                        dest: 'dist',
                        src: [
                            '.htaccess',
                            'bower_components/**/*.html',
                            'app_components/**/*.html',
                            'views/**/*.html',
                            'index.html'
                        ]
                    }
                ]
            },
            js: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '.tmp/concat/scripts/',
                        dest: 'dist/scripts/',
                        src: ['*.js']
                    }
                ]
            },
            font: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app',
                        src: [
                            'styles/css/bootstrap/fonts/**/*',
                            'styles/fonts/**/*',
                            'bower_components/ecosystem-main-fe/release/styles/bootstrap/fonts/**/*'
                        ],
                        dest: 'dist'
                    }
                ]
            },
            img: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app',
                        src: [
                            'bower_components/ecosystem-main-fe/release/images/**/*',
                            'images/placeholder/*',
                            'styles/img/**/*'
                        ],
                        dest: 'dist'
                    }
                ]
            },
            iconFont: {
                expand: true,
                cwd: 'app/styles/fonts',
                dest: 'dist/styles/fonts',
                src: [
                    '*.*'
                ]
            }
        },

        replace: {
            development: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('config/environments/development.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['config/envConfig.js'],
                    dest: 'app/scripts/config/'
                }]
            },
            production: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('config/environments/production.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['config/envConfig.js'],
                    dest: 'app/scripts/config/'
                }]
            }
        },

        wiredep: {
            task: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'app/index.html'
                ]
            }
        },

        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            'app/styles/css/base.min.css',
                            'dist/*',
                            '!dist/.git*'
                        ]
                    }
                ]
            }
        },

        recess: {
            options: {
                compile: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/styles/less',
                        src: 'base.less',
                        dest: 'app/styles/.tmp/',
                        ext: '.css'
                    }
                ]
            }
        },

        eslint: {
            target: [
                'Gruntfile.js',
                'app/scripts/**/*.js',
                'app/app_components/**/*.js',
                'app/app_dev_components/**/*.js'
            ],
            test: {
                src: ['test/**/*.js']
            },
            options: {
                configFile: 'config/eslint.json'
            }
        },

        usemin: {
            html: ['dist/index.html'],
            options: {
                assetsDirs: ['dist']
            }
        },

        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'dist'
            }
        },

        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 4
            },
            dist: {
                files: {
                    src: [
                        'dist/scripts/**/*.js',
                        'dist/styles/**/*.css'
                    ]
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dist',
                        src: ['**/*.html'],
                        dest: 'dist'
                    }
                ]
            }
        },

        watch: {

            // application files

            html: {
                files: ['app/**/*.html'],
                options: {
                    livereload: gpullr.liveReload
                }
            },

            js: {
                files: ['app/**/*.js'],
//                tasks: ['jshint', 'eslint'], TODO
                options: {
                    livereload: gpullr.liveReload
                }
            },

            less: {
                files: ['app/styles/less/**/*.less'],
                tasks: ['clean', 'recess'],
                options: {
                    livereload: gpullr.liveReload
                }
            },

            css: {
                files: ['app/**/*.css'],
                options: {
                    livereload: gpullr.liveReload
                }
            },

            // tests

            jsTest: {
                files: ['test/**/*.js'],
//                tasks: ['jshint', 'eslint:test'] TODO
            },

            // setup

            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },

            gruntfile: {
                files: ['Gruntfile.js'],
//                tasks: ['jshint', 'eslint'], TODO
                options: {
                    livereload: gpullr.liveReload
                }
            }
        }

    });

    grunt.registerTask('buildpullr', function (target) {
        grunt.log.warn('The `buildpullr` task has been deprecated. Use `grunt build` to build the application.');
        grunt.task.run(['build:' + target]);
    });

    grunt.registerTask('build', [
        'replace:production',
        'wiredep',
        'clean',
        'recess',
        'jshint',
//      'eslint', TODO
        'useminPrepare',
        'copy:components',
        'copy:font',
        'copy:img',
        'concat',
        'cssmin',
        'copy:js',
        'rev:dist',
        'usemin',
        'htmlmin',
        'copy:iconFont'
    ]);

    grunt.registerTask('serve', [
        'build',
        'replace:development',
        'configureRewriteRules',
        'connect:app',
        'watch'
    ]);

    grunt.registerTask('test', [
        'replace:development',
        'jshint',
        'karma:app'
    ]);
};
