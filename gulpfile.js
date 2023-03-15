var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require("gulp-jshint");
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');

gulp.task('default', ['scripts', 'styles'], function () { });

gulp.task('scripts', function () {

  var files = [
    'assets/scripts/src/script.js',
  ];

  var slick = [
    'assets/scripts/src/slick.js',
  ];

  gulp.src(files)
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/scripts/dist'));

  gulp.src(slick)
    .pipe(concat('slick.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/scripts/dist'));
});

gulp.task('styles', function () {

  var files = [
    'assets/styles/src/style.css',
    'assets/styles/src/fonts.css',
    'assets/styles/src/mobile.css',
  ];

  var slider = [
    'assets/styles/src/slider.css'
  ]

  gulp.src(files)
    .pipe(concat('style.min.css'))
    .pipe(autoprefix('last 4 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/styles/dist/'));

  gulp.src(slider)
    .pipe(concat('slider.min.css'))
    .pipe(autoprefix('last 4 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/styles/dist/'));
});

gulp.task('watch', function () {
  gulp.watch('assets/scripts/src/*.js', ['scripts']);
  gulp.watch('assets/styles/src/*.css', ['styles']);
});

gulp.task('server', ['watch'], function () {

  var files = [
    '*.html',
    'assets/styles/dist/*.css',
    'assets/styles/src/*.css',
    'assets/scripts/dist/*.js',
    'assets/scripts/src/*.js'
  ];

  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  });
});