var path = require('path');

module.exports = {
  // entry: TDB
  // output: {
  //   path: path.resolve(__dirname, TBD),
  //   filename: 'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  }
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
}