import { addDecorator, configure, setAddon } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import JSXAddon from 'storybook-addon-jsx'
import '@storybook/addon-console'

const req = require.context('../packages/storybook', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(
  withOptions({
    name: 'Storybook',
    url: 'https://natterstefan.me',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: true,
    sortStoriesByKind: true,
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
