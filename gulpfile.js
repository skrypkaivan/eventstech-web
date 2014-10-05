/* TODO: styles recomiplation optimization: gulp-watch + batch processing makes sass compilation < 250ms  */

(function() {
    'use strict';

    var connect = require('gulp-connect'),
        reload = connect.reload,
        gulp = require('gulp'),
        argv = require('yargs').argv,
        csso = require('gulp-csso'),
        sass = require('gulp-sass'),
        preprocess = require('gulp-preprocess'),
        minifyHtml = require('gulp-minify-html'),
        autoprefixer = require('gulp-autoprefixer'),
        rename = require('gulp-rename'),
        gulpif = require('gulp-if'),
        watch = require('gulp-watch'),
        /**
         * Local project environment configuration; This file should not be uploaded into repo
         * Please use ".config-local.sample.js" as a reference sample
         */
        localConfig = require('./.config-local.js');


    /**
         * Gulp tasks and parameters
         *
         * Usage:
         * gulp [task] [--min|--compress] [--server] [--p|--port]
         *
         * Parameter,               Usage           Default             Description
         * ---------------------------------------------------------------------------------------
         * task                     [Local|Server]  Default: 'work'     For local development (watch, no optimization). Use 'build' when deploying
         * --min, --compress        [Local|Server]  Default: false      Turns on|off compression, minifacation, extra comments, etc;
         * --server                 [Local|Build]                       Starts nodejs HTTP server. Can be used only for 'build' task;
         * --d|--debug              [Local|Server]  Default: true       Injects build-specific environments into app (index.html, global var)
         *
         * Local Development Environment:
         * $ gulp
         *
         * Development Environment (Default for dev server, sources not concatenated or minimized)
         * $ gulp build
         *
         * Production Environment (Compressed sources, without comments)
         * $ gulp build --min
         *
         * @isBuild {Boolean} Set to true when gulp is started with "build" task
         */
    var isBuild = (argv['_'].indexOf('build') !== -1),

        DEV_DIR     = 'workspace',
        BUILD_DIR   = 'build',
        ASSETS_DIR  = 'assets',

        DIR = {
            DEV: {
                JS: DEV_DIR + '/scripts',
                CSS: DEV_DIR + '/assets/css/'
            },
            BUILD: {
                CSS: BUILD_DIR + '/css/',
                JS: BUILD_DIR + '/js/'
            }
        },

        FILES = {
            DEV: {
                HTML: {
                    INDEX: DEV_DIR + '/index.tmpl.html',
                },
                JS: [DEV_DIR + '/scripts/**/*.*'],
                CSS: {
                    ALL: DEV_DIR + '/styles/**/*.scss',
                    INDEX: 'index.css'
                },
                ASSETS: [
                    DEV_DIR + ASSETS_DIR + '/images/**/*.*',
                    DEV_DIR + ASSETS_DIR + '/fonts/**/*.*'
                ]
            }
        },
        
        RJS_CONFIG = {
            baseUrl: DIR.DEV.JS,
            name: 'index',
            out: DIR.BUILD.JS + 'index.min.js',
            mainConfigFile: DIR.DEV.JS + '/index.js',
            inlcude: ['../bower_components/requirejs/require'],
            waitSeconds: 60,
            optimize: 'uglify2',
            removeCombined: true,
            keepBuildDir: true,
            preserveLicenseComments: false,
            useStrict: true
        },

        config = {

            // Compression and optimizations are Disabled by default;
            isCompressed: argv.compress || argv.min || false,

            debug: argv.debug || argv.d || false,
            isLocalServerRequired: isBuild && argv.server,
        };

    if (isBuild) {
        console.log('\x1B[31m' + 'Building to: ' + __dirname + '/' + BUILD_DIR + '\x1B[39m');
    }

    if ((localConfig && !isBuild) || config.isLocalServerRequired) {
        var obj = Object.keys(localConfig).map(function(key, index) {
            return '\n\t' + key + ' : ' + (localConfig[key] instanceof Object ? JSON.stringify(localConfig[key]) : localConfig[key]);
        }).join('');
        console.log('\x1B[33m' + obj + '\x1B[39m');
    }

    /**
     * Gulp Main tasks
     * `$ gulp work` (or) simple `$ gulp` is used for local development
     * `$ gulp build --env={test|stage|prod}` creates a build
     * Build can be either "dev" (Files are not concatenated or minimized) or "prod"
     */
    gulp.task('default', ['work']);

    gulp.task('work', ['preprocess', 'styles', 'watch'], function () {
        gulp.start('server');
    });

    gulp.task('build', ['clean-build'], function () {
        gulp.start('copy-assets');
        gulp.start('styles');
        gulp.start('preprocess');
        gulp.start('scripts');

        if (config.isLocalServerRequired) {
            gulp.start('server');
        }
    });

    gulp.task('clean-build', function () {
        var clean = require('gulp-clean');
        return gulp.src(BUILD_DIR, {
            read: false
        })
            .pipe(clean());
    });

    /* "Internal" gulp tasks */
    gulp.task('copy-assets', function () {
        gulp.src(FILES.DEV.ASSETS, {
            base: DEV_DIR
        }).pipe(gulp.dest(BUILD_DIR));
    });

    /* "Internal" gulp tasks */
    gulp.task('copy-scripts', function () {
        gulp.src(FILES.DEV.JS, {
            base: DEV_DIR
        }).pipe(gulp.dest(BUILD_DIR));
    });

    /**
     * Watchers
     * SASS -> Prefixer -> Minifier -> CSS
     * index html -> inject vars
     * live-reload when chnaged scripts, templates, images, fonts
     */
    gulp.task('watch', function() {
        gulp.watch(FILES.DEV.CSS.ALL, localConfig.gazeOptions, ['styles']);
        gulp.watch(FILES.DEV.HTML.INDEX, localConfig.gazeOptions, ['preprocess']);
        gulp.start('watch-static-files');
    });

    /**
     * Copy scripts to build directory on build:dev
     * Compile & optimize scripts to build directory on build:prod
     */
    gulp.task('scripts', function () {
        gulp.start(config.isCompressed ? 'compile-scripts' : 'copy-scripts');
    });

    gulp.task('watch-static-files', function () {
        watch({
            glob: FILES.DEV.JS,
            gaze: localConfig.gazeOptions}, function (files) {
            return files.pipe(reload());
        });
    });

    gulp.task('styles', function () {
        return gulp.src(FILES.DEV.CSS.ALL)
            .pipe(sass({
                outputStyle: (config.isCompressed ? 'compressed' : 'nested'),
                sourceComments: (config.isCompressed ? 'none' : 'normal'),
                errLogToConsole: !isBuild // fail sass task on error
            }))
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(rename(FILES.DEV.CSS.INDEX))
            .pipe(gulpif(config.isCompressed, csso()))
            .pipe(gulp.dest(isBuild ? DIR.BUILD.CSS : DIR.DEV.CSS))
            .pipe(gulpif(!isBuild, reload()));
    });

    gulp.task('preprocess', function () {
        return gulp.src(FILES.DEV.HTML.INDEX)
            .pipe(preprocess({
                context: {
                    isBuild: isBuild,
                    isCompressed: config.isCompressed,
                    debug: config.debug
                }
            }))
            .pipe(gulpif(config.isCompressed, minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            })))
            .pipe(rename('index.html'))
            .pipe(gulp.dest(isBuild ? BUILD_DIR : DEV_DIR))
            .pipe(gulpif(!isBuild, reload()));
    });

    /**
     * PRODUCTION tasks
     */

    gulp.task('compile-scripts', function () {
        var requirejs = require('requirejs');
        return requirejs.optimize(RJS_CONFIG);
    });

    /**
     * Starts a local server
     * - checks that domain in config is available, otherwise uses localhost
     * - checks if port in conifg is opened, otherwise tries to search for a opened
     */
    gulp.task('server', function () {
        var historyApiFallback = require('connect-history-api-fallback');
        var open = require('gulp-open');
        var rootDir = isBuild ? BUILD_DIR : DEV_DIR;

        connect.server({
            root: rootDir,
            host: localConfig.host,
            port: localConfig.port,
            livereload: {
                port: localConfig.livereloadPort
            },
            middleware: function () {
                return [proxyApi, historyApiFallback];
            }
        });

        if (localConfig.previewInBrowser) {
            gulp.src(rootDir + '/index.html')
                .pipe(open('', {
                    url: 'http://' + localConfig.host + ':' + localConfig.port,
                    app: localConfig.defaultBrowser
                }));
        }

    });

    function proxyApi(req, res, next) {
        var request = require('request');

        if (req.url.indexOf(localConfig.apiUrlPattern) === -1) {
            return next();
        }

        console.log('ProxyURL:', localConfig.api + req.url);
        return req.pipe(request(localConfig.api + req.url)).pipe(res, {
            end: true
        });
    }

})();
