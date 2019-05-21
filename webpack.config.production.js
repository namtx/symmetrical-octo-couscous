const merge = require('webpack-merge')
const common = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const miniCssExtractPluginConfig = {
  filename: "[name].css",
  chunkFileName: "[id].css"
}

const productionConfiguration = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(miniCssExtractPluginConfig)
  ]
}

module.exports = merge.smartStrategy({
  mode: 'replace',
  devtool: 'replace',
  'module.rules': 'prepend'
})(productionConfiguration, common)

