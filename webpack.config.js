var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './public/app/js/App.js',
        styles: './public/app/css/styles.css',
    },
    output: {
        filename: 'public/build/js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(nodule_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "public/build/css/[name].css"
        }),
    ]
}
