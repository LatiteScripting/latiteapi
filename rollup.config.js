import match from "rollup-plugin-match";
import combine from "rollup-plugin-combine";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./out/index.js",
  plugins: [match(), combine()],
  output: {
    file: "./dist/latiteapi.js",
    format: "es",
  },
  plugins: [typescript()],
};
