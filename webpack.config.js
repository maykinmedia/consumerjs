var argv = require('yargs').argv;
var nodeExternals = require('webpack-node-externals');
var paths = require('./build/paths');


var isProduction = process.env.NODE_ENV === 'production';
if (argv.production) {
    isProduction = true;
}


module.exports = {
    // Path to the js entry point (source).
    entry: {
        consumerjs: __dirname + '/' + paths.jsEntry,
    },

    // Path to the (transpiled) js
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
    },

    // Use externals (don't bundle dependencies).
    externals: [nodeExternals()],
    target: 'node',

    // Use --production to optimize output.
    mode: isProduction ? 'production' : 'development',

    // Add babel (see .babelrc for settings)
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /.js?$/
            }
        ]
    },

    // Use --sourcemap to generate sourcemap.
    devtool: argv.sourcemap ? 'sourcemap' : false,
};
