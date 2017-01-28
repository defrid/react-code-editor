const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    publicPath: '/',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    })
  ],resolve: {
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ],
    extensions: ['*', '.js', '.jsx', '.css']
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loaders: ['eslint-loader'],
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'app')
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    }, {
      test: /\.txt$/,
      use: 'raw-loader',
    }, {
      test: /\.(png|jpg|jpeg|gif)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000'
    }, {
      test: /\.(wav|mp3|pdf|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'file-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff'
    }]
  }
};
