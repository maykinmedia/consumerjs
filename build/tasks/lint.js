var gulp = require('gulp');
var jshint = require('gulp-jshint');

var paths = require('../paths');

gulp.task('lint', function() {
  return gulp.src([paths.source, paths.tests])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});