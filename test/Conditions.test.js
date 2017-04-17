import { shallow, mount, render } from 'enzyme'
import Conditions from '../lib/Conditions'
import React from 'react'


describe.skip('Conditions', () => {
  const conditions = {
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  }
  it.skip('should render the current conditions to the dom', () => {
    const wrapper = render(<Conditions conditions={conditions} />)
    // let wrapStatus = wrapper.find('.condition-status')
    // console.log(wrapStatus.text())
    expect(true)
    expect(wrapper.text()).to.contain(conditions.status)
  })
})
