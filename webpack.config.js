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
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=1',
        include: path.resolve(ROOT_PATH, 'app'),
      },
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ],
  },
};

/*
if (TARGET === 'build') {
  module.exports = common;
}
*/
console.log('IP is ' + process.env.IP);
console.log('PORT is ' + process.env.PORT);
//if (TARGET === 'dev') {
  module.exports = merge(common, {
    entry: [
      'webpack-dev-server/client?https://' + process.env.IP + ':' + process.env.PORT,
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
//}
