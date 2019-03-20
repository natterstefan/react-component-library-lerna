/*
 * Prompt input for Inquirer
 *
 * Example
 * - https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/input.js
 */

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name of the package",
    default: 'example-component',
  },
  {
    type: 'input',
    name: 'version',
    message: "What's the initial version of the package",
    default: '0.0.1',
    validate(value) {
      // https://github.com/semver/semver/issues/232#issue-48635632
      const pass = value.match(
        /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/i,
      )
      if (pass) {
        return true
      }

      return 'Please enter a valid version (eg. 0.1.0 or 0.1.0-alpha)!'
    },
  },
  {
    type: 'input',
    name: 'description',
    message: "What's the description of the package",
    default: 'example-component description',
  },
  {
    type: 'input',
    name: 'author',
    message: "Who's the author of the package",
    default: 'Stefan Natter',
  },
  {
    type: 'input',
    name: 'licence',
    message: "What's the licence of the package",
    default: 'Apache-2.0',
  },
  {
    type: 'input',
    name: 'registry',
    message: "What's url of the npm registry you want to use",
    default: 'http://localhost:4873',
  },
]
