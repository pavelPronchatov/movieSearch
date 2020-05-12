const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, options) => {

  const config = {
    devtool: 'source-map',
    watch: true,
    entry: {
      'dist/index.js': ['babel-polyfill', './src/index.js'],
      'dist/style.css': ['./src/css/style.scss'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'script.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'eslint-loader',
          }
        }, {
          test: /\.(sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
          ]
        }, {
          test: /\.(png|svg|jpe?g|gif)$/i,
          use:
            {
              loader: 'file-loader',
            }
        }
      ]
    },

    plugins:  [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
    ]
  }

  return config;
}
