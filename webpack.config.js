const path = require('path');

module.exports = {
  entry: {
    bundle: './src/modules/index.ts'
  },
  output: {
    path: path.join(__dirname, 'src/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src')
    },
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
