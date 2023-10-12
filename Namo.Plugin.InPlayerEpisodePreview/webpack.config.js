module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./Web/inPlayerPreview.ts",
    output: {
        path: __dirname + "/Web",
        filename: "inPlayerPreview.js"
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
};
