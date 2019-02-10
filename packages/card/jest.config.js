const baseConfig = require('../../jest.config.js')

const pack = require('./package')

module.exports = {
  ...baseConfig,
  displayName: pack.name,
  name: pack.name,
  rootDir: '../..',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['/**/*.test.js'],
}
