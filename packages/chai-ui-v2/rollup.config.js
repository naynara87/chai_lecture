import Ts from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import scss from "rollup-plugin-scss";
import url from "@rollup/plugin-url";
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
    Ts(),
    image(),
    scss({
      include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      fileName: "globalStyle.css",
    }),
    url(),
    copy({
      targets: [{ src: "src/fonts/", dest: "dist" }],
      targets: [{ src: "src/images/", dest: "dist" }],
    }),
  ],
  external: [
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
  ],
};
