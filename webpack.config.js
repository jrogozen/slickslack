var webpack = require('webpack');

var plugins = [
  // require 'react/addons' when we require 'react'
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons')
];

module.exports = {
  entry: './app/AppRoutes.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony',
        exclude: /node_modules/
      }
    ]
  },
  plugins: plugins
};