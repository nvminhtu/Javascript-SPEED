var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/entry.jsx',
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname + '/build',
    publicPath: __dirname + '/build/static',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=latest,presets[]=react'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader']
      },
      {
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      warnings: false,
    }),
    new ExtractTextPlugin("bundle.css")
  ]
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
