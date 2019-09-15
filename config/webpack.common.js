const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.p?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader']
      },
      {
        test: /\.(svg|png|jpg|woff2|woff|eot|ttf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
