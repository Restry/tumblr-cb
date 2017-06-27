const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const baseUrl = path.resolve(__dirname, "dist");
// var CopyWebpackPlugin = require('copy-webpack-plugin');

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
	devServer: {
		proxy: { // proxy URLs to backend development server
			'/api': 'http://localhost:3001'
		},
		contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
		compress: true, // enable gzip compression
		historyApiFallback: true, // true for index.html upon 404, object for multiple paths
		hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
		https: false, // true for self-signed, object for cert authority
		noInfo: true, // only errors & warns on hot reload
		// ...
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
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: './css/[name].min.css',
			allChunks: true,
		})
	],
	devtool: "source-map",
};
