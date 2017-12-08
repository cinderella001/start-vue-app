const path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    baseConfig = require('./webpack.config.base.js'),
    env = process.env.NODE_ENV,
    address = require('./address.js')[env],
    express = require('express'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(baseConfig,{
    output: {
        publicPath: address.projectURL,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            }            
        ]
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true,
        host: address.host,
        port: address.port,
        before: function(app){
            app.use('/mock',express.static('../mock'))
        }
    },

    devtool: 'cheap-module-eval-source-map',

    performance: {
        hints: false
    },

	plugins: [
		new webpack.DefinePlugin({
	        'process.env': {
	            NODE_ENV: JSON.stringify(env),
                apiURL: JSON.stringify(address.apiURL),
                projectURL: JSON.stringify(address.projectURL)
	        }      
	    }), 

	    new webpack.NamedModulesPlugin(),

        new OpenBrowserPlugin({
            url: address.browserUrl
        })
    ]  
});


