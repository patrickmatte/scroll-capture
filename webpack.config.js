const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
	let isDev = (env == "development");

	return {
		watch: isDev,
		context: path.resolve(__dirname, "src"),
		devtool: `[name].${(isDev) ? "inline-source-map" : "none"}`,
		entry: {
			"content": ["./js/main.js", "./css/content.scss"],
			"background": [`./js/background-${env}.js`],
			"video-recording": ["./js/video-recording.js"]
		},
		output: {
			path: path.resolve(__dirname, "build"),
			filename: "[name].js",
		},
		module: {
			rules: [
				// {
				// 	test: /\.m?js$/,
				// 	exclude: /(node_modules|bower_components)/,
				// 	use: {
				// 		loader: 'babel-loader',
				// 		options: {
				// 			presets: ["@babel/preset-env"]
				// 		}
				// 	}
				// },
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: isDev,
								publicPath: "./",
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
			})
		],
		optimization: {
			minimize: !isDev,
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
}
