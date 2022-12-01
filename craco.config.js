const CracoHtmlWebpackPlugin = require("craco-html-webpack-plugin");

module.exports = {
  plugins: [
    {
      plugin: CracoHtmlWebpackPlugin,
      options: {
        skipPreflightCheck: true,
        options: {
          inject: true,
          title: "HtmlWebpackPlugin",
          hash: true,
          minify: false,
          template: "./public/index.html",
        },
      },
    },
  ],
};
