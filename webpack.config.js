const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const mf = require('@angular-architects/module-federation/webpack');
const share = mf.share;

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "angulartest"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "angulartest",
      library: { type: "var", name: "angulartest" },
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/bootstrap.ts',
      },

      shared: share({
        "@angular/core": { requiredVersion:'auto' }, 
        "@angular/common": { requiredVersion:'auto' }, 
        "@angular/router": { requiredVersion:'auto' },
        "rxjs": { requiredVersion:'auto' }
      })
    }

    )
  ],
};
