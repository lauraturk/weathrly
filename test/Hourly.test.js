import { shallow, mount, render } from 'enzyme'
import Hourly from '../lib/Hourly'
import React from 'react'
import dataResponse from './stub'
import scrubData from '../lib/scrubData'

describe('Hourly', () => {

  it('should render 7 hours of conditions to the dom', () => {
    let cleanData = scrubData(dataResponse).hourly
    let wrapper = shallow(<Hourly hourly = {cleanData} />)
    let found = wrapper.find('HourCard')

    expect(found.length).toEqual(7)
  })

  it('should render specific props for different hours', () => {
    let cleanData = scrubData(dataResponse).hourly
    let wrapper = shallow(<Hourly hourly = {cleanData} />)
    let found1 = wrapper.find('HourCard').first()
    let found2 = wrapper.find('HourCard').last()

    expect(found1.props().hour).toEqual("10:00 AM")
    expect(found2.props().hour).toEqual("4:00 PM")
  })

  it('should render other specific props for different hours', () => {
    let cleanData = scrubData(dataResponse).hourly
    let wrapper = shallow(<Hourly hourly = {cleanData} />)
    let found1 = wrapper.find('HourCard').first()
    let found2 = wrapper.find('HourCard').last()

    expect(found1.props().temp).toEqual("56")
    expect(found2.props().temp).toEqual("61")
  })
})
