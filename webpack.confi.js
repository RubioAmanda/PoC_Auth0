var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var dotenv = require('dotenv').config();


module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/App.js",
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.min.js"
  },
  query: {
    presets: ['react', 'es2015', 'react-hmre'],
    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
    loader: ['react-hot'],
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new dotenv(),
  ],
};