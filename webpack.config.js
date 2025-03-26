import HtmlWebpackPlugin from 'html-webpack-plugin'
import UnoCSS from '@unocss/webpack'

export default {
  mode: 'development',
  entry: './src/index.jsx',
  devServer: {
    static: './dist',
   hot: true,
  },
  plugins: [
    UnoCSS(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html'
    }),
  ],
  optimization: {
    realContentHash: true
  },
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