const path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    env = process.env.NODE_ENV,
    baseConfig = require('./webpack.config.base-all.js'),
    express = require('express');

module.exports = merge(baseConfig,{
    output: {
        publicPath: '/dev/',
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
        host: '10.1.1.124',
        port: '8080',
        before: function(app){
            app.use('/mock',express.static('../mock'))
        }
    },

    performance: {
        hints: false
    },

	plugins: [
		new webpack.DefinePlugin({
	        'process.env': {
	            NODE_ENV: '"dev"',
            	baseURL: "'http://localhost:3000'",
                // baseURL: "'http://api.test.com'",
            	// projectURL: "'http://project.test.com/app'"    
	        }      
	    }), 

	    new webpack.NamedModulesPlugin()   
    ]  
});

