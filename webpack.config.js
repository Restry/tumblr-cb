const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const baseUrl = path.resolve(__dirname, "dist");

module.exports = {
	entry: './src/app.js',
	output: {
		path: baseUrl,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			// 使用babel-loader解析js或者jsx模块
			{ test: /\.js|.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			// 使用css-loader解析css模块
			{
				test: /\.css$/, loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: "css-loader",
				})
			},
			// html-loader
			{ test: /\.html$/, loader: 'html-loader' },
			{
				test: /\.(jpeg|jpg|png|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8193,
						name: 'images/[hash:8].[name].[ext]'
					}
				}]
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'application/font-woff'
					}
				}]
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'application/octet-stream'
					}
				}]
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'image/svg+xml'
					}
				}]
			},

			// {
			// 	test: /\.svg/,
			// 	use: {
			// 		loader: 'svg-url-loader',
			// 		options: {}
			// 	}
			// }

		]
	},
	plugins: [

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor-[hash].min.js',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin({
			filename: './css/[name].min.css',
			allChunks: true,
		})
	],
	devtool: "source-map",
};
