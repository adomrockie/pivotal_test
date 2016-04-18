var path = require('path');
var webpack = require('webpack');
var htmlWebPackPlugin = require('html-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {
  entry: './app/index.js',
  output: { path: __dirname + '/dist/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
       
      },
       { test: /\.css$/, loader: "style-loader!css-loader" },
       { test: /\.png$/, loader: "url-loader?limit=100000" },
      	{ test: /\.jpg$/, loader: "file-loader" }
    ]
  },
 plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebPackPlugin({
      inject: true,
      template: 'app/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],	
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};