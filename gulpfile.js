'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('start', function() {
  // place code for your default task here
  //.pipe('npm start');
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
