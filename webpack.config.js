var HTMLWebPack = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        publicPath: './', //relative to  webpack.config
        filename: "src/bundle.js",
    },
    module: {
        loaders: [
            {
                test: /(\.css|\.scss$)/,
                loaders: ["style", "css","sass", "postcss-loader"]
            },
            {
                test: /\.(jpe?g|png|gif)$/i, 
                loader: 'url?limit=10000&name==./img/[hash].ext'
            }
        ],
    },
    postcss: [autoprefixer],
    plugins: [
        new HTMLWebPack({
            template: './src/index.html'
        })
    ]
}