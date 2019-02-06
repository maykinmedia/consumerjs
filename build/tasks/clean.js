var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');


/**
 * Clean task
 * Run using "gulp clean"
 * Cleans output directory
 */
function clean(cb) {
    del([paths.doc, paths.output]);
    cb();
}

gulp.task('clean', clean);
exports.clean = clean;
