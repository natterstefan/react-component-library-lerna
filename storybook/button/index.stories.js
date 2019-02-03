import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'

import Button from '../../packages/button/src'
import ButtonReadme from '../../packages/button/README.md'

// the only reason onClick was written like this, and not just
// `onClick = action('clicked')` is due to a cleaner export in the JSX tab
const onClick = e => {
  action('clicked')(e)
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ButtonReadme))
  .addWithJSX('with text', () => (
    <Button onClick={onClick}>Hello Button</Button>
  ))
  .addWithJSX('with a dynamic text', () => {
    const buttonText = text('text', 'Click me')
    return <Button onClick={onClick}>{buttonText}</Button>
  })
