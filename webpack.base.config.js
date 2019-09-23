const path = require('path');

// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
    entry: [
        './src/main.js'
    ],
    // output 是放入產生出來的結果的相關參數
    output: {
        path: `${__dirname}/dist`,
        filename: 'assets/js/bundle.[hash].js',
        publicPath: '/'
    },
    module: {
        // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）
        // 相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。
        // preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, '/node_modules/')
                ]
            },
            {
                test: /\.(gif|jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/images',
                            name: 'i.[hash].[ext]',
                            publicPath: 'assets/images'
                        }
                    }
                ]
            }
        ]
    },
    // plugins 放置所使用的外掛
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [`${__dirname}/dist`],
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            template: `${__dirname}/index.html`,
            filename: 'index.html',
            inject: 'body'
        }),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助快速启用 ServiceWorkers
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    resolve: {
        extensions: ['.js', 'jsx'],
        modules: [
            path.resolve('./node_modules')
        ]
    },
    optimization: {
        runtimeChunk: {
            name: 'm'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'v',
                    chunks: 'all'
                }
            }
        }
    }
};
