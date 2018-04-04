const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./main.ts",
    resolve: {
        extensions: [".js", ".ts"]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "build"),
        port: 3000,
        open: false,
        compress: true
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "main.js"
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: "ts-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};
