const common = require('./webpack.config')
const merge = require('webpack-merge')

const developmentConfiguration = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader'
        ]
      }
    ]
  },
  devtool: 'sourcemap'
}

const config = merge.smartStrategy({
  mode: 'replace',
  devtool: 'replace',
  sourcemap: 'replace',
  'module.rules': 'append'
})(developmentConfiguration, common)

module.exports = config

console.log(config.module.rules);
