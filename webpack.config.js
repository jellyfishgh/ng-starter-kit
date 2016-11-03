var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: ['./src/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/',
        filename: 'bundle.min.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}