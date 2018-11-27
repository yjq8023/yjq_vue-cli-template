const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loader 14.0 版本以上需要安装该插件
const HtmlWebpackPlugin = require('html-webpack-plugin');   // 用于生成运行的html文件

module.exports = {
    mode: 'development', // 模式，webpack会根据不同的模式做一些优化。可以设为none
    entry: path.join(__dirname, '../src/main.js'),
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html')
        })
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    }
}