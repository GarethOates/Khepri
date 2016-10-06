var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app/index',
    output: {
        path: __dirname + '/dist',
        filename: 'scripts/app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/index.html',
                to: './index.html'
            },
            {
                context: 'src/app/components',
                from: '**/*.css',
                to: './styles'
            },
            {
                context: 'node_modules/bootstrap/dist/css',
                from: '*.css',
                to: './styles/bootstrap'
            }
        ])
    ],
    module: {
        preLoaders: [{
            test: /\.tag$/,
            exclude: /node_modules/,
            loader: 'riotjs-loader',
            query: {
                type: 'none',
            }
        }],
        loaders: [
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
