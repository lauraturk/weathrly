import { shallow, mount, render } from 'enzyme'
import Input from '../lib/Input'
import React from 'react'
import { expect } from 'chai'
import localStorage from './localStorage.js'


describe('Input: ', () => {

  it('should instantiate with a nav bar', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.is('nav')).to.equal(true)
  })

  it('should instantiate with an input, submit button, and drop down menu', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.containsMatchingElement([<input></input>])).to.equal(true)
    expect(wrapper.containsMatchingElement([<button></button>])).to.equal(true)
    expect(wrapper.containsMatchingElement([<select></select>])).to.equal(true)
  })

  it('should be able to be clicked once', () => {
    var mockFn = jest.fn()
    const wrapper = shallow(<Input handleClick={mockFn}/>)
    var button = wrapper.find('button')

    button.simulate('click')

    expect(mockFn.mock.calls.length).to.equal(1)
  })

  it('should instantiate w/ an empty location state', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.state('location')).to.equal('')
  })

  it('should instantiate w/ an empty apilocationSuggestion state', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.state('apiLocationSuggestion')).to.deep.equal({})
  })

  it('should instantiate w/ an EN as the default language in state', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.state('language')).to.deep.equal('EN')
  })

  it('should instantiate w/ an EN as the default language in state', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.state('language')).to.deep.equal('EN')
  })

  it('should update language in State', () => {
    const wrapper = shallow(<Input />)
    let select = wrapper.find('.lang')

    select.simulate('change', { target : { value : 'SP'}})

    expect(wrapper.state('language')).to.deep.equal('SP')
  })
})
