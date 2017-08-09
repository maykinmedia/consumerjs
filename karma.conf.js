var clone= require('clone');
var paths = require('./build/paths');
var webpackConfig = clone(require('./webpack.config.js'));


// Add istanbul-instrumenter to webpack configuration
webpackConfig.module.loaders.push(
    {
        test: /\.js$/,
        exclude: /(node_modules|test)/,
        loader: 'babel-istanbul-loader'
    }
);

webpackConfig.output.filename += '.test';
webpackConfig.plugins = [];
webpackConfig.externals = [];


function ConfigException(message) {
   this.message = message;
   this.name = 'ConfigException';
}


// The main configuration
module.exports = function(config) {
    if (process.env.CI && (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY)) {
        throw ConfigException('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.')
    }

    // https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
    var customLaunchers = {
//        sl_chrome: {
//            base: 'SauceLabs',
//            browserName: 'chrome',
//            platform: 'Windows 10',
//            version: 'latest'
//        },
//        sl_chrome_2: {
//            base: 'SauceLabs',
//            browserName: 'chrome',
//            platform: 'Windows 10',
//            version: 'latest-1'
//        },
        sl_edge: {
            base: 'SauceLabs',
            browserName: 'MicrosoftEdge',
            platform: 'Windows 10',
            version: 'latest'
        },
//        sl_edge_2: {
//            base: 'SauceLabs',
//            browserName: 'MicrosoftEdge',
//            platform: 'Windows 10',
//            version: '14.14393'
//        },
//        sl_safari: {
//            base: 'SauceLabs',
//            browserName: 'safari',
//            platform: 'macOS 10.12',
//            version: 'latest'
//        },
//        sl_safari_2: {
//            base: 'SauceLabs',
//            browserName: 'safari',
//            platform: 'OS X 10.11',
//            version: '9.0'
//        },
//        sl_firefox: {
//            base: 'SauceLabs',
//            browserName: 'firefox',
//            platform: 'Windows 10',
//            version: 'latest'
//        },
//        sl_firefox_2: {
//            base: 'SauceLabs',
//            browserName: 'firefox',
//            platform: 'Windows 10',
//            version: 'latest-1'
//        },
//        sl_ie_11: {
//            base: 'SauceLabs',
//            browserName: 'internet explorer',
//            platform: 'Windows 8.1',
//            version: '11'
//        }
    }

    config.set({
        coverageReporter: {
            reporters: [
                { type: 'lcov', dir: paths.coverageDir },
                { type: 'text' }
            ]
        },

        files: [
            'test/*.spec.js'
        ],

        frameworks: [
            'jasmine-ajax',
            'jasmine'
        ],

        preprocessors: {
            'test/*.spec.js': [
                'webpack'
            ]
        },

        sauceLabs: {
            build: 'process.env.TRAVIS_BUILD_NUMBER',
            testName: 'consumerjs browser testing',
            logfile: './saucelabs.log',
            public: 'public',
            tunnelIdentifier: 'autoGeneratedTunnelID',
            docktor: true,
            
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        browserNoActivityTimeout: 300000,
        captureTimeout: 300000,
        colors: true,
        concurrency: 5,
        customLaunchers: customLaunchers,
        retryLimit: 5,
        singleRun: false,

        browsers: (process.env.TRAVIS) ? Object.keys(customLaunchers) : ['Chrome', 'Firefox'],
        reporters: (process.env.TRAVIS) ? ['spec', 'coverage', 'saucelabs', 'coveralls'] : ['spec', 'coverage']
    });
}
