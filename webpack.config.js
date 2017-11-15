var path = require("path")
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './src/'),
                options: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)/i,
                use: [
                    {
                        // loader: 'file-loader',
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'assets/[name].[hash:5].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ], 
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'tpl.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}