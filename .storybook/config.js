import { addParameters, configure, setAddon } from '@storybook/react'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import JSXAddon from 'storybook-addon-jsx'
import '@storybook/addon-console'

function loadStories() {
  const req = require.context('../packages', true, /\.stories\.js$/)
  req.keys().forEach(filename => {
    // exclude node_modules, as sub-packages can contain node_modules folder w/
    // stories
    if (filename.includes('node_modules')) {
      return
    }
    return req(filename)
  })
}

addParameters({
  options: {
    brandTitle: '@natterstefan',
    brandUrl: 'https://twitter.com/natterstefan',
    isFullscreen: false,
    panelPosition: 'right',
    showNav: true,
    showPanel: true,
    showSearchBox: false,
    sortStoriesByKind: true,
  },
})

addParameters({
  viewports: {
    ...INITIAL_VIEWPORTS,
  },
})

setAddon(JSXAddon)

configure(loadStories, module)
