const path = require('path')

module.exports = (env, argv) => {
    const projectRoot = __dirname
    const isDevelopment = argv.mode === "development"

    return {
        context: projectRoot,
        mode: isDevelopment ? "development" : "production",
        devtool: isDevelopment ? "inline-source-map" : false,
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
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        }
    }
};