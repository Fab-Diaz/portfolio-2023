const path = require('path')

module.exports = {
  reactStrictMode: true,

  webpack: (config, options) => {
    // Adds support for using alias imports
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['context'] = path.join(__dirname, 'src/context')
    config.resolve.alias['hooks'] = path.join(__dirname, 'src/hooks')
    config.resolve.alias['lib'] = path.join(__dirname, 'src/lib')
    config.resolve.alias['pages'] = path.join(__dirname, 'src/pages')
    config.resolve.alias['styles'] = path.join(__dirname, 'src/styles')
    config.resolve.alias['types'] = path.join(__dirname, 'src/types')
    config.resolve.alias['utils'] = path.join(__dirname, 'src/utils')
    config.resolve.alias['storybook'] = path.join(__dirname, '.storybook')

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true, svgo: false } }],
    })

    // TODO: remove this region when issue is fixed
    // The issue: https://github.com/vercel/next.js/issues/14997
    // #region overriding to turn on type-checking
    if (!options.isServer) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
      config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      })
      config.plugins.push(
          new ForkTsCheckerWebpackPlugin({
            eslint: {
              files: './src/**/*.{ts,tsx,js,jsx}',
            },
          })
      )
    }
    //#endregion

    return config
  },
}
