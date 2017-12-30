const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: {
		app: './src/server/index.js'
	},
	target: 'node', //Tells webpack not to touch any built-in modules like fs or path
	externals: [nodeExternals()], //Not to bundle node_modules at backend, should be included runtime
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build/server')
	},
	module: {
		rules: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.less$/, loader: ['css-loader', 'less-loader'], 
				exclude: /node_modules/}

		] 
	},
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(['./src/build/server']),
		new webpack.HotModuleReplacementPlugin()
	]
}
