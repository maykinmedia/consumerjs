const fs = require('fs');

const appRoot = 'src/';
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
    packageName: pkg.name,
    doc: 'doc/',
    jsSpecEntry: 'test/index.js',
    jsSrcDir: appRoot,
    jsEntry: appRoot + 'index.js',
    output: 'dist/',
    source: appRoot + '**/*.js',
    tests: 'test/**/*.spec.js'
};
