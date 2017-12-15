const path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    baseConfig = require('./webpack.config.base.js'),
    env = process.env.NODE_ENV,
    address = require('./address.js')[env],
    express = require('express'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig,{
    entry: {
        vendor: [
            'vue','vue-router','vuex','axios','fastclick',
            'vue-axios','vue-scroller'
        ]
    },    

    output: {
        path: address.outputDir,
        publicPath: address.projectURL,
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:16].js'
    },

    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader','less-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: ExtractTextPlugin.extract({
                            use: ['css-loader','less-loader'],
                            fallback: 'vue-style-loader'
                        })                      
                    }
                }
            }            
        ]
    },

	plugins: [
		new webpack.DefinePlugin({
	        'process.env': {
	            NODE_ENV: JSON.stringify(env),
                apiURL: JSON.stringify(address.apiURL),
                projectURL: JSON.stringify(address.projectURL)
	        }      
	    }), 

	    new webpack.optimize.UglifyJsPlugin({
	        sourceMap: true,
	        compress: {
	            warnings: false
	        }
	    }),

	    new webpack.LoaderOptionsPlugin({
	        minimize: true
	    }),

	    new ExtractTextPlugin({
	        filename: 'styles.[contenthash:8].css',
	        allChunks: true
	    }),

	    new webpack.optimize.CommonsChunkPlugin({
	        names: ['vendor','manifest'] 
	    }),

	    new CleanWebpackPlugin(
	        ['index.html','*.css','*.js'],
	        {
	            root: address.outputDir,
	            verbose:  true,    
	            dry: false,
	            // exclude: []   
	        }
	    )
	]         
});




