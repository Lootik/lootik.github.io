var path = require("path");
var webpack = require("webpack");


module.exports = {
    cache: true,
    entry: {
        app: './app/app.js'
    },
    output: {
        path: path.join(__dirname, "./dist/"),
        publicPath: "./dist/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            //HTML
            {test: /\.html$/, loader: "html"},
            //SASS
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};