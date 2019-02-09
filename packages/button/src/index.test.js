import React from 'react'
import { shallow } from 'enzyme'

import Button from '.'

describe('Button', () => {
  it('renders', () => {
    const wrapper = shallow(<Button>Hello Button</Button>)
    expect(wrapper.text()).toBe('Hello Button')
  })

  it('invokes onClick when clicked', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Button onClick={onClick}>Hello Button</Button>)
    wrapper.find('button').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
