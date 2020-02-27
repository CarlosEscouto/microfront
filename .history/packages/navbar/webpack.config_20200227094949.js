/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/navbar.js'),
  output: {
    filename: 'navbar.js',
    library: 'navbar',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build/navbar'),
  },
  mode: 'production',
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
				test: /\.vue$/,
				loader: 'vue-loader',
			},
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
			},
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build/navbar']),
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/navbar.js')},
      {from: path.resolve(__dirname, 'src/assets/styles.css')},
    ]),
    new VueLoaderPlugin()
  ],
  devtool: 'source-map',
  externals: [
    /^@portal\/*/,
    /^lodash$/,
    /^single-spa$/,
  ],
};

