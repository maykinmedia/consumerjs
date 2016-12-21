var clone= require('clone');
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


// The main configuration
module.exports = function(config) {
    config.set({
        frameworks: [
            'jasmine-ajax',
            'jasmine'
        ],

        files: [
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

        browsers: ['Chrome', 'Firefox'],
    })
}
