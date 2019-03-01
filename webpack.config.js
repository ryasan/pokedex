const path = require('path');
const SRC_DIR = path.resolve(__dirname, './client/src');
const PUB_DIR = path.resolve(__dirname, './client/public');

module.exports = {
  entry: ['babel-polyfill', SRC_DIR], // enables async await
  output: { path: PUB_DIR, filename: 'bundle.js' },
  devServer: {
    contentBase: PUB_DIR, // serve static files from here
    watchContentBase: true, // initiate a page refresh if static content changes
    proxy: [
      // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/auth'], // can have multiple
        target: 'http://localhost:1128', // server and port to redirect to
        secure: false
      }
    ],
    port: 3000, // port webpack-dev-server listens to, defaults to 8080
    overlay: {
      // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: true, // default false
      errors: true //default false
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader?name=[name].[ext]' // retain original file name
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
