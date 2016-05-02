var gulp = require('gulp');
var jshint = require('gulp-jshint');

var paths = require('../paths');

var jsName = paths.packageName + '.js';

gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});