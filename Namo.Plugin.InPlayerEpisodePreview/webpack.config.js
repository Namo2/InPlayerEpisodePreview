const webpack = require('webpack');

module.exports = () => {
    return {
        mode: "development",
        devtool: "inline-source-map",
        entry: "./Web/InPlayerPreview.ts",
        output: {
            path: __dirname + "/Web",
            filename: "InPlayerPreview.js"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                }
            ]
        }
    }
};