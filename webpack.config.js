const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,            
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
      } 
};

