var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src', 'index.jsx')
    ],

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src', 'global'),
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader'
                ]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'src', 'global'),
                loaders: [
                    'style-loader?sourceMap',
                    // 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react']
                }
            }
        ],
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        // do not print bundle build stats
        // noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        // historyApiFallback: true,
        // port: '127.0.0.1',
        // host: '8888',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'template.html')
        }),
    ],

    postcss: function() {
        return [
            require('autoprefixer'),
            // require('react-css-modules'),
        ]
    }
}
