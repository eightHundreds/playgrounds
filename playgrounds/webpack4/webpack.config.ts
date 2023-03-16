import { Configuration } from "webpack";
import path from "path";

const resolve = (...paths: string[]) => path.resolve(__dirname, "..", ...paths);

const config: Configuration = {
  entry: {
    main: resolve("./src/index.js"),
  },
  cache: {
    type: "filesystem",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    
  ],
};
export default config;
