var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  packageName: pkg.name,
  doc: 'doc/',
  output: 'dist/',
  source: appRoot + '**/*.js',
  tests: 'test/**/*.spec.js'
};
