const path = require('path');
const SRC_DIR = path.resolve(__dirname, './src');
const PUB_DIR = path.resolve(__dirname, './public');

module.exports = {
  entry: SRC_DIR,
  output: { path: PUB_DIR, filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
            // options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
