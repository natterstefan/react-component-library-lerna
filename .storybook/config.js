import { addDecorator, configure, setAddon } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import JSXAddon from 'storybook-addon-jsx'
import '@storybook/addon-console'

function loadStories() {
  const req = require.context('../packages', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator(
  withOptions({
    name: '@natterstefan',
    url: 'https://twitter.com/natterstefan',
    addonPanelInRight: true,
    goFullScreen: false,
    showAddonPanel: true,
    showSearchBox: false,
    sortStoriesByKind: true,
    showStoriesPanel: true,
  }),
)

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
  },
})

addDecorator(
  withBackgrounds([
    { name: 'gray', value: '#efefef' },
    { name: 'white', value: '#fff', default: true },
  ]),
)

setAddon(JSXAddon)

configure(loadStories, module)
