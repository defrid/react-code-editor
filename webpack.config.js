var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'font-awesome-webpack',
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'app')
        }, {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'app')
        }, {
            test: /\.scss$/,
            loaders: ["style", 'css?sourceMap', 'sass?sourceMap']
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }, {
            test: /\.txt$/,
            loader: 'raw-loader',
        }, {
            test: /\.(png|jpg|jpeg|gif)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000',
        }, {
            test: /\.(wav|mp3|pdf|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.css$/,
            loader: 'style!css?modules',
            include: /flexboxgrid/,
        }]
    }
};
