var path = require("path")
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'a.html',
            title: 'a',
            inject: false,
            excludeChunks: ['b', 'c']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'b.html',
            title: 'b',
            inject: false,
            chunks: ['main', 'b']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'c.html',
            title: 'c',
            inject: false,
            chunks: ['main', 'c']
        })
    ]
}