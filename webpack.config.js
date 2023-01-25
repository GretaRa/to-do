const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To-do',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
        filename: 'today.html',
        title: 'To-do',
        template: 'src/today.html'
      }),
    new HtmlWebpackPlugin({
      filename: 'weekly.html',
      title: 'To-do',
      template: 'src/weekly.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};