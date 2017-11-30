const path = require('path'),
    webpack = require('webpack'),    
    merge = require('webpack-merge'),
    env = process.env.NODE_ENV,
    baseConfig = require('./webpack.config.base-dist.js'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig,{
    output: {
        path: path.resolve(__dirname, '../dist/prod'),
        publicPath: 'http://localhost:3000/dist/prod/',
        // publicPath: 'http://project.prod.com/app/',
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:16].js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"prod"',
                baseURL: "'http://localhost:3000'",
                // baseURL: "'http://api.prod.com'",
                // projectURL: "'http://project.prod.com/app'"                         
            }
        }),

        new CleanWebpackPlugin(
            ['prod/index.html','prod/*.css','prod/*.js'],
            {
                root: path.resolve(__dirname, '../dist'),
                verbose:  true,    
                dry: false,
                // exclude: []   
            }
        )
    ]         
});




