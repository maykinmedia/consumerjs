module.exports = {
    entry: [
        './src/consumer',
        './src/consumer-object',
    ],

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
            __dirname + '/dist/',
            __dirname + '/src/',
        ]
    }
};
