const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  resolve: {
    extensions: ['.jsx', '.js', 'css'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|png|jpg|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        parallel: true
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
