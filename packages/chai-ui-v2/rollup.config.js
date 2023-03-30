import Ts from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";
import url from "@rollup/plugin-url";

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
      output: "dist/assets/",
      fileName: "assets/globalStyle.css",
      failOnError: true,
      watch: "src/assets",
    }),
    Ts(),
    image(),
    url({
      fileName: "[name][extname]",
      include: ["**/*.mp3"],
      limit: 100000,
    }),
    copy({
      targets: [
        { src: "src/assets/fonts/", dest: "dist/assets/" },
        { src: "src/assets/images/", dest: "dist/assets/" },
        { src: "src/assets/effectSounds/", dest: "dist/assets/" },
      ],
    }),
  ],
  external: [
    "axios",
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
    "uuid",
  ],
};
