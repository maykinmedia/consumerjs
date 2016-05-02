var gulp = require('gulp');
var Server = require('karma').Server,Server = require('karma').Server;

var paths = require('../paths');

gulp.task('test', ['lint'], function (done) {
  new Server({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true,
  }, done).start();
});
