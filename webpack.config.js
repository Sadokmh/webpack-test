const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({mode}) => {
  console.log(mode);
  return {
    mode,
    output: {
      filename: "sadokFirstBundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin()
    ]
  }
  

};
