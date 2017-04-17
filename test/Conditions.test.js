import { shallow, mount, render } from 'enzyme'
import Conditions from '../lib/Conditions'
import React from 'react'
import dataResponse from './stub'
import scrubData from '../lib/scrubData'

describe('Conditions', () => {

  it('should render the current Conditions to the dom', () => {
    let cleanData = scrubData(dataResponse).conditions
    let wrapper = shallow(<Conditions conditions = {cleanData} />)
    // let found = wrapper.find('conditions')

    expect(typeof(wrapper)).toEqual("object")
  })

  it('should render specific conditions', () => {
    let cleanData = scrubData(dataResponse).conditions
    let wrapper = shallow(<Conditions conditions = {cleanData} />)
    let found1 = wrapper.find('.condition-status')


    expect(found1.is('.condition-status')).toEqual(true)
    expect(found1.text()).toEqual('Overcast')
  })

  it('should render other specific conditions', () => {
    let cleanData = scrubData(dataResponse).conditions
    let wrapper = shallow(<Conditions conditions = {cleanData} />)
    let found1 = wrapper.find('.condition-location')

    console.log(wrapper.debug())

    expect(found1.text()).toEqual('San Francisco, CA')
  })

  it('should render even more specific conditions', () => {
    let cleanData = scrubData(dataResponse).conditions
    let wrapper = shallow(<Conditions conditions = {cleanData} />)
    let found1 = wrapper.find('.condition-temp-f')

    expect(found1.text()).toEqual('56.3°')
  })
})
