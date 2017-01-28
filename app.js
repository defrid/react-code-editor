const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');

const port = 3000;
const ip = 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}).listen(port, ip, function (err) {
  if(err) {
    return console.log(err);
  }

  console.log('Listening at ' + ip + ':' + port);
});
