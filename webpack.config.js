const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: 'Hello',
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
                {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};