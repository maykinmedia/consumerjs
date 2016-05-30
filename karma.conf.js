var paths = require('./build/paths');


module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['Chrome'],
        frameworks: ['jspm', 'jasmine-ajax', 'jasmine', 'es6-shim'],
        reporters: ['coverage', 'spec',],
        singleRun: true,

        coverageReporter: {
            reporters: [
                {type: 'cobertura', subdir: '.', file: 'js.xml'},
                {type: 'html', subdir: 'html', file: 'js.html'},
            ]
        },

        jspm: {
            config: 'config.js',
            loadFiles: [paths.tests],
            serveFiles: [
                'jspm_packages/**/*',
                'src/*',
                'dist/*',
            ]
        },

        preprocessors: {
          'dist/*.js': ['coverage'],
        },

        proxies: {
            '/jspm_packages/': '/base/jspm_packages/',
            '/tests/': '/base/tests/',
            '/src/': '/base/src/',
            '/dist/': '/base/dist/',
        },
    });
};
