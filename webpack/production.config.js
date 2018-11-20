const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectConfig = require('./project.config');

const extractCSS = new ExtractTextPlugin('styleCSS_[hash:10].css');
// console.log('process.env.BACKEND_URL: ', JSON.stringify(process.env.BACKEND_URL) || JSON.stringify(projectConfig.backendUrl));
module.exports = require('./webpack.base.config')({
  devtool: false,
  output: {
    filename: 'bundle_[hash:10].js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: {
      scss: {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      css: {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      image: {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: false,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      title: 'NEEO',
      template: path.join(__dirname, '../src/index.template.html'),
      filename: 'index.html',
    }),
    // new BundleAnalyzerPlugin(),
  ],
  mode: 'production',
});
