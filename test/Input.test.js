import { shallow, mount, render } from 'enzyme'
import Input from '../lib/Input'
import React from 'react'
import { expect } from 'chai'

describe('Input: ', () => {

  // beforeEach( () => {
  //   returconst wrapper = shallow(<Input />)
  // })

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

  it('should instantiate with an input, submit button, and drop down menu', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.containsMatchingElement([<input></input>])).to.equal(true)
    expect(wrapper.containsMatchingElement([<button></button>])).to.equal(true)
    expect(wrapper.containsMatchingElement([<select></select>])).to.equal(true)
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

  
})
