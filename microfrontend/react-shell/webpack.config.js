const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
    name: 'react_shell',
    remotes: {
      angularApp: 'angularApp@http://localhost:4201/remoteEntry.js',
    },
     shared: {
    react: { singleton: true, requiredVersion: false, eager: true },
    'react-dom': { singleton: true, requiredVersion: false, eager: true },
  },
  })
  ],
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
  },
  mode: 'development',
};
