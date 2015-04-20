var webpack = require('webpack');
var path = require('path');
var config = require('./config');

module.exports = {
    target: 'web',
    cache: true,
    debug: true,
    context: __dirname,
    devtool: "eval",

    resolve: {
        modulesDirectories: [
            "app",
            "node_modules"
        ],
        extensions: ['', '.js', '.jsx']
    },

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/rehydrate.js',
    ],

    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'client.js',
        chunkFilename: '[name].[id].js',
        hotUpdateChunkFilename: 'update/[hash]/[id].update.js',
        hotUpdateMainFilename: 'update/[hash]/update.json',
        publicPath: 'http://localhost:8080/public/'
    },

    node: {
        __dirname: true,
        fs: "empty",
        net: "empty",
        tls: "empty",
        console: true
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons'),
    ],

    module: {
        loaders: [{
            include: /\.json$/,
            loaders: ["json-loader"]
        }, {
            include: /\.jsx$/,
            loaders: ["react-hot", "babel-loader"],
            exclude: /node_modules/
        }, {
            test: /\.(otf|eot|svg|ttf|woff)/,
            loader: 'url-loader?limit=8192'
        }]
    },

    devServer: {
        publicPath: "http://localhost:8080/public/",
        contentBase: "./public",
        hot: true,
        inline: true,
        lazy: false,
        quiet: true,
        noInfo: false,
        stats: {
            colors: true
        }
    }
};
