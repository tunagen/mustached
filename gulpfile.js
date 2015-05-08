/**
 * Created by jean on 5/8/15.
 */
var uglify = require('gulp-uglify'),
    cssMinify = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    combiner = require('stream-combiner2'),
    del = require('del'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync'),
    ngAnnotate = require('gulp-ng-annotate'),
    lib = require('bower-files')();

var distFolder = 'public/';

gulp.task('api-concat-uglify', function () {
    gulp.src(lib.ext('js').files)
        .pipe(sourcemaps.init())
            .pipe(concat('lib.min.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(distFolder + '/vendor/js'));
});

gulp.task('css-minify', function() {
    gulp.src(lib.ext('css').files)
        .pipe(cssMinify())
        .pipe(concat('lib.min.css'))
        .pipe(gulp.dest(distFolder + '/vendor/css'));
});

gulp.task('font-copy', function() {
    gulp.src(lib.ext(['eot', 'woff', 'woff2', 'ttf', 'svg']).files)
        .pipe(gulp.dest(distFolder + '/vendor/fonts'));
});

gulp.task('default', ['api-concat-uglify', 'css-minify', 'font-copy'],
    function() {});