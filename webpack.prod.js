const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const EsLintWebpackPlugin = require("eslint-webpack-plugin");
const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new EsLintWebpackPlugin(),
		new StyleLintWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
		emitOnErrors: true,
		mangleExports: "size",
	},
});
