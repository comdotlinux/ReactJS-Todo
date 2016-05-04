var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

//var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: [path.resolve(ROOT_PATH, 'app/main')],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
     new HtmlWebpackPlugin({ title: 'Todo app', }),
  ],
  module: {
    loaders: [
      {test: /\.css$/, loaders: ['style', 'css'], },
      {test: /\.jsx?$/, loader: 'babel?stage=1', include: path.resolve(ROOT_PATH, 'app'), },
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff", },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream", },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file", },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml", }
    ],
  },
};

var ip_address = process.env.IP || 'localhost';
var port = process.env.PORT || 8080;
var target = process.env.TARGET || 'dev';


console.log('IP is ' + ip_address);
console.log('PORT is ' + port);

if (target === 'build') {
  module.exports = common;
}

if (target === 'dev') {
  module.exports = merge(common, {
    entry: [
      'webpack-dev-server/client?https://' + ip_address + ':' + port,
      'webpack/hot/dev-server'
    ],
    module: {
      loaders: [ {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel?stage=1'],
          include: path.resolve(ROOT_PATH, 'app'),
        },
      ],
    },
  });
}
