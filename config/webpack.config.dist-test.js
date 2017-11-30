const path = require('path'),
    webpack = require('webpack'),    
    merge = require('webpack-merge'),
    env = process.env.NODE_ENV,
    baseConfig = require('./webpack.config.base-dist.js'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig,{
    output: {
        path: path.resolve(__dirname, '../dist/test'),
        publicPath: 'http://localhost:3000/dist/test/',
        // publicPath: 'http://project.prod.com/app/',
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:16].js'
    },

	plugins: [
	    new webpack.DefinePlugin({
	        'process.env': {
	            NODE_ENV: '"test"',
                baseURL: "'http://localhost:3000'",
	            // baseURL: "'http://api.test.com'",
	            // projectURL: "'http://project.test.com/app'"                         
	        }
	    }),

	    new CleanWebpackPlugin(
	        ['test/index.html','test/*.css','test/*.js'],
	        {
	            root: path.resolve(__dirname, '../dist'),
	            verbose:  true,    
	            dry: false,
	            // exclude: []   
	        }
	    )
	]         
});




