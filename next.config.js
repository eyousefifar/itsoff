const withImages = require("next-images");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
require("dotenv").config();
const withOffline = require("next-offline");

const path = require("path");
const Dotenv = require("dotenv-webpack");

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      }),
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        staticFileGlobs: ["static/**.*"],
        runtimeCaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/
          }
        ]
      })
    ];
    return config;
  },
  workboxOpts: {
    swDest: "service-worker.js"
  }
};

module.exports = withOffline(withImages(nextConfig));
