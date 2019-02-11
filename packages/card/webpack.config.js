const config = require('../../webpack.config')

const pack = require('./package.json')

module.exports = {
  ...config,
  entry: `${__dirname}/src/index.js`,
  output: {
    library: pack.name,
    libraryTarget: 'umd',
    path: `${__dirname}/dist`,
    filename: 'index.js',
  },
}
