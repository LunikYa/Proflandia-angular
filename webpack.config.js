const path = require('path');
const ROOT = path.resolve( __dirname, './src' );

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: ROOT,
    entry: './app.module.js',
    module: {
        rules: [
	        {
				test: /\.js$/,
				include: ['/node_modules/'],
				use: [{loader: 'babel-loader'}]
	        },
            {
                test: /\.(scss|css)$/,
                use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" },
                        { loader: "sass-loader" }
                    ]
            },

            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },

            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader?outputPath=fonts/'
            },

            {
                test: /\.html$/,
                exclude: /index.html$/,
                use: 'html-loader'
            }
        ]
    },

    resolve: {
        extensions: [".js", ".json"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngularJS',
            template: 'index.html',
            inject: true
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, ".dist"),
        compress: true,
        port: 8010
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
};
