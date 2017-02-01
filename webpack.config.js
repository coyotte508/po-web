const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: "./app/assets/javascript/frontend.js",
  output: {
    path: path.join(__dirname, "public/javascript"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.css/, loader: "style!css"}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ $: 'jquery', jquery: 'jquery', jQuery: 'jquery' })
  ]
}
