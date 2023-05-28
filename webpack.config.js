const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

// Dev server
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (_env, options) => {
    const devMode = options.mode !== "production";

    return {
        stats: "minimal",
        optimization: {
            minimizer: [
                new TerserPlugin({}),
                new CssMinimizerPlugin({}),
            ]
        },
        entry: {
            "bundle": "./src/index.js",
        },
        output: {
            filename: "js/[name].js",
            path: path.resolve(__dirname, "./dist"),
            publicPath: ""
        },
        devtool: devMode ? "eval-cheap-module-source-map" : undefined,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "esbuild-loader",
                    options: {
                        loader: "jsx",
                        target: "es2015"
                    }
                },

                // Load stylesheets
                {
                    test: /\.[s]?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },

                // https://getbootstrap.com/docs/5.3/getting-started/webpack/
                {
                    mimetype: "image/svg+xml",
                    scheme: "data",
                    type: "asset/resource",
                    generator: {
                        filename: "./icons/[hash].svg"
                    }
                },

                // Load images with the asset module, WP5
                {
                    test: /\.(ico|png|svg|jpg|jpeg|gif|svg|webp|tiff)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "./images/[hash][ext][query]"
                    }
                },
                // Load fonts with the asset module, WP5
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "./fonts/[hash][ext][query]"
                    }
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: "./css/app.css" }),
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./src/index.html",
                inject: "body",
            }),
            new CopyWebpackPlugin({
                patterns: [{ from: "./static/", to: "./dist/" }]
            }),
        ],
        devServer: {
            // New devserver 4 syntax!
            static: {
                // default to public, uncomment to change path
                directory: path.join(__dirname, "dist"),
            },
            compress: true,
            client: {
                overlay: true,
                progress: false,
            },
            // hot: true,
            historyApiFallback: true,
            open: true,
            // port: 8080,
        }
    }
}
