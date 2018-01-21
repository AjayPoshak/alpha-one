const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
	entry: {
		app: "./src/index.js"
	},
	devtool: "inline-source-map",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "build/client"),
		publicPath: "build/client"
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
			{
				test: /\.less$/,
				loader: ["style-loader", "css-loader", "less-loader"],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["./src/build/client"]),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			title: "Data about books"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
