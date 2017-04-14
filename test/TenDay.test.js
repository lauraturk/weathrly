import { shallow, mount, render } from 'enzyme'
import TenDay from '../lib/TenDay'
import React from 'react'


describe('TenDay', () => {
  const tenDay = [
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  },
    {
    date: new Date(),
    status: 'sunny',
    location: 'the future',
    tempF: 75,
    tempC: 17,
    icon: 'http://google.com'
  }
]
  it('should render the current conditions to the dom', () => {
    let wrapper = shallow(<TenDay tenDayWeather = {tenDay} />)
    let found = wrapper.find('DayCard')
    expect(found.length).toEqual(10)
  })
})
