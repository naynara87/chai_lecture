const emotionBabelPlugin = require("@emotion/babel-plugin").default;

module.exports = {
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
