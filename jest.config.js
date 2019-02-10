/**
 * Notes
 *
 * - I had issues running tests in packages depending on other packages (symlinked
 *   with lerna bootstrap) at first. Errors during tests was the result. After
 *   reading this discussion, adding a `pretest` script resolved the issue.
 *   See: https://github.com/lerna/lerna/issues/1367#issuecomment-380187436
 *
 * - Parts of this configuration are inspired by: https://github.com/facebook/jest/issues/3112#issuecomment-398581705
 */
module.exports = {
  collectCoverageFrom: [
    'packages/**/*.js',
    '!packages/**/coverage/**/*.js',
    '!packages/**/dist/**/*.js',
    '!packages/**/prop-types.js',
    '!packages/**/*.stories.js',
    '!packages/**/*.test.js',
    '!packages/**/jest.*.js',
    '!packages/__tests__/**/*.js',
    '!packages/__mocks__/**/*.js',
  ],
  collectCoverage: true,
  modulePaths: ['<rootDir>'],
  notify: true,
  notifyMode: 'failure-change',
  projects: ['<rootDir>/packages/*'],
  resetMocks: true,
  resetModules: true,
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
  verbose: false, // if you want to see all tests for each suite, change to true
}
