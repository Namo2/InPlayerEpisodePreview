const webpack = require('webpack');

module.exports = (env) => {
    console.log("CLIENT: " + env.CLIENT)
    
    return {
        mode: "development",
        devtool: "inline-source-map",
        entry: "./Web/inPlayerPreview.ts",
        plugins: [
            new webpack.DefinePlugin({
                CLIENT: JSON.stringify(env.CLIENT ??= false),
            })
        ],
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
    }
};