var paths = require('./build/paths');


module.exports = function(config) {
    config.set({
        autoWatch: true,
        singleRun: true,
        browsers: ['Chrome'],
        frameworks: ['jspm', 'jasmine', 'es6-shim'],
        reporters: ['spec'],

        jspm: {
            config: 'config.js',
            loadFiles: [paths.tests + '*.js'],
            serveFiles: [
                'jspm_packages/',
                'src/'
            ]
        },

        proxies: {
            '/jspm_packages/': '/base/jspm_packages/',
            '/tests/': '/base/tests/',
        },
    });
};
