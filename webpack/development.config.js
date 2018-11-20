const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectConfig = require('./project.config');

const extractCSS = new ExtractTextPlugin('styleCSS.css');

module.exports = require('./webpack.base.config')({
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: {
      scss: {
        test: /\.scss$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader?sourceMap',
          'postcss-loader',
        ],
      },
      css: {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      image: {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    },
  },
  plugins: [
    extractCSS,
    require('autoprefixer'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.NEEO_RATE': JSON.stringify(projectConfig.NEEORate),
      'process.env.NEEO_TO_ETH': JSON.stringify(projectConfig.NEEOtoETH),
      //'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL) || JSON.stringify(projectConfig.backendUrl),
    }),
    new HtmlWebpackPlugin({
      title: 'NEEO',
      template: path.join(__dirname, '../src/index.template.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    port: 3001,
    historyApiFallback: true,
  },
  mode: 'development',
});