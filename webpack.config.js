const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(process.cwd(), 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-typescript", "@babel/preset-react"]
                    }
                }],
                exclude: /[\\/]node_modules[\\/]/
            }
        ]
    }
}