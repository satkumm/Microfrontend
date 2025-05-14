const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  optimization: {
    minimize: false,
    runtimeChunk: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
    name: 'react_shell',
    filename: 'remoteEntry.js',
    remotes: {
      app1: 'app1@http://localhost:3001/remoteEntry.js',
    },
    exposes: {
    './store': './src/store',
  },
     shared: {
    react: { singleton: true, requiredVersion: false, eager: true },
    'react-dom': { singleton: true, requiredVersion: false, eager: true },
    'react-redux': { singleton: true, eager: true },
    '@reduxjs/toolkit': { singleton: true, eager: true },
  },
  }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  },
//   devServer: {
//   static: path.join(__dirname, 'dist'),
//   port: 3001,
//   historyApiFallback: true,
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//   },
// },
  mode: 'development',
};
