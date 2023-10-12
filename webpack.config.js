const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
	const isDev = argv.mode == 'development';
	console.log('isDev', isDev);

	const plugins = [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// all options are optional
			filename: `bundles/[name].css`,
			chunkFilename: `bundles/[id].css`,
			ignoreOrder: false, // Enable to remove warnings about conflicting order
		  }),
	];

	if (isDev) {
		plugins.push(new webpack.SourceMapDevToolPlugin());
	}
  
	return {
		context: path.resolve(__dirname, "src"),
		devtool: false,
		entry: {
			"content": ["./js/main.js", "./css/content.scss"],
			"background": [`./js/background-${argv.mode}.js`],
			"video-recording": ["./js/video-recording.js"]
		},
		target: 'web',
		watch: isDev,
		output: {
			path: path.resolve(__dirname, "build"),
			filename: "[name].js",
			publicPath: "/",
		},
		module: {
			rules: [
				{
					test: /\.(?:js|mjs|cjs)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
						}
					}
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: "./",
							},
						},
						'css-loader',
						'sass-loader'
					],
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
		plugins,
		optimization: {
			minimize: !isDev,
			minimizer: [
				new TerserPlugin({
					extractComments: false,
				}),
			],
		},
		stats: { colors: true },
		node: {
			global: true,
			__filename: true,
			__dirname: true,
		}
	};
}
