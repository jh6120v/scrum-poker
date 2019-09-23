const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const config = require('./webpack.base.config.js');

module.exports = merge(config, {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true
                    },
                    output: {
                        comments: false
                    }
                }
            }),
        ]
    },
    performance: {
        hints: false
    },
    mode: 'production'
});
