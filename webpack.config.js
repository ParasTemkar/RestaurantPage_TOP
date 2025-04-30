const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve files from the "dist" directory
    watchFiles: ["./src/index.html"],       // Watch for changes in the HTML file
    port: 8080,                             // Optional: Specify the port (default is 8080)
    open: true,                             // Automatically open the browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      /* If there are images in HTML as src of <img>
      {
        test: /\.html$/i,
        loader: "html-loader",
      }, 
      */

        /* if there are images in JS files.
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      */
    ],
  },
};
