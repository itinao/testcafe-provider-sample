const gulp        = require('gulp');
const eslint      = require('gulp-eslint');
const babel       = require('gulp-babel');
const del         = require('del');

function clean () {
    return del('lib');
}

function lint () {
    return gulp
      .src([
          'src/**/*.js',
          'test/**/*.js',
          'Gulpfile.js'
      ])  
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}

function build () {
    return gulp
        .src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
}


exports.clean = clean;
exports.lint  = lint;
exports.build = gulp.parallel(gulp.series(clean, build), lint);


//var gulp        = require('gulp');
//var babel       = require('gulp-babel');
//var mocha       = require('gulp-mocha');
//var del         = require('del');
//var nodeVersion = require('node-version');
//
//gulp.task('clean', function () {
//    return del('lib');
//});
//
//gulp.task('lint', function () {
//    // TODO: eslint supports node version 4 or higher.
//    // Remove this condition once we get rid of node 0.10 support.
//    if (nodeVersion.major === '0')
//        return null;
//
//    var eslint = require('gulp-eslint');
//
//    return gulp
//        .src([
//            'src/**/*.js',
//            'test/**/*.js',
//            'Gulpfile.js'
//        ])
//        .pipe(eslint())
//        .pipe(eslint.format())
//        .pipe(eslint.failAfterError());
//});
//
//gulp.task('build', ['clean', 'lint'], function () {
//    return gulp
//        .src('src/**/*.js')
//        .pipe(babel())
//        .pipe(gulp.dest('lib'));
//});
//
//gulp.task('test', ['build'], function () {
//    return gulp
//        .src('test/**.js')
//        .pipe(mocha({
//            ui:       'bdd',
//            reporter: 'spec',
//            timeout:  typeof v8debug === 'undefined' ? 2000 : Infinity // NOTE: disable timeouts in debug
//        }));
//});
