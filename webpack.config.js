const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'app')
    }, {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'app')
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.txt$/,
      loader: 'raw-loader',
    }, {
      test: /\.(png|jpg|jpeg|gif)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      query: {
        limit: '10000'
      }
    }, {
      test: /\.(wav|mp3|pdf|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      query: {
        limit: '10000',
        minetype: 'application/font-woff'
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules',
      include: /flexboxgrid/,
    }]
  }
};
