/**
 * Created by jean on 5/8/15.
 */
var uglify = require('gulp-uglify'),
    cssMinify = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync'),
    ngAnnotate = require('gulp-ng-annotate'),
    lib = require('bower-files')(),
    less = require('gulp-less'),
    path = require('path');

var distFolder = 'public/';

gulp.task('api-concat-uglify', function () {
    gulp.src(lib.self()
        .dev()
        .ext('js')
        .match('!**/*.min.js')
        .join({js: ['js', 'jsx']})
        .files)
        .pipe(sourcemaps.init())
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(distFolder + '/vendor/js'));
});

gulp.task('app-js-uglify', function () {
    gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(distFolder + '/js'));
});

gulp.task('api-css-minify', function () {
    gulp.src(lib.self()
        .dev()
        .ext('css')
        .match('!**/*.min.css')
        .files)
        .pipe(cssMinify())
        .pipe(concat('lib.min.css'))
        .pipe(gulp.dest(distFolder + '/vendor/css'));
});

gulp.task('app-css-minify', ['app-less-css'], function () {
    gulp.src('src/css/**/*')
        .pipe(cssMinify())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(distFolder + '/css'));
});

gulp.task('remove-less-compiled', function() {
    del('src/css/app.css');
});

gulp.task('app-less-css', ['remove-less-compiled'], function () {
    return gulp.src('./src/less/app.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('api-font-copy', function () {
    gulp.src(lib.ext(['eot', 'woff', 'woff2', 'ttf', 'svg']).files)
        .pipe(gulp.dest(distFolder + '/vendor/fonts'));
});

gulp.task('app-copy-font', function() {
    gulp.src('src/fonts/*.woff')
        .pipe(gulp.dest(distFolder + '/fonts'));
});

gulp.task('app-copy-html', function () {
    gulp.src('src/html/**/*.html')
        .pipe(gulp.dest(distFolder + '/'));
});

gulp.task('browser-sync', function () {
    browserSync({
        //        server: {
        //            baseDir: "./"
        //        }
        proxy: 'http://localhost:3000',
        files: ['public/**']
    });
});

gulp.task('watch', function () {
    // Create LiveReload server
    //livereload.listen();
    //gulp.start('start');
    gulp.start('browser-sync');
    // Watch any files in src/, reload on change
    gulp.watch('src/**/*', [
        'app-copy-font',
        'app-css-minify',
        'app-js-uglify',
        'app-copy-html'
    ]);
});

gulp.task('clean', function () {
    del(distFolder);
});

gulp.task('build', [
        'api-concat-uglify',
        'api-css-minify',
        'api-font-copy',
        'app-copy-font',
        'app-css-minify',
        'app-js-uglify',
        'app-copy-html'
    ],
    function () {
    });

gulp.task('default', ['build'],
    function () {
    });