import Ts from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";

export default {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true, // preserve source folder
  },
  plugins: [Ts(), image()],
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
