import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'

import Readme from '../../../README.md'

import HelloWorld from '.'

const onClickHandler = e => action('clicked')(e)

storiesOf('HelloWorld', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .addWithJSX('default', () => {
    const displayText = text('text', 'Click me')
    return <HelloWorld onClick={onClickHandler}>{displayText}</HelloWorld>
  })
