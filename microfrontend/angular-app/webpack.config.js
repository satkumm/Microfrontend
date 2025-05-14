const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    uniqueName: 'angularApp',
    publicPath: 'auto'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'angularApp',
      filename: 'remoteEntry.js', // 👈 This file is what React tries to load
      exposes: {
        './Component': './src/app/app.component.ts', // 👈 Update path to match your app
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true }
      }
    })
  ]
};
