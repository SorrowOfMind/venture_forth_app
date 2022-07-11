const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtime: "automatic" }],
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node-modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader',
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: './dist',
        compress: true,
        hot: true,
        port: 5000
    },
    devtool: "eval-source-map"
}

