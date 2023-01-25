import Ts from "rollup-plugin-typescript2";

const config = {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true, // preserve source folder
  },
  plugins: [Ts()],
  external: ["react", "@ds.e/foundation"],
};

export default config;
