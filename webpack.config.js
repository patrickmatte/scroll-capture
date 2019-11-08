const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ENV = process.env.NODE_ENV || "development";
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve(__dirname, "src"),
	devtool: `[name].${ENV == "development" ? "inline-source-map" : "none"}`,
	entry: {
		main: ["./js/main.js"],
		style: ["./css/main.scss"],
		content: ["./js/content.js"],
		test: ["./js/test.js"],
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
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
				test: /\.(tpl.html|twig)$/,
				exclude: /node_modules/,
				use: "twig-loader"
			},
			{
				test: /\.(xml|txt|md|hbs|mustache)$/,
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
		contentBase: "./build",
	},
};
