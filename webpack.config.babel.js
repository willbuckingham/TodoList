const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		main: './src/containers/App.jsx'
	},
	output: {
		filename: './dist/scripts/[name].js'
	},
	webpack: true,
	devtool: 'source-map',
	module: {
		loaders: [
			{
		        test: /\.(js|jsx)$/,
		        exclude: /(node_modules|bower_components)/,
		        loaders: ["babel-loader"]
		    },
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('dist/styles/main.css', {
			allChunks: true
		})
	]
}

// Loaders allow you to preprocess the files on import or load them
// source-map generates the source map files which helps to debug on development