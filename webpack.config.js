var path = require('path');
var hwp = require('html-webpack-plugin');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 8085,
        historyApiFallback: true,
    },

    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    },
    plugins: [
        new hwp({template: path.join(__dirname, '/src/index.html')})
    ]
}
