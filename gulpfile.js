'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyJS = require('gulp-minify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack-stream');




// gulp.task('default', () =>
//     gulp.src('src/**/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             presets: ['env']
//         }))
//         .pipe(concat('all.js'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist'))
// );

gulp.task('style', function () {
  return gulp.src('src/index.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('concat', function() {
    return gulp.src('src/*.js')
        .pipe(sourcemaps.init())
    	.pipe(babel())
    	.pipe(concat('bundle.min.js'))
    	.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', function(){
  gulp.start('concat');
  gulp.start('style');
  gulp.src('src/index.html').pipe(gulp.dest('./dist/'));
  gulp.src('src/main/main.js').pipe(gulp.dest('./dist/'));
})

gulp.task('serve', function () {

  gulp.start('build');
  electron.start();

  // Restart browser process
  gulp.watch('src/main/main.js', ['build', electron.restart]);
  gulp.watch('src/*', ['build', electron.reload]);

  // Reload renderer process
  // gulp.watch(['dist/renderer.js', 'dist/index.html'], ['compress', electron.reload]);
});
