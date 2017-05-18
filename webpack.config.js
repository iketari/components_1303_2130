const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.pug$/, use: 'pug-loader'},
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
    ]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
};