const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  reactStrictMode: true,
  experimental: { outputFileTracing: true },

  webpack: function (config, { dev, isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    // copy files you're interested in
    if (!dev) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [{ from: 'fonts', to: 'fonts' }]
        })
      )
    }

    return config
  }
}
