const path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
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
			// TODO: Add a svg loader
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			title: "Data about books"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
