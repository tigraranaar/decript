const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /nodeModules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(ttf|woff|woff2|otf)$/,
				type: "asset/inline",
			},
			{
				test: /\.svg/,
				type: "asset/inline",
			},
			{
				test: /\.(jpg|jpeg|png)$/,
				type: "asset/inline",
			},
			{
				test: /\.pug/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true,
						},
					},
					{
						loader: "pug-html-loader",
						options: {
							pretty: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.pug",
		}),
	],
};
