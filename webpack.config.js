var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");


module.exports = {
    entry: './src/main.js',

    output: {
        filename: 'consumerjs.js',
        libraryTarget: 'umd',
        path: __dirname + '/dist/',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                presets: [
                    'es2015',
                ]
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],

    resolve: {
        root: [
            __dirname + '/src/',
        ]
    },

    target: 'node',
    externals: [nodeExternals()]
};
