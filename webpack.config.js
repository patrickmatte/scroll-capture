const path = require("path");
const webpack = require("webpack");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ENV = process.env.NODE_ENV || "development";

module.exports = {
	context: path.resolve(__dirname, "src"),
	devtool: `[name].${ENV == "development" ? "inline-source-map" : "none"}`,
	entry: {
		main: ["./js/main.js", "./css/main.scss"],
		content: ["./js/content.js"],
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js|x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: { presets: ["es2015"] },
					},
				],
			},
			{
				test: /\.(s*)css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								importLoaders: 0, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
							},
						},

						"sass-loader",
					],
					publicPath:"./",
				}),
			},

			{
				test: /\.json$/,
				use: "json-loader?name=data/[name].[ext]",
			},
			{
				test: /\.(xml|txt|md|hbs|mustache)$/,
				use: "raw-loader",
			},
			{
				test: /\.(woff2?|ttf|eot)(\?.*)?$/i,
				use: "file-loader?name=assets/fonts/[name].[ext]",
			},
			{
				test: /\.(svg|jpe?g|png|gif)(\?.*)?$/i,
				use: "file-loader?name=assets/images/[name].[ext]",
			},
		],
	},

	plugins: [
		new ExtractTextPlugin({
			filename: "style.css",
			allChunks: true,
		}),
		new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(ENV) }),
		new webpack.DefinePlugin({ "process.env.BUILD_TIMESTAMP": new Date().getTime() }),
		new Dotenv({
			path: "./.env",
		}),
		new CopyWebpackPlugin([{ from: "index.html", to: "index.html" }]),
		new CopyWebpackPlugin([{ from: "manifest.json", to: "manifest.json" }]),
		new CopyWebpackPlugin([{ from: "background.js", to: "background.js" }]),
	],

	stats: { colors: true },

	node: {
		global: true,
		process: false,
		Buffer: false,
		__filename: true,
		__dirname: true,
		setImmediate: false,
		fs: "empty",
	},

	devServer: {
		port: process.env.PORT || 8888,
		host: process.env.HOST || "0.0.0.0",
		disableHostCheck: true,
		publicPath: "/",
		contentBase: "./src",
	},
};
