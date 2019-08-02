const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    // mode: "development",
    entry: {
        vendor: "./src/vendor.js",
        main: "./src/index.js"
    },
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.dirname(__dirname) + "/assets/static/gen"
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                inject: false,
                filename: "layout_gen.html",
                template: "./src/layout_template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     // Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse"
        // })
    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|webp)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.modernizrrc\.js$/,
                // Uncomment this when you use `JSON` format for configuration
                // type: 'javascript/auto'
                use: {
                    loader: "webpack-modernizr-loader"
                }
            }
        ]
    },
 };