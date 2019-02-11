// inspired by https://github.com/mui-org/material-ui/blob/next/babel.config.js
let defaultPresets
const environemnt = process.env.BABEL_ENV || 'umd'

// We release a ES version of the package.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (environemnt === 'es') {
  defaultPresets = []
} else {
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        modules: ['esm', 'umd'].includes(environemnt) ? false : 'commonjs',
      },
    ],
  ]
}

module.exports = {
  presets: [...defaultPresets, '@babel/preset-react'],
  plugins: [
    /** mainly required to make storybook work, see
     * - https://github.com/storybooks/storybook/issues/3346#issuecomment-415982589
     * - https://github.com/storybooks/storybook/issues/3346#issuecomment-423719241
     */
    '@babel/plugin-transform-modules-commonjs',
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        fileName: false,
      },
    ],
  ],
}
