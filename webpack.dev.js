const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const EsLintWebpackPlugin = require("eslint-webpack-plugin");
const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	devServer: {
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new EsLintWebpackPlugin({
			// failOnError: false,
			// failOnWarning: false,
			// emitError: false,
			// emitWarning: false,
		}),
		new StyleLintWebpackPlugin({
			// failOnError: false,
			// failOnWarning: false,
			// emitError: false,
			// emitWarning: false,
		}),
	],
});
