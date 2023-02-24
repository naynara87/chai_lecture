import Ts from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";

export default {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true, // preserve source folder
  },
  plugins: [
    scss({
      output: "./dist/globalStyle.css",
      fileName: "globalStyle.css",
      failOnError: true,
      watch: "src/styles/scss",
    }),
    Ts(),
    image(),
    copy({
      targets: [
        { src: "src/fonts/", dest: "dist" },
        { src: "src/images/", dest: "dist" },
      ],
    }),
  ],
  external: [
    "@emotion/react",
    "@emotion/styled",
    "@mui/material",
    "@emotion/react",
    "immer",
    "lodash",
    "react",
    "react-media-recorder",
    "react-router-dom",
    "react-toastify",
    "react-loader-spinner",
    "react-cookie",
    "recoil",
    "react-confetti",
    "swiper",
  ],
};
