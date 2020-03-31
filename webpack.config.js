const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const ENV = process.env.NODE_ENV || "development";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let isDev = (ENV == "development");

let entry = {};
if(isDev) {
	entry.test = ["./js/test.js", "./css/test.scss"];
} else {
	entry.content = ["./js/content.js", "./css/scroll-capture.scss"];
	entry.background = ["./js/background.js"];
	entry["video-recording"] = ["./js/video-recording.js", "./css/video-recording.scss"];
}

module.exports = {
	context: path.resolve(__dirname, "src"),
	devtool: `[name].${ENV == "development" ? "inline-source-map" : "none"}`,
	entry: entry,
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
							publicPath:"./",
						},
					},
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.(twig)$/,
				exclude: /node_modules/,
				use: "twig-loader"
			},
			{
				test: /\.(xml|txt|md|hbs|mustache|html)$/,
				use: "raw-loader"
			},
			{
				test: /\.(woff2?|ttf|eot)(\?.*)?$/i,
				use: "file-loader?name=assets/fonts/[name].[ext]"
			},
			{
				test: /\.(svg|jpe?g|png|gif)(\?.*)?$/i,
				use: "file-loader?name=assets/images/[name].[ext]"
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// all options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
			ignoreOrder: false, // Enable to remove warnings about conflicting order
		}),
		new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(ENV) }),
		new webpack.DefinePlugin({ "process.env.BUILD_TIMESTAMP": new Date().getTime() }),
		new Dotenv({
			path: "./.env",
		}),
	],
	optimization: {
		minimize: false,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
			}),
		],
	},
	stats: { colors: true },

	node: {
		global: true,
		process: false,
		Buffer: false,
		__filename: true,
		__dirname: true,
		setImmediate: false,
		fs: "empty",
	}
};
