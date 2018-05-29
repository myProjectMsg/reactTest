var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var htmlPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry:{
        main:'./src/js/app.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env','react']
                    }
                },
                exclude:/node_modules/
            },{
                test:/\.scss$/,
                use:extractTextPlugin.extract({
                    use:[{
                        loader:'css-loader',
                    },{
                        loader:'sass-loader'
                    }],
                    fallback:'style-loader'
                })
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5000,
                        outputPath:'image/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                use:['html-withimg-loader']
            }
        ]
    },
    plugins:[
        new extractTextPlugin('./css/main.css'),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            filename:'./index.html',
            template:'./src/index.html'
        })
    ],
    devServer:{
        port:'8888',
        host:'0.0.0.0',
        //出现错误显示在页面上
        overlay:{
            errors:true
        },
        //开启不刷新页面功能
        hot:true
    }
}