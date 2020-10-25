const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require("webpack-merge"); // it's doing object assign

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({mode, presets} = { mode: "poduction", presets: [] }) => {
  console.log(mode);
  return merge(
    {
    mode,
    module: {
      rules: [
        {
          test: /\.jpe?g$/,
          use: "url-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin()
    ]
  },
  presetConfig({mode, presets}),
  modeConfig(mode)
  );
};
