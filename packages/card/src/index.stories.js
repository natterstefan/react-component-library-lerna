import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'

import CardReadme from '../README.md'

import Card from '.'

// the only reason onClick was written like this, and not just
// `onClick = action('clicked')` is due to a cleaner export in the JSX tab
const onClick = e => {
  action('clicked')(e)
}

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(CardReadme))
  .addWithJSX('default', () => {
    const cardTitle = text('cardTitle', 'Card')
    const buttonText = text('buttonText', 'Click me')
    return <Card buttonText={buttonText} onClick={onClick} title={cardTitle} />
  })
