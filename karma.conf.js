const webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: "",
        port: 9876,
        singleRun: false,
        frameworks: ["jasmine"],
        files: [
            "src/tests/index.test.js"
        ],
        preprocessors: {
            "src/tests/index.test.js": ["webpack"]
        },
        webpack: {
            module: webpackConfig().module
        },
        exclude: [

        ],
        browsers: ["ChromeHeadless"],
        colors : true,
        logLevel: config.LOG_ERROR,
        plugins: [
            "karma-chrome-launcher",
            "karma-webpack",
            "karma-jasmine",
            "karma-spec-reporter"
        ],
        reporters: [
            "spec"
        ]
    });
};
