import React from 'react'
import { mount, shallow } from 'enzyme'

import HelloWorld from '.'

describe('HelloWorld', () => {
  it('renders', () => {
    const wrapper = shallow(<HelloWorld>Hello HelloWorld</HelloWorld>)
    expect(wrapper.text()).toBe('Hello HelloWorld')
  })

  it('invokes onClick when clicked', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      <HelloWorld onClick={onClick}>Hello HelloWorld</HelloWorld>,
    )
    wrapper.find('HelloWorld').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
