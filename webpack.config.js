const path = require('path');
const ROOT = path.resolve( __dirname, './src' );
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: ROOT,
    entry: './app.module.js',
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.ext$/,
                use: [
                  'cache-loader'
                ],
                include: path.resolve(__dirname, 'src')
              },
	        {
				test: /\.js$/,
                exclude: ['/node_modules/'],
                include: path.resolve(__dirname, "src"),
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'env'],
                  },
				loader: 'babel-loader'
	        },
            {
                test: /\.(scss|css)$/,
                include: path.resolve(__dirname, "src"),
                use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" },
                        { loader: "sass-loader" }
                    ]
            },
            {
                test: /\.(png|jp(e*)g|svg|eot|ttf|woff|woff2|otf)$/,  
                use: [{loader: 'url-loader'}, {loader: 'image-webpack-loader'}]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, "src"),
                use: 'html-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, ".dist"),
        stats: 'errors-only',
        clientLogLevel: "none",
        hot: true,
        port: 8080
    },
    resolve: {
        extensions: [".js", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            favicon: '../static/favicon.png',
            template: 'index.html',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist'])        
      ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
};