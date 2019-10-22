const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack')
var config =  {
    entry: {
        'vue-wordcloud': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'VueWordcloud',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                },
            }, {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'less-loader',
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

module.exports = config