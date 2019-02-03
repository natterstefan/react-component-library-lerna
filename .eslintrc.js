const path = require('path')

module.exports = {
  extends: 'eslint-config-ns',
  rules: {
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages'),
      },
    },
  },
}
