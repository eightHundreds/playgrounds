module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "karma-typescript"],
    files: ["test/**/*.ts", "src/**/*.ts"],
    exclude: [],
    preprocessors: {
      "**/*.ts": ["karma-typescript"],
    },
    reporters: ["mocha", "karma-typescript"],
    port: 9876,
    browsers: ["Chrome"],
    singleRun: true,

    karmaTypescriptConfig: {
      tsconfig: "tsconfig.json",
      reports: {
        html: "coverage",
        "text-summary": "",
        json: "coverage",
        lcov: "coverage",
        clover: "coverage"
      },
      coverageOptions: {
        instrumentation: true, // 是否开启覆盖率报告,部分sourcemap不准确
        // exclude: /\.(d|spec|test)\.ts/i,
        // instrumenterOptions: {
        //   produceSourceMap: true,
        //   preserveComments: true
        // }
      }
    }
  });
};

// module.exports = function (config) {
//   config.set({
//     basePath:"",
//     frameworks: ["mocha", "karma-typescript"],

//     files: ["test/**/*.ts", "src/**/*.ts"],
//     exclude:[],
//     preprocessors: {
//       "**/*.ts": ["karma-typescript"],
//     },

//     reporters: ["mocha", "karma-typescript"],

//     browsers: ["Chrome"],

//     singleRun: true,
//     concurrency: Infinity,
//   });
// };
