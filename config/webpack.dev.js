const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: ['react-hot-loader/patch', './src/index.js'],
  resolve: {
    extensions: ['.jsx', '.js', 'css'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  stats: 'errors-warnings',
  devServer: {
    historyApiFallback: true,
    hotOnly: true,
    contentBase: './'
  }
});
