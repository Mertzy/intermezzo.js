const path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: 'intermezzo.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Intermezzo',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};