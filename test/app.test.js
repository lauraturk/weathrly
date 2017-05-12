import { shallow, mount, render } from 'enzyme'
import App from '../lib/App'
import React from 'react'
import { expect } from 'chai'
import Input from '../lib/Input'
import Conditions from '../lib/Conditions'
import CurrentForecast from '../lib/CurrentForecast'
import Hourly from '../lib/Hourly'
import TenDay from '../lib/TenDay'
import dataResponse from './stub.js'
import localStorage from './localStorage.js'




describe('App', () => {

  it('should instantiate with a page wrapper', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.is('div')).to.equal(true)
  })

  it('should instantiate the components Input, Conditions, currentForecast, Hourly, and TenDay', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.containsMatchingElement(<Input />)).to.equal(true)
    expect(wrapper.containsMatchingElement(<Conditions />)).to.equal(true)
    expect(wrapper.containsMatchingElement(<CurrentForecast />)).to.equal(true)
    expect(wrapper.containsMatchingElement(<Hourly />)).to.equal(true)
    expect(wrapper.containsMatchingElement(<TenDay />)).to.equal(true)
  })

  it('should instantiate with a state', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.state('url')).to.equal(``)
    expect(wrapper.state('currentLocation')).to.equal('')
    expect(wrapper.state('tenDayWeather')).to.deep.equal([])
    expect(wrapper.state('conditions')).to.deep.equal({})
    expect(wrapper.state('hourly')).to.deep.equal([])
    expect(wrapper.state('currentForecast')).to.deep.equal({})
  })

  it('should update the state', () => {
    const wrapper = shallow(<App />)

    wrapper.setState({
      url: 'something.com',
      currentLocation: 'location'
    })

    expect(wrapper.state('url')).to.equal('something.com')
    expect(wrapper.state('currentLocation')).to.equal('location')
  })

})
