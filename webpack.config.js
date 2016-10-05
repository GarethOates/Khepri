var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app/index',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new CopyWebpackPlugin([{
                from: './src/index.html', to: './index.html'
        }])
    ],
    module: {
        preLoaders: [{
            test: /\.tag$/,
            exclude: /node_modules/,
            loader: 'riotjs-loader',
            query: {
                type: 'none',
                modular: true
            }
        }],
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$|\.tag$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                     presets: ['es2015']
                 }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.tag']
    },
    devServer: {
        contentBase: './dist'
    }
};
