// partially inspired by https://github.com/facebook/jest/issues/3112
module.exports = {
  collectCoverageFrom: [
    'packages/**/*.js',
    '!packages/**/coverage/**/*.js',
    '!packages/**/dist/**/*.js',
    '!packages/**/prop-types.js',
    '!packages/**/*.stories.js',
    '!packages/**/*.test.js',
    '!packages/__tests__/**/*.js',
    '!packages/__mocks__/**/*.js',
  ],
  collectCoverage: true,
  notify: true,
  notifyMode: 'failure-change',
  roots: ['<rootDir>/packages/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/(build|dist|node_modules)/',
    '<rootDir>/packages/*/(build|dist|node_modules)/',
  ],
  transform: {
    '.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom-global',
  verbose: true,
}
