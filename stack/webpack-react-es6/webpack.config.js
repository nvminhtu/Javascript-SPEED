module.exports = {
  entry: './src/entry.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
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
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    port: 8181
  },
};
