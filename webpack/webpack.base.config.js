const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const configResolve = require('./resolve');

module.exports = options => ({
  devtool: options.devtool,
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: options.output.filename,
    path: options.output.path,
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      options.module.rules.scss,
      options.module.rules.css,
      options.module.rules.image,
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: options.plugins,
  resolve: configResolve.resolve,
  mode: options.mode,
});
