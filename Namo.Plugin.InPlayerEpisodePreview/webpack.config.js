const path = require('path')

module.exports = () => {
    const projectRoot = __dirname
    
    return {
        context: projectRoot,
        mode: "development",
        devtool: "inline-source-map",
        entry: "./Web/InPlayerPreview.ts",
        output: {
            path: path.resolve(projectRoot, "Web"),
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