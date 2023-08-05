import match from "rollup-plugin-match";
import combine from "rollup-plugin-combine";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./out/index.js",
  plugins: [match(), combine()],
  onwarn: function (message) {
    return;
  }, // ignore all warnings. remove those 3 lines if you want warning output :)
  output: {
    file: "./dist/latiteapi.js",
    format: "es",
  },
  plugins: [typescript()],
};
