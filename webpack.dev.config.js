const merge = require('webpack-merge');
const config = require('./webpack.base.config.js');

module.exports = merge(config, {
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    // devServer 則是 webpack-dev-server 設定
    devServer: {
        host: '127.0.0.1',
        inline: true,
        port: 8009,
        open: true
    },
    mode: 'development'
});
