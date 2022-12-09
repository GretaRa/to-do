const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: '#',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'test.html',
        title: '#',
        template: 'src/today.html'
      }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};