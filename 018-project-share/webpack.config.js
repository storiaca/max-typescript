const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      },
    }),
    new webpack.DefinePlugin({
      GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY),
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
