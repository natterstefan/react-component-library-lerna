import React from 'react'
import { mount, shallow } from 'enzyme'
import { Button } from '@natterstefan/ns-base-js'

import Card from '.'

describe('Card', () => {
  const props = {
    buttonText: 'Hello Button',
    title: 'Hello Card',
  }

  it('renders', () => {
    const wrapper = shallow(<Card {...props} />)
    expect(wrapper.find('h1').text()).toBe('Hello Card')
  })

  it('invokes onClick when clicked', () => {
    const onClick = jest.fn()
    const wrapper = mount(<Card {...props} onClick={onClick} />)
    wrapper.find(Button).simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
