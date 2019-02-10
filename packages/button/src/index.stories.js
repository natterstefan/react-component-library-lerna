import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'

import ButtonReadme from '../README.md'

import Button from '.'

const onClickHandler = e => action('clicked')(e)

const StoryComponent = () => {
  // Declare a new state variable, which we'll call "count" with inital state 0
  const [count, setCount] = useState(0)

  const buttonText = text('text', 'Click me')
  // the only reason onClick was written like this, and not just
  // `onClick = action('clicked')` is due to a cleaner export in the JSX tab
  const onClick = e => {
    setCount(count + 1)
    onClickHandler(e)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  )
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ButtonReadme))
  .addWithJSX('default', () => {
    const buttonText = text('text', 'Click me')
    return <Button onClick={onClickHandler}>{buttonText}</Button>
  })
  .addWithJSX('with click counter (hooks)', () => <StoryComponent />)
