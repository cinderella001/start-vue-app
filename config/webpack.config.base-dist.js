const path = require('path'),
    webpack = require('webpack'),    
    merge = require('webpack-merge'),
    env = process.env.NODE_ENV,
    baseConfig = require('./webpack.config.base-all.js'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig,{
    entry: {
        vendor: ['vue','vue-router','vuex','axios','fastclick']
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
	    })
	]         
});




