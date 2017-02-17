'use strict';

const gulp = require('gulp'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	jshint = require('gulp-jshint'),
	ngAnnotate = require('gulp-ng-annotate'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	sourceMaps = require('gulp-sourcemaps');

gulp.task('watch', function () {
  gulp.watch('www/app/**/*.js', ['scripts']);
  gulp.watch('www/app/**/*.css', ['css']);
});

gulp.task('css', function (done) {
	gulp.src(['./styles.css', './www/app/**/*.css'])
		.pipe(concat('app.min.css'))
		.pipe(gulp.dest('./www/dist/css/'))
		.pipe(minifyCss())
		.on('end', done);
});

gulp.task('js-deps', function (done) {
	gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/angular/angular.min.js',
		'./node_modules/angular-route/angular-route.min.js',
	])
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest('./www/dist/js'));
});

gulp.task('scripts', function () {
  let baseDir = __dirname + '/www/app',
    outputDir = __dirname + '/www/dist/js',
    outputFilename = 'app.min.js';

  gulp.src([
    baseDir + "/index.js",
    baseDir + "/**/*service.js",
    baseDir + "/**/*.js"
  ])
    .pipe(sourceMaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat(outputFilename))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(outputDir));
});

gulp.task('dev', ['css', 'js-deps', 'scripts', 'watch']);
gulp.task('default', ['css', 'js-deps', 'scripts']);