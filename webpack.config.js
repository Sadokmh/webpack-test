const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require("webpack-merge"); // it's doing object assign

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({mode, presets} = { mode: "poduction", presets: [] }) => {
  console.log(mode);
  return merge(
    {
    mode,
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin()
    ]
  },
  modeConfig(mode)
  );
};
