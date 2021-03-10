
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  "presets": [
                    [
                      "@babel/preset-env",
                      // "@babel/env",
                      {
                        "targets": {
                          "browsers": ["last 2 versions", "ie 10", "ie 9"]
                        },
                        "debug": true
                      }
                    ]
                  ],
                  "plugins": [
                    ["@babel/plugin-proposal-class-properties", { "loose": true }]
                  ]
                }
              }
            }
        ]
    }
}