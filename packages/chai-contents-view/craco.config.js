const CracoHtmlWebpackPlugin = require("craco-html-webpack-plugin");
const emotionBabelPlugin = require("@emotion/babel-plugin").default;

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
  babel: {
    plugins: [
      [
        emotionBabelPlugin,
        {
          autoLabel: "dev-only",
        },
      ],
    ],
  },
};
