const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const SwRegisterWebpackPlugin = require('sw-register-webpack-plugin');
const config = require('./webpack.base.config.js');

module.exports = merge(config, {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                extractComments: false,
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
    plugins: [
        new WorkboxPlugin.GenerateSW({
            swDest: `service-worker.js?${Date.now()}`, // 輸出 Service worker 文件,
            cacheId: 'scrum-poker-pwa', // 設置前綴
            skipWaiting: true, // 強制等待中的 Service Worker 被激活
            clientsClaim: true, // Service Worker 被激活後使其立即獲得頁面控制權
            cleanupOutdatedCaches: true, // 尝试删除老版本缓存
            // （预加载）忽略某些文件
            exclude: [
                /CNAME/,
            ],
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/my-json-server.typicode\.com\//,
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'cached-api',
                        networkTimeoutSeconds: 2,
                        expiration: {
                            maxEntries: 50,
                            maxAgeSeconds: 24 * 60 * 60, // 1 day
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                }
            ]
        }),
        new SwRegisterWebpackPlugin({
            output: 'sw-register.js'
        }),
    ],
    performance: {
        hints: false
    },
    mode: 'production'
});
