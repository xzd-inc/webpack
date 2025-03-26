const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
   hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 使用babel-loader处理JS和JSX文件
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};