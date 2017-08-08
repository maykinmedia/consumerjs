var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');


module.exports = {
    entry: './src/index.js',
    //externals: [nodeExternals()],
    target: 'node',

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
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
