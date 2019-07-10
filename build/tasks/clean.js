var gulp = require('gulp');
var del = require('del');
var paths = require('../paths');


/**
 * Clean task
 * Run using "gulp clean"
 * Cleans output directory
 */
function clean(cb) {
    del([paths.output]);
    cb();
}

gulp.task('clean', clean);
exports.clean = clean;
