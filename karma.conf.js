var paths = require('./build/paths');


module.exports = function(config) {
    config.set({
        autoWatch: true,
        singleRun: true,
        browsers: ['Chrome'],
        frameworks: ['jspm', 'jasmine-ajax', 'jasmine', 'es6-shim'],
        reporters: ['spec'],

        jspm: {
            config: 'config.js',
            loadFiles: [paths.tests],
            serveFiles: [
                'jspm_packages/**/*',
                'src/*',
                'dist/*',
            ]
        },

        proxies: {
            '/jspm_packages/': '/base/jspm_packages/',
            '/tests/': '/base/tests/',
            '/src/': '/base/src/',
            '/dist/': '/base/dist/',
        },
    });
};
