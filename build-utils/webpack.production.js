const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
    devtool: "source-map",
    output: {
      filename: "sadokProdBundle.js"
      // filename: "[chunkhash].js" // indicate to webpack that we want a hashed filename
    },
    module: {
      rules: [
        {
          test:/\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [ new MiniCssExtractPlugin()]
  });