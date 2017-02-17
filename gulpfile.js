'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	jshint = require('gulp-jshint'),
	ngAnnotate = require('gulp-ng-annotate'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch');

gulp.task('css', function (done) {
	gulp.src(['./styles.css', './components/**/*.css'])
		.pipe(concat('app.min.css'))
		.pipe(gulp.dest('./www/css/'))
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
	.pipe(gulp.dest('./www/js'));
});

gulp.task('js', function (done) {
	return watch([
		'./index.js',
		'./services/*.service.js',
		'./**/*.service.js',
		'./controllers/*.controller.js',
		'./components/**/*.controller.js',
		'./components/**/*.js'
	])
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(concat('app.min.js'))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(gulp.dest('./www/js'))
});

gulp.task('default', ['css', 'js-deps', 'js']);