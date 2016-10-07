var webpackConfig = require('./webpack.config.js');


// Add istanbul-instrumenter to webpack configuration
webpackConfig.module.loaders.push(
    {
        test: /\.js$/,
        exclude: /(node_modules|test)/,
        loader: 'babel-istanbul-loader'
    }
);


// The main configuration
module.exports = function(config) {
    config.set({
        frameworks: [
            'jasmine-ajax',
            'jasmine'
        ],

        files: [
            'node_modules/babel-polyfill/dist/polyfill.min.js',
            'test/*.spec.js',
        ],

        preprocessors: {
            'test/*.spec.js': [
                'webpack'
            ],
        },

        coverageReporter: {
            dir: 'build/reports/coverage',
            reporters: [{
                type: 'html',
                subdir: 'report-html'
            }, {
                type: 'lcov',
                subdir: 'report-lcov'
            }, {
                type: 'cobertura',
                subdir: '.',
                file: 'cobertura.txt'
            }]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        reporters: ['spec', 'coverage'],

//        browsers: ['Chrome', 'Firefox', 'Edge', 'IE', 'Android', 'iOS'],
        browsers: ['Chrome', 'Firefox'],

        customLaunchers: {
            Edge: {
                base: 'BrowserStack',
                browser: 'Edge',
                browser_version: '14',
                os: 'Windows',
                os_version: '10'
            },

            IE: {
                base: 'BrowserStack',
                browser: 'IE',
                browser_version: '11',
                os: 'Windows',
                os_version: '10'
            },

            Android: {
                base: 'BrowserStack',
                device: 'Samsung Galaxy S5',
                os: 'Android',
                os_version: '4.4'
            },

            iOS: {
                base: 'BrowserStack',
                device: 'iPhone 6S',
                os: 'ios',
                os_version: '9.0'
            }
        },

        browserStack: {
//            username: '',
//            accessKey: ''
        }
    });
}
