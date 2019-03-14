var path = require('path');
var hwp = require('html-webpack-plugin');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 8083,
        // host: '0.0.0.0',
        historyApiFallback: true,
    },

    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules\/(?!(mineko-design)\/).*/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                loader: require.resolve('url-loader'),
            },

        ]
    },

    plugins: [
        new hwp({template: path.join(__dirname, '/src/index.html')})
    ]
}
