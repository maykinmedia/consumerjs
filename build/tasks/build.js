var gulp = require('gulp');
var webpack = require('webpack-stream');
var paths = require('../paths');
var webpackConfig = require('../../webpack.config.js');


/**
 * Build task
 * Run using "gulp build"
 * Runs webpack to compile javascript
 */
function build() {
    return gulp.src(paths.jsEntry)
        .pipe(webpack(webpackConfig))
            .on('error', function () {
              this.emit('end');
            })
        .pipe(gulp.dest(webpackConfig.output.path));
}

gulp.task('build', build);
exports.build = build;
