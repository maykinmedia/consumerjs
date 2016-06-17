module.exports = {
    entry: './dist/consumerjs.js',

    output: {
        filename: 'consumerjs.js',
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

    resolve: {
        root: [
            __dirname + '/src/',
        ]
    }
};
