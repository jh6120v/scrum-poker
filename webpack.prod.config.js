const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.base.config.js');

module.exports = merge(config, {
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true
                    },
                    output: {
                        // 清除註解
                        comments: false,
                    }
                }
            })
        ]
    },
    performance: {
        hints: false
    },
    mode: 'production'
});
