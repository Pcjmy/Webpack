const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FooterPlugin = require('./plugin/FooterPlugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          }
        }, 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'img/[name].[ext]',
            esModule: false,
            // 小于10KB的图片转换为base64
            limit: 10000,
          }
        }
      },
      {
        test: /\.(htm|html)$/,
        loader: 'html-withimg-loader',
      },
      {
        test: /\.imooc$/,
        use: [path.resolve(__dirname, './loader/imooc-loader.js')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new FooterPlugin({
      banner: 'FooterPlugin',
    })
  ]
};
