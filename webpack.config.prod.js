const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: [ './src/client/index.js', './src/client/index.scss' ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css' }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src') 
                ],
                exclude: [ /node_modules/ ],
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/, 
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [ /node_modules/, ],
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname),
            '~c': path.resolve(__dirname, 'src/client'),
            '~': path.resolve(__dirname, 'src')
        },
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'chunk'
                }
            }
        }
    }
}
