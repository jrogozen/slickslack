var webpack = require('webpack');
var path = require('path');
var config = require('./config');

var plugins = [
  // require 'react/addons' when we require 'react'
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons')
];

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: [
    'webpack-dev-server/client?http://localhost:' + config.server.webpackPort,
    'webpack/hot/dev-server',
    './app/rehydrate.js'
  ],

  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:' + config.server.webpackPort + '/public/'
  },

  plugins: plugins,

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'jsx?harmony'],
        exclude: /node_modules/
      }
    ]
  }
};