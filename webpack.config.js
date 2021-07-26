const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
};