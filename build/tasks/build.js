var gulp = require('gulp');
var webpack = require('webpack-stream');
var paths = require('../paths');
var webpackConfig = require('../../webpack.config.js');


var jsName = (paths.packageName + '.js').toLowerCase();

gulp.task('build', ['clean'], function () {
    return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(webpackConfig.output.path));
});
