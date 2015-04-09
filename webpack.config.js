var webpack = require('webpack');

var plugins = [
  // require 'react/addons' when we require 'react'
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons')
];

if (process.env.NODE_ENV === "production") {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }));
}

module.exports = {
  entry: './app/index.jsx',
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