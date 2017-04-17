import { shallow, mount, render } from 'enzyme'
import TenDay from '../lib/TenDay'
import React from 'react'
import dataResponse from './stub'
import scrubData from '../lib/scrubData'

describe('TenDay', () => {

  it('should render 10 days of conditions to the dom', () => {
    let cleanData = scrubData(dataResponse).tenDayWeather
    let wrapper = shallow(<TenDay tenDayWeather = {cleanData} />)
    let found = wrapper.find('DayCard')

    expect(found.length).toEqual(10)
  })

  it('should render specific props for different days', () => {
    let cleanData = scrubData(dataResponse).tenDayWeather
    let wrapper = shallow(<TenDay tenDayWeather = {cleanData} />)
    let found1 = wrapper.find('DayCard').first()
    let found2 = wrapper.find('DayCard').last()

    expect(found1.props().condition).toEqual("Chance of Rain")
    expect(found2.props().condition).toEqual("Clear")
  })
})
